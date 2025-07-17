// Website shortcuts data
const websiteData = [
        // Job Portals
        {
                name: "LinkedIn",
                url: "https://linkedin.com",
                icon: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
                description: "Professional network",
                category: "job",
                color: "#0A66C2"
        },
        {
                name: "Internshala",
                url: "https://internshala.com",
                icon: "Assets/internshala.jpeg",
                description: "Internships & jobs",
                category: "job",
                color: "#00A5EC"
        },
        {
                name: "Well Found",
                url: "https://wellfound.com/",
                icon: "Assets/wellfound-symbol-white.png",
                description: "Startup jobs",
                category: "job",
                color: "#000000"
        },
        {
                name: "CutShort",
                url: "https://cutshort.io",
                icon: "Assets/cutshot.jpeg",
                description: "Tech job platform",
                category: "job",
                color: "#6C5CE7"
        },
        {
                name: "Instahyre",
                url: "https://instahyre.com",
                icon: "https://assets.instahyre.com/instahyre/images/favicon.ico",
                description: "Quick hiring",
                category: "job",
                color: "#E74C3C"
        },
        {
                name: "Naukri",
                url: "https://naukri.com",
                icon: "https://static.naukimg.com/s/0/0/i/naukri-icon.png",
                description: "Job search",
                category: "job",
                color: "#4A90E2"
        },
        {
                name: "Indeed",
                url: "https://indeed.com",
                icon: "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/1b99f9b2bb334e0985e2a2b4b8c7d004",
                description: "Job search engine",
                category: "job",
                color: "#003A9B"
        },
        {
                name: "Glassdoor",
                url: "https://glassdoor.com",
                icon: "https://logo.clearbit.com/glassdoor.com",
                description: "Company reviews",
                category: "job",
                color: "#0CAA41"
        },
        {
                name: "Foundit",
                url: "https://www.foundit.in/user",
                icon: "https://logo.clearbit.com/monster.com",
                description: "Job board",
                category: "job",
                color: "#6E4A9E"
        },
        {
                name: "SimplyHired",
                url: "https://simplyhired.com",
                icon: "https://logo.clearbit.com/simplyhired.com",
                description: "Job aggregator",
                category: "job",
                color: "#2E86AB"
        },
        {
                name: "Job.com",
                url: "https://job.com",
                icon: "https://logo.clearbit.com/job.com",
                description: "Global jobs",
                category: "job",
                color: "#1B4F72"
        },
        {
                name: "Shine",
                url: "https://shine.com",
                icon: "Assets/shine-com-seeklogo.png",
                description: "Job portal",
                category: "job",
                color: "#F39C12"
        },
        {
                name: "Freshersworld",
                url: "https://freshersworld.com",
                icon: "https://blog.freshersworld.com/wp-content/uploads/2019/08/fw-logo-1.jpg",
                description: "Fresher jobs",
                category: "job",
                color: "#27AE60"
        },
        {
                name: "TimesJobs",
                url: "https://timesjobs.com",
                icon: "Assets/TimesJob.jpeg",
                description: "Job portal",
                category: "job",
                color: "#8E44AD"
        },
        {
                name: "Turing",
                url: "https://turing.com",
                icon: "https://uploads-ssl.webflow.com/5f8db913d5433c1b9aad9c5c/5fb157c5b1a63f4fbc0c5f5c_favicon-96x96.png",
                description: "Remote tech jobs",
                category: "job",
                color: "#3498DB"
        },
        {
                name: "HackerRank Jobs",
                url: "https://www.hackerrank.com/jobs",
                icon: "https://hrcdn.net/community-frontend/assets/brand/h_mark_sm.svg",
                description: "Developer jobs",
                category: "job",
                color: "#1BA94C"
        },
        {
                name: "ZipRecruiter",
                url: "https://ziprecruiter.com",
                icon: "https://logo.clearbit.com/ziprecruiter.com",
                description: "Job matching",
                category: "job",
                color: "#1976D2"
        },
        {
                name: "Dribbble Jobs",
                url: "https://dribbble.com/jobs",
                icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/dribbble.svg",
                description: "Design jobs",
                category: "job",
                color: "#EA4C89"
        },
        {
                name: "Jooble",
                url: "https://jooble.org",
                icon: "https://jooble.org/favicon.ico",
                description: "Job search engine",
                category: "job",
                color: "#4285F4"
        },

        // Remote Job Portals
        {
                name: "Remotive",
                url: "https://remotive.io",
                icon: "https://remotive.io/favicon.ico",
                description: "Remote job community",
                category: "remotejob",
                color: "#FF6B6B"
        },
        {
                name: "We Work Remotely",
                url: "https://weworkremotely.com",
                icon: "https://weworkremotely.com/favicon.ico",
                description: "Remote work jobs",
                category: "remotejob",
                color: "#E74C3C"
        },
        {
                name: "Remote OK",
                url: "https://remoteok.io",
                icon: "https://remoteok.io/assets/favicon.ico",
                description: "Remote job aggregator",
                category: "remotejob",
                color: "#FF4757"
        },
        {
                name: "Jobspresso",
                url: "https://jobspresso.co",
                icon: "https://jobspresso.co/favicon.ico",
                description: "Curated remote jobs",
                category: "remotejob",
                color: "#8B4513"
        },
        {
                name: "Toptal",
                url: "https://toptal.com",
                icon: "https://bs-uploads.toptal.io/blackfish-uploads/public-files/toptal_favicon.png",
                description: "Elite freelancers",
                category: "remotejob",
                color: "#3863A0"
        },
        {
                name: "Working Nomads",
                url: "https://workingnomads.co/jobs",
                icon: "https://workingnomads.co/static/img/logo-square.png",
                description: "Digital nomad jobs",
                category: "remotejob",
                color: "#FF6B6B"
        },
        {
                name: "Outsourcely",
                url: "https://outsourcely.com",
                icon: "https://outsourcely.com/favicon.ico",
                description: "Remote outsourcing",
                category: "remotejob",
                color: "#2ECC71"
        },
        {
                name: "Remote.co",
                url: "https://remote.co",
                icon: "https://remote.co/favicon.ico",
                description: "Remote job board",
                category: "remotejob",
                color: "#2D5BFF"
        },
        {
                name: "Hubstaff Talent",
                url: "https://talent.hubstaff.com",
                icon: "https://talent.hubstaff.com/favicon.ico",
                description: "Freelance talent",
                category: "remotejob",
                color: "#4A90E2"
        },
        {
                name: "JustRemote",
                url: "https://justremote.co",
                icon: "https://justremote.co/favicon.ico",
                description: "Remote jobs only",
                category: "remotejob",
                color: "#9B59B6"
        },
        {
                name: "SkipTheDrive",
                url: "https://skipthedrive.com",
                icon: "https://skipthedrive.com/favicon.ico",
                description: "No commute jobs",
                category: "remotejob",
                color: "#34495E"
        },
        {
                name: "Pangian",
                url: "https://pangian.com",
                icon: "https://pangian.com/favicon.ico",
                description: "Global remote jobs",
                category: "remotejob",
                color: "#1ABC9C"
        },
        {
                name: "PeoplePerHour",
                url: "https://peopleperhour.com",
                icon: "https://logo.clearbit.com/peopleperhour.com",
                description: "Freelance marketplace",
                category: "remotejob",
                color: "#F39C12"
        },
        {
                name: "Crossover",
                url: "https://crossover.com",
                icon: "https://crossover.com/favicon.ico",
                description: "Remote tech jobs",
                category: "remotejob",
                color: "#E67E22"
        },
        {
                name: "CloudDevs",
                url: "https://clouddevs.com",
                icon: "https://clouddevs.com/favicon.ico",
                description: "Cloud developers",
                category: "remotejob",
                color: "#3498DB"
        },
        {
                name: "Arc",
                url: "https://arc.dev",
                icon: "https://arc.dev/favicon.ico",
                description: "Developer marketplace",
                category: "remotejob",
                color: "#2C3E50"
        },
        {
                name: "Gun.io",
                url: "https://gun.io",
                icon: "https://gun.io/favicon.ico",
                description: "Freelance developers",
                category: "remotejob",
                color: "#E74C3C"
        },
        {
                name: "FlexJobs",
                url: "https://flexjobs.com",
                icon: "https://logo.clearbit.com/flexjobs.com",
                description: "Flexible & remote jobs",
                category: "remotejob",
                color: "#FF6B35"
        },
        {
                name: "Workew",
                url: "https://workew.com",
                icon: "https://workew.com/favicon.ico",
                description: "Remote work platform",
                category: "remotejob",
                color: "#8E44AD"
        },
        {
                name: "RemoteLeads",
                url: "https://remoteleads.io",
                icon: "https://remoteleads.io/favicon.ico",
                description: "Remote job leads",
                category: "remotejob",
                color: "#27AE60"
        },

        // Coding Platforms
        {
                name: "GitHub",
                url: "https://github.com",
                icon: "https://github.githubassets.com/favicons/favicon.svg",
                description: "Code repository",
                category: "coding",
                color: "#181717"
        },
        {
                name: "GitLab",
                url: "https://gitlab.com",
                icon: "https://gitlab.com/assets/favicon-7901bd695fb93edb07975966062049829afb56cf11511236e61bcf425070e36e.png",
                description: "DevOps platform",
                category: "coding",
                color: "#FC6D26"
        },
        {
                name: "HackerRank",
                url: "https://hackerrank.com",
                icon: "https://hrcdn.net/community-frontend/assets/brand/h_mark_sm.svg",
                description: "Coding challenges",
                category: "coding",
                color: "#1BA94C"
        },
        {
                name: "LeetCode",
                url: "https://leetcode.com",
                icon: "https://leetcode.com/favicon.ico",
                description: "Algorithm practice",
                category: "coding",
                color: "#FFA500"
        },
        {
                name: "CodeChef",
                url: "https://codechef.com",
                icon: "https://cdn.codechef.com/images/cc-logo.svg",
                description: "Competitive programming",
                category: "coding",
                color: "#5B4638"
        },
        {
                name: "GeeksforGeeks",
                url: "https://geeksforgeeks.org",
                icon: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_favicon.png",
                description: "Programming portal",
                category: "coding",
                color: "#2F8D46"
        },
        {
                name: "Codeforces",
                url: "https://codeforces.com",
                icon: "https://codeforces.org/favicon.ico",
                description: "Programming contests",
                category: "coding",
                color: "#1976D2"
        },
        {
                name: "TopCoder",
                url: "https://topcoder.com",
                icon: "https://www.topcoder.com/favicon.ico",
                description: "Competitive programming",
                category: "coding",
                color: "#FF6600"
        },
        {
                name: "Coderbyte",
                url: "https://coderbyte.com",
                icon: "https://coderbyte.com/favicon.ico",
                description: "Coding challenges",
                category: "coding",
                color: "#4A90E2"
        },
        {
                name: "Exercism",
                url: "https://exercism.io",
                icon: "https://exercism.org/favicon.ico",
                description: "Code practice",
                category: "coding",
                color: "#009CAB"
        },
        {
                name: "InterviewBit",
                url: "https://interviewbit.com",
                icon: "https://www.interviewbit.com/favicon.ico",
                description: "Interview prep",
                category: "coding",
                color: "#FF6B35"
        },
        {
                name: "Project Euler",
                url: "https://projecteuler.net",
                icon: "https://projecteuler.net/favicon.ico",
                description: "Math & programming",
                category: "coding",
                color: "#8B4513"
        },
        {
                name: "SPOJ",
                url: "https://spoj.com",
                icon: "https://www.spoj.com/favicon.ico",
                description: "Online judge",
                category: "coding",
                color: "#2E8B57"
        },
        {
                name: "HackerEarth",
                url: "https://hackerearth.com",
                icon: "https://www.hackerearth.com/favicon.ico",
                description: "Programming challenges",
                category: "coding",
                color: "#323754"
        },
        {
                name: "Coding Ninjas",
                url: "https://codingninjas.com",
                icon: "https://www.codingninjas.com/favicon.ico",
                description: "Programming courses",
                category: "coding",
                color: "#DD6B20"
        },
        {
                name: "CS50",
                url: "https://cs50.harvard.edu",
                icon: "https://cs50.harvard.edu/favicon.ico",
                description: "Harvard CS course",
                category: "coding",
                color: "#A51C30"
        },
        {
                name: "Codewars",
                url: "https://www.codewars.com",
                icon: "https://www.codewars.com/favicon.ico",
                description: "Code kata practice",
                category: "coding",
                color: "#B1361E"
        },
        {
                name: "Edabit",
                url: "https://edabit.com",
                icon: "https://edabit.com/favicon.ico",
                description: "Interactive challenges",
                category: "coding",
                color: "#3B82F6"
        },
        {
                name: "Replit",
                url: "https://replit.com",
                icon: "https://replit.com/public/images/favicon.ico",
                description: "Online IDE",
                category: "coding",
                color: "#F26207"
        },
        {
                name: "Programiz",
                url: "https://programiz.com",
                icon: "https://www.programiz.com/favicon.ico",
                description: "Learn to code",
                category: "coding",
                color: "#5865F2"
        },

        // Learning Platforms
        {
                name: "Coursera",
                url: "https://coursera.org",
                icon: "https://coursera-university-assets.s3.amazonaws.com/fa/cb/b5095b42408eb29a1b688a6bb02b/favicon.ico",
                description: "Online courses",
                category: "learning",
                color: "#0056D3"
        },
        {
                name: "edX",
                url: "https://edx.org",
                icon: "https://www.edx.org/favicon.ico",
                description: "University courses",
                category: "learning",
                color: "#02262B"
        },
        {
                name: "Udemy",
                url: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
                icon: "https://www.udemy.com/staticx/udemy/images/v7/favicon.ico",
                description: "Skill development",
                category: "learning",
                color: "#A435F0"
        },
        {
                name: "Khan Academy",
                url: "https://khanacademy.org",
                icon: "https://www.khanacademy.org/favicon.ico",
                description: "Free education",
                category: "learning",
                color: "#14BF96"
        },
        {
                name: "Skillshare",
                url: "https://skillshare.com",
                icon: "https://static.skillshare.com/assets/images/favicon.ico",
                description: "Creative skills",
                category: "learning",
                color: "#00FF88"
        },
        {
                name: "Pluralsight",
                url: "https://pluralsight.com",
                icon: "https://www.pluralsight.com/favicon.ico",
                description: "Tech training",
                category: "learning",
                color: "#F15B2A"
        },
        {
                name: "LinkedIn Learning",
                url: "https://linkedin.com/learning",
                icon: "https://static.licdn.com/aero-v1/sc/h/al2o9zrvru7aqj8e1x2rzsrca",
                description: "Professional courses",
                category: "learning",
                color: "#0A66C2"
        },
        {
                name: "MIT OpenCourseWare",
                url: "https://ocw.mit.edu",
                icon: "https://ocw.mit.edu/favicon.ico",
                description: "MIT free courses",
                category: "learning",
                color: "#8B0000"
        },
        {
                name: "Codecademy",
                url: "https://codecademy.com",
                icon: "https://www.codecademy.com/favicon.ico",
                description: "Interactive coding",
                category: "learning",
                color: "#1F4788"
        },
        {
                name: "freeCodeCamp",
                url: "https://freecodecamp.org",
                icon: "https://www.freecodecamp.org/favicon.ico",
                description: "Learn to code free",
                category: "learning",
                color: "#006400"
        },
        {
                name: "Brilliant",
                url: "https://brilliant.org",
                icon: "https://brilliant.org/favicon.ico",
                description: "Math & science",
                category: "learning",
                color: "#FFB900"
        },
        {
                name: "SoloLearn",
                url: "https://sololearn.com",
                icon: "https://www.sololearn.com/favicon.ico",
                description: "Mobile learning",
                category: "learning",
                color: "#149438"
        },
        {
                name: "FutureLearn",
                url: "https://futurelearn.com",
                icon: "https://www.futurelearn.com/favicon.ico",
                description: "Social learning",
                category: "learning",
                color: "#DE3A7A"
        },
        {
                name: "W3Schools",
                url: "https://w3schools.com",
                icon: "https://www.w3schools.com/favicon.ico",
                description: "Web development",
                category: "learning",
                color: "#04AA6D"
        },
        {
                name: "The Odin Project",
                url: "https://theodinproject.com",
                icon: "https://www.theodinproject.com/favicon.ico",
                description: "Web dev curriculum",
                category: "learning",
                color: "#CE973E"
        },
        {
                name: "DataCamp",
                url: "https://datacamp.com",
                icon: "https://www.datacamp.com/favicon.ico",
                description: "Data science",
                category: "learning",
                color: "#03EF62"
        },
        {
                name: "Springboard",
                url: "https://springboard.com",
                icon: "https://www.springboard.com/favicon.ico",
                description: "Career programs",
                category: "learning",
                color: "#6772E5"
        },
        {
                name: "Udacity",
                url: "https://udacity.com",
                icon: "https://www.udacity.com/favicon.ico",
                description: "Nanodegrees",
                category: "learning",
                color: "#02B3E4"
        },
        {
                name: "Alison",
                url: "https://alison.com",
                icon: "https://alison.com/favicon.ico",
                description: "Free online courses",
                category: "learning",
                color: "#F39C12"
        },

        // Cyber Security
        {
                name: "Hack The Box",
                url: "https://hackthebox.com",
                icon: "https://www.hackthebox.com/favicon.ico",
                description: "Penetration testing",
                category: "cybersecurity",
                color: "#9FEF00"
        },
        {
                name: "TryHackMe",
                url: "https://tryhackme.com",
                icon: "https://tryhackme.com/favicon.ico",
                description: "Security training",
                category: "cybersecurity",
                color: "#88CC14"
        },
        {
                name: "Offensive Security",
                url: "https://www.offensive-security.com",
                icon: "https://www.offensive-security.com/favicon.ico",
                description: "Penetration testing",
                category: "cybersecurity",
                color: "#C41E3A"
        },
        {
                name: "PentesterLab",
                url: "https://pentesterlab.com",
                icon: "https://pentesterlab.com/favicon.ico",
                description: "Web app security",
                category: "cybersecurity",
                color: "#FF6B35"
        },
        {
                name: "HackThisSite",
                url: "https://hackthissite.org",
                icon: "https://www.hackthissite.org/favicon.ico",
                description: "Legal hacking",
                category: "cybersecurity",
                color: "#000000"
        },
        {
                name: "OverTheWire",
                url: "https://overthewire.org",
                icon: "https://overthewire.org/favicon.ico",
                description: "Security wargames",
                category: "cybersecurity",
                color: "#2E8B57"
        },
        {
                name: "Root Me",
                url: "https://root-me.org",
                icon: "https://www.root-me.org/favicon.ico",
                description: "Hacking challenges",
                category: "cybersecurity",
                color: "#8B0000"
        },
        {
                name: "CISA",
                url: "https://cisa.gov",
                icon: "https://www.cisa.gov/favicon.ico",
                description: "Cybersecurity agency",
                category: "cybersecurity",
                color: "#002868"
        },
        {
                name: "Kali Linux",
                url: "https://www.kali.org",
                icon: "https://www.kali.org/favicon.ico",
                description: "Penetration testing OS",
                category: "cybersecurity",
                color: "#367BF0"
        },
        {
                name: "Cybrary",
                url: "https://cybrary.it",
                icon: "https://www.cybrary.it/favicon.ico",
                description: "Cyber education",
                category: "cybersecurity",
                color: "#FF6B35"
        },
        {
                name: "Blue Team Labs Online",
                url: "https://blueteamlabs.online",
                icon: "https://blueteamlabs.online/favicon.ico",
                description: "Blue team training",
                category: "cybersecurity",
                color: "#1E90FF"
        },
        {
                name: "OWASP",
                url: "https://owasp.org",
                icon: "https://owasp.org/favicon.ico",
                description: "Web security",
                category: "cybersecurity",
                color: "#000000"
        },
        {
                name: "VulnHub",
                url: "https://vulnhub.com",
                icon: "https://www.vulnhub.com/favicon.ico",
                description: "Vulnerable VMs",
                category: "cybersecurity",
                color: "#DC143C"
        },
        {
                name: "SecurityTrails",
                url: "https://securitytrails.com",
                icon: "https://securitytrails.com/favicon.ico",
                description: "Internet intelligence",
                category: "cybersecurity",
                color: "#6A5ACD"
        },
        {
                name: "Packet Storm",
                url: "https://packetstormsecurity.com",
                icon: "https://packetstormsecurity.com/favicon.ico",
                description: "Security exploits",
                category: "cybersecurity",
                color: "#FF4500"
        },
        {
                name: "PortSwigger",
                url: "https://portswigger.net/web-security",
                icon: "https://portswigger.net/favicon.ico",
                description: "Web security academy",
                category: "cybersecurity",
                color: "#FF6600"
        },
        {
                name: "Bugcrowd",
                url: "https://bugcrowd.com",
                icon: "https://www.bugcrowd.com/favicon.ico",
                description: "Bug bounty platform",
                category: "cybersecurity",
                color: "#F26D21"
        },
        {
                name: "Synack",
                url: "https://synack.com",
                icon: "https://www.synack.com/favicon.ico",
                description: "Security testing",
                category: "cybersecurity",
                color: "#E74C3C"
        },
        {
                name: "HackerOne",
                url: "https://hackerone.com",
                icon: "https://www.hackerone.com/favicon.ico",
                description: "Bug bounty platform",
                category: "cybersecurity",
                color: "#494649"
        },
        {
                name: "Infosec Institute",
                url: "https://resources.infosecinstitute.com",
                icon: "https://www.infosecinstitute.com/favicon.ico",
                description: "Security training",
                category: "cybersecurity",
                color: "#2E86AB"
        },

        // Work Collaboration / Productivity Tools
        {
                name: "Slack",
                url: "https://slack.com",
                icon: "https://slack.com/favicon.ico",
                description: "Team communication",
                category: "work",
                color: "#4A154B"
        },
        {
                name: "Trello",
                url: "https://trello.com",
                icon: "https://trello.com/favicon.ico",
                description: "Project management",
                category: "work",
                color: "#0079BF"
        },
        {
                name: "Asana",
                url: "https://asana.com",
                icon: "https://asana.com/favicon.ico",
                description: "Work management",
                category: "work",
                color: "#273347"
        },
        {
                name: "ClickUp",
                url: "https://clickup.com",
                icon: "https://clickup.com/favicon.ico",
                description: "Productivity platform",
                category: "work",
                color: "#7B68EE"
        },
        {
                name: "Notion",
                url: "https://notion.so",
                icon: "https://www.notion.so/favicon.ico",
                description: "All-in-one workspace",
                category: "work",
                color: "#000000"
        },
        {
                name: "Microsoft Teams",
                url: "https://teams.microsoft.com",
                icon: "https://statics.teams.cdn.office.net/hashedassets-launcher/launcher_20200515.01/icons/favicon.ico",
                description: "Team collaboration",
                category: "work",
                color: "#6264A7"
        },
        {
                name: "Google Workspace",
                url: "https://workspace.google.com",
                icon: "https://ssl.gstatic.com/workspace/favicon/favicon.ico",
                description: "Google's productivity suite",
                category: "work",
                color: "#4285F4"
        },
        {
                name: "Zoom",
                url: "https://zoom.us",
                icon: "https://zoom.us/favicon.ico",
                description: "Video conferencing",
                category: "work",
                color: "#2D8CFF"
        },
        {
                name: "Miro",
                url: "https://miro.com",
                icon: "https://miro.com/favicon.ico",
                description: "Online whiteboard",
                category: "work",
                color: "#FFD02F"
        },
        {
                name: "Figma",
                url: "https://figma.com",
                icon: "https://static.figma.com/app/icon/1/favicon.ico",
                description: "Design collaboration",
                category: "work",
                color: "#F24E1E"
        },
        {
                name: "Basecamp",
                url: "https://basecamp.com",
                icon: "https://basecamp.com/favicon.ico",
                description: "Project organizer",
                category: "work",
                color: "#1D2D35"
        },
        {
                name: "Airtable",
                url: "https://airtable.com",
                icon: "https://airtable.com/favicon.ico",
                description: "Database-spreadsheet",
                category: "work",
                color: "#18BFFF"
        },
        {
                name: "Monday.com",
                url: "https://monday.com",
                icon: "https://monday.com/favicon.ico",
                description: "Work management",
                category: "work",
                color: "#FF3D57"
        },
        {
                name: "Evernote",
                url: "https://evernote.com",
                icon: "https://evernote.com/favicon.ico",
                description: "Note taking",
                category: "work",
                color: "#00A82D"
        },
        {
                name: "Loom",
                url: "https://loom.com",
                icon: "https://www.loom.com/favicon.ico",
                description: "Video messaging",
                category: "work",
                color: "#625DF5"
        },
        {
                name: "Dropbox",
                url: "https://dropbox.com",
                icon: "https://www.dropbox.com/static/30168/images/favicon.ico",
                description: "Cloud storage",
                category: "work",
                color: "#0061FF"
        },
        {
                name: "Grammarly",
                url: "https://grammarly.com",
                icon: "https://static.grammarly.com/assets/files/afe4f2e53ae5c4c24c4bdb58a72a44dc/favicon.ico",
                description: "Writing assistant",
                category: "work",
                color: "#15C39A"
        },
        {
                name: "Calendly",
                url: "https://calendly.com",
                icon: "https://calendly.com/favicon.ico",
                description: "Scheduling tool",
                category: "work",
                color: "#006BFF"
        },
        {
                name: "Clockify",
                url: "https://clockify.me",
                icon: "https://clockify.me/favicon.ico",
                description: "Time tracking",
                category: "work",
                color: "#03A9F4"
        },
        {
                name: "Zapier",
                url: "https://zapier.com",
                icon: "https://zapier.com/favicon.ico",
                description: "Automation platform",
                category: "work",
                color: "#FF4A00"
        },

        // AI Tools
        {
                name: "ChatGPT",
                url: "https://chat.openai.com",
                icon: "https://cdn.openai.com/API/favicon.ico",
                description: "AI assistant",
                category: "aitools",
                color: "#10A37F"
        },
        {
                name: "Notion AI",
                url: "https://www.notion.so/product/ai",
                icon: "https://www.notion.so/favicon.ico",
                description: "AI-powered workspace",
                category: "aitools",
                color: "#000000"
        },
        {
                name: "Copy.ai",
                url: "https://copy.ai",
                icon: "https://copy.ai/favicon.ico",
                description: "AI copywriting",
                category: "aitools",
                color: "#FF6B35"
        },
        {
                name: "Jasper",
                url: "https://jasper.ai",
                icon: "https://www.jasper.ai/favicon.ico",
                description: "AI writing assistant",
                category: "aitools",
                color: "#8B5CF6"
        },
        {
                name: "Writesonic",
                url: "https://writesonic.com",
                icon: "https://writesonic.com/favicon.ico",
                description: "AI writing tool",
                category: "aitools",
                color: "#6366F1"
        },
        {
                name: "Quillbot",
                url: "https://quillbot.com",
                icon: "https://quillbot.com/favicon.ico",
                description: "Paraphrasing tool",
                category: "aitools",
                color: "#00C851"
        },
        {
                name: "GrammarlyGO",
                url: "https://grammarly.com/go",
                icon: "https://static.grammarly.com/assets/files/afe4f2e53ae5c4c24c4bdb58a72a44dc/favicon.ico",
                description: "AI writing assistant",
                category: "aitools",
                color: "#15C39A"
        },
        {
                name: "Claude",
                url: "https://claude.ai",
                icon: "https://claude.ai/favicon.ico",
                description: "AI assistant",
                category: "aitools",
                color: "#D97706"
        },
        {
                name: "Bard",
                url: "https://bard.google.com",
                icon: "https://www.gstatic.com/lamda/images/favicon_v1_150160cddceaaa54c55a71c395a75f3d.ico",
                description: "Google's AI",
                category: "aitools",
                color: "#4285F4"
        },
        {
                name: "Perplexity",
                url: "https://perplexity.ai",
                icon: "https://www.perplexity.ai/favicon.ico",
                description: "AI search engine",
                category: "aitools",
                color: "#1FB6FF"
        },
        {
                name: "RunwayML",
                url: "https://runwayml.com",
                icon: "https://runwayml.com/favicon.ico",
                description: "AI video editor",
                category: "aitools",
                color: "#00D4AA"
        },
        {
                name: "Synthesia",
                url: "https://synthesia.io",
                icon: "https://www.synthesia.io/favicon.ico",
                description: "AI video generation",
                category: "aitools",
                color: "#F4B942"
        },
        {
                name: "Pictory",
                url: "https://pictory.ai",
                icon: "https://pictory.ai/favicon.ico",
                description: "AI video creation",
                category: "aitools",
                color: "#FF6B6B"
        },
        {
                name: "Murf.ai",
                url: "https://murf.ai",
                icon: "https://murf.ai/favicon.ico",
                description: "AI voice generator",
                category: "aitools",
                color: "#9C27B0"
        },
        {
                name: "DeepL Write",
                url: "https://www.deepl.com/write",
                icon: "https://static.deepl.com/img/favicon/favicon_96.png",
                description: "AI writing improver",
                category: "aitools",
                color: "#0F2027"
        },
        {
                name: "Cleanup.pictures",
                url: "https://cleanup.pictures",
                icon: "https://cleanup.pictures/favicon.ico",
                description: "AI photo editor",
                category: "aitools",
                color: "#6366F1"
        },
        {
                name: "Scribe AI",
                url: "https://scribehow.com",
                icon: "https://scribehow.com/favicon.ico",
                description: "AI documentation",
                category: "aitools",
                color: "#FF5722"
        },
        {
                name: "Fireflies AI",
                url: "https://fireflies.ai",
                icon: "https://fireflies.ai/favicon.ico",
                description: "AI meeting notes",
                category: "aitools",
                color: "#FF6B35"
        },
        {
                name: "Eightify",
                url: "https://eightify.app",
                icon: "https://eightify.app/favicon.ico",
                description: "AI video summaries",
                category: "aitools",
                color: "#8B5CF6"
        },
        {
                name: "Magical AI",
                url: "https://magical.so",
                icon: "https://magical.so/favicon.ico",
                description: "AI automation",
                category: "aitools",
                color: "#7C3AED"
        },

        // Image Resizers / Editors
        {
                name: "Image Resizer",
                url: "https://imageresizer.com",
                icon: "https://imageresizer.com/favicon.ico",
                description: "Simple image resizing",
                category: "imageresizers",
                color: "#4CAF50"
        },
        {
                name: "ResizeImage.net",
                url: "https://resizeimage.net",
                icon: "https://resizeimage.net/favicon.ico",
                description: "Online image resizer",
                category: "imageresizers",
                color: "#2196F3"
        },
        {
                name: "Pixlr",
                url: "https://pixlr.com",
                icon: "https://pixlr.com/favicon.ico",
                description: "Online photo editor",
                category: "imageresizers",
                color: "#665CD7"
        },
        {
                name: "Fotor",
                url: "https://fotor.com",
                icon: "https://www.fotor.com/favicon.ico",
                description: "Photo editing platform",
                category: "imageresizers",
                color: "#44D362"
        },
        {
                name: "Canva",
                url: "https://canva.com",
                icon: "https://www.canva.com/favicon.ico",
                description: "Design tool",
                category: "imageresizers",
                color: "#00C4CC"
        },
        {
                name: "Adobe Express",
                url: "https://express.adobe.com",
                icon: "https://www.adobe.com/favicon.ico",
                description: "Quick design tool",
                category: "imageresizers",
                color: "#FF0000"
        },
        {
                name: "Photopea",
                url: "https://photopea.com",
                icon: "https://www.photopea.com/favicon.ico",
                description: "Online Photoshop",
                category: "imageresizers",
                color: "#18181B"
        },
        {
                name: "ILoveIMG",
                url: "https://iloveimg.com",
                icon: "https://iloveimg.com/img/favicons-img/favicon.ico",
                description: "Image tools suite",
                category: "imageresizers",
                color: "#E91E63"
        },
        {
                name: "BeFunky",
                url: "https://befunky.com",
                icon: "https://www.befunky.com/favicon.ico",
                description: "Photo editor & collage",
                category: "imageresizers",
                color: "#FF6B35"
        },
        {
                name: "LunaPic",
                url: "https://lunapic.com",
                icon: "https://www5.lunapic.com/favicon.ico",
                description: "Free online editor",
                category: "imageresizers",
                color: "#9C27B0"
        },
        {
                name: "PineTools Resize",
                url: "https://pinetools.com/resize-image",
                icon: "https://pinetools.com/favicon.ico",
                description: "Image resizing tool",
                category: "imageresizers",
                color: "#4CAF50"
        },
        {
                name: "Kapwing",
                url: "https://kapwing.com",
                icon: "https://kapwing.com/favicon.ico",
                description: "Online video & image editor",
                category: "imageresizers",
                color: "#FF6B6B"
        },
        {
                name: "Remove.bg",
                url: "https://remove.bg",
                icon: "https://www.remove.bg/favicon.ico",
                description: "Background remover",
                category: "imageresizers",
                color: "#FB7185"
        },
        {
                name: "BulkResizePhotos",
                url: "https://bulkresizephotos.com",
                icon: "https://bulkresizephotos.com/favicon.ico",
                description: "Bulk photo resizer",
                category: "imageresizers",
                color: "#3F51B5"
        },
        {
                name: "Simple Image Resizer",
                url: "https://simpleimageresizer.com",
                icon: "https://simpleimageresizer.com/favicon.ico",
                description: "Easy image resizing",
                category: "imageresizers",
                color: "#FF9800"
        },
        {
                name: "Img2Go",
                url: "https://img2go.com",
                icon: "https://img2go.com/favicon.ico",
                description: "Image converter",
                category: "imageresizers",
                color: "#00BCD4"
        },
        {
                name: "ResizePixel",
                url: "https://resizepixel.com",
                icon: "https://resizepixel.com/favicon.ico",
                description: "Online image resizer",
                category: "imageresizers",
                color: "#795548"
        },
        {
                name: "Online Image Editor",
                url: "https://online-image-editor.com",
                icon: "https://online-image-editor.com/favicon.ico",
                description: "Simple image editing",
                category: "imageresizers",
                color: "#607D8B"
        },
        {
                name: "Croppola",
                url: "https://croppola.com",
                icon: "https://croppola.com/favicon.ico",
                description: "Image cropping tool",
                category: "imageresizers",
                color: "#8BC34A"
        },
        {
                name: "PhotoResizer.com",
                url: "https://photoresizer.com",
                icon: "https://photoresizer.com/favicon.ico",
                description: "Photo resizing tool",
                category: "imageresizers",
                color: "#E91E63"
        },

        // Personal
        {
                name: "Facebook",
                url: "https://facebook.com",
                icon: "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico",
                description: "Social network",
                category: "personal",
                color: "#1877F2"
        },
        {
                name: "Twitter",
                url: "https://twitter.com",
                icon: "https://abs.twimg.com/favicons/twitter.2.ico",
                description: "Social media",
                category: "personal",
                color: "#1DA1F2"
        },
        {
                name: "Instagram",
                url: "https://instagram.com",
                icon: "https://static.cdninstagram.com/rsrc.php/v3/yI/r/VsNE-OHk_8a.png",
                description: "Photo sharing",
                category: "personal",
                color: "#E4405F"
        },
        {
                name: "WhatsApp",
                url: "https://web.whatsapp.com",
                icon: "https://static.whatsapp.net/rsrc.php/v3/yz/r/ujTY9i_Jhs1.png",
                description: "Messaging",
                category: "personal",
                color: "#25D366"
        },
        {
                name: "YouTube",
                url: "https://youtube.com",
                icon: "https://www.youtube.com/favicon.ico",
                description: "Video platform",
                category: "personal",
                color: "#FF0000"
        },
        {
                name: "Netflix",
                url: "https://netflix.com",
                icon: "https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2023.ico",
                description: "Streaming service",
                category: "personal",
                color: "#E50914"
        },
        {
                name: "Spotify",
                url: "https://spotify.com",
                icon: "https://open.spotify.com/favicon.ico",
                description: "Music streaming",
                category: "personal",
                color: "#1DB954"
        },
        {
                name: "Discord",
                url: "https://discord.com",
                icon: "https://discord.com/assets/f8389ca1a741a115313bede9ac02e2c0.ico",
                description: "Gaming communication",
                category: "personal",
                color: "#5865F2"
        },
        {
                name: "Reddit",
                url: "https://reddit.com",
                icon: "https://www.redditstatic.com/desktop2x/img/favicon/favicon-96x96.png",
                description: "Social news",
                category: "personal",
                color: "#FF4500"
        },
        {
                name: "TikTok",
                url: "https://tiktok.com",
                icon: "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/favicon.ico",
                description: "Short videos",
                category: "personal",
                color: "#000000"
        }
];

