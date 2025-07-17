# PowerShell script to download SVG icons for job shortcuts
$AssetsPath = "d:\Job shortcuts\Assets"

# Ensure Assets directory exists
if (!(Test-Path $AssetsPath)) {
    New-Item -ItemType Directory -Path $AssetsPath -Force
}

# Function to safely download a file
function Download-Icon {
    param(
        [string]$Url,
        [string]$FileName,
        [string]$SiteName
    )
    
    try {
        $FilePath = Join-Path $AssetsPath $FileName
        Write-Host "Downloading $SiteName icon from: $Url" -ForegroundColor Green
        
        # Try to download with user agent to avoid blocking
        $webClient = New-Object System.Net.WebClient
        $webClient.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36")
        $webClient.DownloadFile($Url, $FilePath)
        
        Write-Host "Successfully downloaded: $FileName" -ForegroundColor Cyan
        return $true
    }
    catch {
        Write-Host "Failed to download $SiteName icon: $($_.Exception.Message)" -ForegroundColor Red
        
        # Try to get favicon as fallback
        try {
            $domain = ([System.Uri]$Url).Host
            $faviconUrl = "https://$domain/favicon.ico"
            $faviconPath = Join-Path $AssetsPath ($FileName -replace '\.svg$', '.ico')
            
            Write-Host "Trying favicon fallback for $SiteName..." -ForegroundColor Yellow
            $webClient.DownloadFile($faviconUrl, $faviconPath)
            Write-Host "Downloaded favicon: $($FileName -replace '\.svg$', '.ico')" -ForegroundColor Cyan
            return $true
        }
        catch {
            Write-Host "Favicon fallback also failed for $SiteName" -ForegroundColor Red
            return $false
        }
    }
    finally {
        if ($webClient) {
            $webClient.Dispose()
        }
    }
}

# Function to get SVG URL or convert existing icon
function Get-SVGUrl {
    param(
        [string]$IconUrl,
        [string]$SiteName,
        [string]$Domain
    )
    
    # If it's already an SVG, return as is
    if ($IconUrl -match '\.svg$') {
        return $IconUrl
    }
    
    # For some known sites, try to get SVG from common sources
    switch -Regex ($Domain) {
        'linkedin\.com' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" }
        'github\.com' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" }
        'gitlab\.com' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gitlab.svg" }
        'hackerrank\.com' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hackerrank.svg" }
        'leetcode\.com' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/leetcode.svg" }
        'codechef\.com' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/codechef.svg" }
        'codeforces\.com' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/codeforces.svg" }
        'topcoder\.com' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/topcoder.svg" }
        'indeed\.com' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/indeed.svg" }
        'glassdoor\.com' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/glassdoor.svg" }
        'monster\.com' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/monster.svg" }
        'coursera\.org' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/coursera.svg" }
        'edx\.org' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/edx.svg" }
        'udemy\.com' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/udemy.svg" }
        'khanacademy\.org' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/khanacademy.svg" }
        'skillshare\.com' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/skillshare.svg" }
        'pluralsight\.com' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/pluralsight.svg" }
        'codecademy\.com' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/codecademy.svg" }
        'freecodecamp\.org' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/freecodecamp.svg" }
        'brilliant\.org' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/brilliant.svg" }
        'tryhackme\.com' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tryhackme.svg" }
        'slack\.com' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/slack.svg" }
        'trello\.com' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/trello.svg" }
        'asana\.com' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/asana.svg" }
        'notion\.so' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/notion.svg" }
        'figma\.com' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/figma.svg" }
        'zoom\.us' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zoom.svg" }
        'dropbox\.com' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/dropbox.svg" }
        'canva\.com' { return "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/canva.svg" }
        default { return $IconUrl }
    }
}