// DOM Elements
const shortcutsGrid = document.getElementById('shortcutsGrid');
const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');
const categoryTabs = document.querySelectorAll('.category-tab');
const loadingOverlay = document.getElementById('loadingOverlay');

// State
let currentCategory = 'all';
let currentSearchTerm = '';

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
        // Simulate loading
        setTimeout(() => {
                loadingOverlay.classList.add('hidden');
                renderShortcuts();
                setupEventListeners();
        }, 1500);
});

// Setup event listeners
function setupEventListeners() {
        // Search functionality
        searchInput.addEventListener('input', handleSearch);
        clearSearch.addEventListener('click', clearSearchInput);

        // Category tabs
        categoryTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                        const category = tab.dataset.category;
                        setActiveCategory(category);
                        currentCategory = category;
                        renderShortcuts();
                });
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                        clearSearchInput();
                }
                if (e.key === '/' && !searchInput.matches(':focus')) {
                        e.preventDefault();
                        searchInput.focus();
                }
        });
}

// Handle search input
function handleSearch(e) {
        currentSearchTerm = e.target.value.toLowerCase().trim();

        if (currentSearchTerm) {
                clearSearch.style.display = 'block';
        } else {
                clearSearch.style.display = 'none';
        }

        renderShortcuts();
}

// Clear search input
function clearSearchInput() {
        searchInput.value = '';
        currentSearchTerm = '';
        clearSearch.style.display = 'none';
        renderShortcuts();
        searchInput.focus();
}

// Set active category
function setActiveCategory(category) {
        categoryTabs.forEach(tab => {
                tab.classList.remove('active');
                if (tab.dataset.category === category) {
                        tab.classList.add('active');
                }
        });
}

// Filter websites based on current category and search term
function getFilteredWebsites() {
        return websiteData.filter(website => {
                const matchesCategory = currentCategory === 'all' || website.category === currentCategory;
                const matchesSearch = !currentSearchTerm ||
                        website.name.toLowerCase().includes(currentSearchTerm) ||
                        website.description.toLowerCase().includes(currentSearchTerm) ||
                        website.category.toLowerCase().includes(currentSearchTerm);

                return matchesCategory && matchesSearch;
        });
}

// Create shortcut card HTML
function createShortcutCard(website, index) {
        // Check if icon is a URL (for logos) or FontAwesome class
        const isImageIcon = website.icon.startsWith('http') || website.icon.includes('/') || website.icon.match(/\.(jpeg|jpg|png|gif|svg|ico)$/i);
        
        // Create fallback icon URL using Google's favicon service
        const fallbackIcon = `https://www.google.com/s2/favicons?domain=${new URL(website.url).hostname}&sz=64`;
        
        const iconHtml = isImageIcon
                ? `<img src="${website.icon}" alt="${website.name} logo" onerror="this.src='${fallbackIcon}'; this.onerror=function(){this.src='https://via.placeholder.com/48x48/00ff88/ffffff?text=${website.name.charAt(0)}';};">`
                : `<i class="${website.icon}"></i>`;

        // Remove icon background color for a clean look
        return `
        <div class="shortcut-card" 
             data-url="${website.url}"
             style="animation-delay: ${index * 0.1}s"
             data-name="${website.name.toLowerCase()}"
             data-category="${website.category}">
            <div class="shortcut-icon">
                ${iconHtml}
            </div>
            <div class="shortcut-name">${website.name}</div>
            <div class="shortcut-description">${website.description}</div>
        </div>
    `;
}