# Job shortcuts data - extracted from the JavaScript file
$jobShortcuts = @(
    @{Name="LinkedIn"; Url="https://linkedin.com"; Icon="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"}
    @{Name="Internshala"; Url="https://internshala.com"; Icon="Assets/INternshaa.jpeg"}
    @{Name="AngelList Talent"; Url="https://angel.co"; Icon="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/angellist.svg"}
    @{Name="Hirect"; Url="https://hirect.in"; Icon="https://play-lh.googleusercontent.com/2sREY-8upjmaLDCTztldQf6u_-y7dBJSRlwXCSV6M7bTDlUBz4mgUvEHh3n-L-yW3A"}
    @{Name="CutShort"; Url="https://cutshort.io"; Icon="https://cutshort.io/assets/images/cutshort-logo.png"}
    @{Name="Instahyre"; Url="https://instahyre.com"; Icon="https://assets.instahyre.com/instahyre/images/favicon.ico"}
    @{Name="Naukri"; Url="https://naukri.com"; Icon="https://static.naukimg.com/s/0/0/i/naukri-icon.png"}
    @{Name="Indeed"; Url="https://indeed.com"; Icon="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/1b99f9b2bb334e0985e2a2b4b8c7d004"}
    @{Name="Glassdoor"; Url="https://glassdoor.com"; Icon="https://logo.clearbit.com/glassdoor.com"}
    @{Name="Monster"; Url="https://monster.com"; Icon="https://logo.clearbit.com/monster.com"}
    @{Name="CareerBuilder"; Url="https://careerbuilder.com"; Icon="https://logo.clearbit.com/careerbuilder.com"}
    @{Name="SimplyHired"; Url="https://simplyhired.com"; Icon="https://logo.clearbit.com/simplyhired.com"}
    @{Name="Job.com"; Url="https://job.com"; Icon="https://logo.clearbit.com/job.com"}
    @{Name="Shine"; Url="https://shine.com"; Icon="https://static.shine.com/m/static/images/favicon.ico"}
    @{Name="Freshersworld"; Url="https://freshersworld.com"; Icon="https://www.freshersworld.com/favicon.ico"}
    @{Name="WorkIndia"; Url="https://workindia.in"; Icon="https://d1csarkz8obe9u.cloudfront.net/workindia/logo/workindia-icon.png"}
    @{Name="TimesJobs"; Url="https://timesjobs.com"; Icon="https://www.timesjobs.com/favicon.ico"}
    @{Name="Turing"; Url="https://turing.com"; Icon="https://uploads-ssl.webflow.com/5f8db913d5433c1b9aad9c5c/5fb157c5b1a63f4fbc0c5f5c_favicon-96x96.png"}
    @{Name="HackerRank Jobs"; Url="https://www.hackerrank.com/jobs"; Icon="https://hrcdn.net/community-frontend/assets/brand/h_mark_sm.svg"}
    @{Name="ZipRecruiter"; Url="https://ziprecruiter.com"; Icon="https://logo.clearbit.com/ziprecruiter.com"}
    @{Name="Dribbble Jobs"; Url="https://dribbble.com/jobs"; Icon="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/dribbble.svg"}
    @{Name="Jooble"; Url="https://jooble.org"; Icon="https://jooble.org/favicon.ico"}
    
    # Remote Job Portals
    @{Name="Remotive"; Url="https://remotive.io"; Icon="https://remotive.io/favicon.ico"}
    @{Name="We Work Remotely"; Url="https://weworkremotely.com"; Icon="https://weworkremotely.com/favicon.ico"}
    @{Name="Remote OK"; Url="https://remoteok.io"; Icon="https://remoteok.io/assets/favicon.ico"}
    @{Name="Jobspresso"; Url="https://jobspresso.co"; Icon="https://jobspresso.co/favicon.ico"}
    @{Name="Toptal"; Url="https://toptal.com"; Icon="https://bs-uploads.toptal.io/blackfish-uploads/public-files/toptal_favicon.png"}
    @{Name="Working Nomads"; Url="https://workingnomads.co/jobs"; Icon="https://workingnomads.co/static/img/logo-square.png"}
    @{Name="Outsourcely"; Url="https://outsourcely.com"; Icon="https://outsourcely.com/favicon.ico"}
    @{Name="Remote.co"; Url="https://remote.co"; Icon="https://remote.co/favicon.ico"}
    @{Name="Hubstaff Talent"; Url="https://talent.hubstaff.com"; Icon="https://talent.hubstaff.com/favicon.ico"}
    @{Name="JustRemote"; Url="https://justremote.co"; Icon="https://justremote.co/favicon.ico"}
    @{Name="SkipTheDrive"; Url="https://skipthedrive.com"; Icon="https://skipthedrive.com/favicon.ico"}
    @{Name="Pangian"; Url="https://pangian.com"; Icon="https://pangian.com/favicon.ico"}
    @{Name="PeoplePerHour"; Url="https://peopleperhour.com"; Icon="https://logo.clearbit.com/peopleperhour.com"}
    @{Name="Crossover"; Url="https://crossover.com"; Icon="https://crossover.com/favicon.ico"}
    @{Name="CloudDevs"; Url="https://clouddevs.com"; Icon="https://clouddevs.com/favicon.ico"}
    @{Name="Arc"; Url="https://arc.dev"; Icon="https://arc.dev/favicon.ico"}
    @{Name="Gun.io"; Url="https://gun.io"; Icon="https://gun.io/favicon.ico"}
    @{Name="FlexJobs"; Url="https://flexjobs.com"; Icon="https://logo.clearbit.com/flexjobs.com"}
    @{Name="Workew"; Url="https://workew.com"; Icon="https://workew.com/favicon.ico"}
    @{Name="RemoteLeads"; Url="https://remoteleads.io"; Icon="https://remoteleads.io/favicon.ico"}
)

Write-Host "Starting icon download process..." -ForegroundColor Yellow
Write-Host "Total shortcuts to process: $($jobShortcuts.Count)" -ForegroundColor Yellow

$successCount = 0
$failCount = 0

foreach ($shortcut in $jobShortcuts) {
    $domain = ([System.Uri]$shortcut.Url).Host
    $svgUrl = Get-SVGUrl -IconUrl $shortcut.Icon -SiteName $shortcut.Name -Domain $domain
    
    # Create safe filename
    $safeFileName = $shortcut.Name -replace '[^\w\s-]', '' -replace '\s+', '_'
    $fileName = if ($svgUrl -match '\.svg$') { "$safeFileName.svg" } else { "$safeFileName.png" }
    
    if (Download-Icon -Url $svgUrl -FileName $fileName -SiteName $shortcut.Name) {
        $successCount++
    } else {
        $failCount++
    }
    
    Start-Sleep -Milliseconds 500  # Small delay between downloads
}

Write-Host "`nDownload Summary:" -ForegroundColor Yellow
Write-Host "Successfully downloaded: $successCount icons" -ForegroundColor Green
Write-Host "Failed downloads: $failCount icons" -ForegroundColor Red
Write-Host "Icons saved to: $AssetsPath" -ForegroundColor Cyan