// Adjust color brightness
function adjustColor(color, amount) {
        return '#' + color.replace(/^#/, '').replace(/../g, color =>
                ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2)
        );
}

// Render shortcuts
function renderShortcuts() {
        const filteredWebsites = getFilteredWebsites();

        if (filteredWebsites.length === 0) {
                shortcutsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: rgba(255, 255, 255, 0.8);">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.5;"></i>
                <h3 style="font-size: 1.5rem; margin-bottom: 10px;">No websites found</h3>
                <p>Try adjusting your search or category filter</p>
            </div>
        `;
                return;
        }

        const cardsHTML = filteredWebsites
                .map((website, index) => createShortcutCard(website, index))
                .join('');

        shortcutsGrid.innerHTML = cardsHTML;

        // Add click event listeners to all cards
        const cards = shortcutsGrid.querySelectorAll('.shortcut-card');
        cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';

                // Add click event listener
                card.addEventListener('click', function (e) {
                        const url = this.getAttribute('data-url');
                        openWebsite(url, this, e);
                });

                setTimeout(() => {
                        card.style.transition = 'all 0.5s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                }, index * 50);
        });
}

// Open website in new tab
function openWebsite(url, element, event) {
        // Add click animation
        if (element) {
                element.style.transform = 'scale(0.95)';

                setTimeout(() => {
                        element.style.transform = '';
                }, 150);

                // Add ripple effect
                if (event) {
                        createRippleEffect(element, event);
                }
        }

        // Open the website
        console.log('Opening URL:', url); // Debug log
        window.open(url, '_blank', 'noopener,noreferrer');
}

// Create ripple effect
function createRippleEffect(element, event) {
        const ripple = document.createElement('div');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
    `;

        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);

        setTimeout(() => {
                ripple.remove();
        }, 600);
}

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add some interactive features
document.addEventListener('DOMContentLoaded', function () {
        // Add keyboard navigation
        let focusedIndex = -1;

        document.addEventListener('keydown', function (e) {
                const cards = Array.from(document.querySelectorAll('.shortcut-card'));

                if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                        e.preventDefault();
                        focusedIndex = Math.min(focusedIndex + 1, cards.length - 1);
                        cards[focusedIndex]?.focus();
                } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                        e.preventDefault();
                        focusedIndex = Math.max(focusedIndex - 1, 0);
                        cards[focusedIndex]?.focus();
                } else if (e.key === 'Enter' && focusedIndex >= 0) {
                        cards[focusedIndex]?.click();
                }
        });

        // Make cards focusable
        document.addEventListener('click', function (e) {
                if (e.target.closest('.shortcut-card')) {
                        const cards = Array.from(document.querySelectorAll('.shortcut-card'));
                        focusedIndex = cards.indexOf(e.target.closest('.shortcut-card'));
                }
        });
});

// Add touch support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function (e) {
        touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function (e) {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
});

function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;

        if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                        // Swipe up - could add functionality here
                } else {
                        // Swipe down - could add functionality here
                }
        }
}

// Performance optimization: Debounce search
function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
                const later = () => {
                        clearTimeout(timeout);
                        func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
        };
}

// Apply debounce to search
const debouncedSearch = debounce(handleSearch, 300);
searchInput.removeEventListener('input', handleSearch);
searchInput.addEventListener('input', debouncedSearch);
