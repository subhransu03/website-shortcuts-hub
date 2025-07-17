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
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const keyboardHelp = document.getElementById('keyboardHelp');
const keyboardTooltip = document.getElementById('keyboardTooltip');

// State
let currentCategory = 'all';
let currentSearchTerm = '';
let currentTheme = localStorage.getItem('theme') || 'dark';
let focusedCardIndex = -1;
let visibleCards = [];

// New functionality state
let usageStats = JSON.parse(localStorage.getItem('usageStats') || '{}');
let customCategories = JSON.parse(localStorage.getItem('customCategories') || '[]');
let customWebsites = JSON.parse(localStorage.getItem('customWebsites') || '[]');

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
        // Initialize theme
        initializeTheme();

        // Initialize background
        initializeBackground();

        // Simulate loading
        setTimeout(() => {
                loadingOverlay.classList.add('hidden');
                renderShortcuts();
                setupEventListeners();

                // Initialize new features
                initializeNewFeatures();
                addNewKeyboardShortcuts();
                updateKeyboardHelp();
        }, 1500);
});

// Theme Management
function initializeTheme() {
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateThemeIcon();
}

function toggleTheme() {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        updateThemeIcon();

        // Add a smooth transition effect
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
                document.body.style.transition = '';
        }, 300);
}

function updateThemeIcon() {
        const icon = themeIcon;
        if (currentTheme === 'dark') {
                icon.className = 'fas fa-sun';
                icon.style.color = '#fbbf24'; // Warm yellow for sun
        } else {
                icon.className = 'fas fa-moon';
                icon.style.color = '#6366f1'; // Modern purple for moon
        }
}

// Background Management
let currentBackground = localStorage.getItem('background') || 'default';
let backgroundAnimation = null;
let particleSystem = null;

const backgroundTypes = {
        default: 'Default Gradient',
        particles: 'Animated Particles',
        geometric: 'Geometric Patterns',
        waves: 'Flowing Waves',
        matrix: 'Matrix Rain',
        stars: 'Starfield',
        bubbles: 'Floating Bubbles'
};

function initializeBackground() {
        createBackgroundControls();
        setBackground(currentBackground);
}

function createBackgroundControls() {
        // Create background selector container
        const bgControlsContainer = document.createElement('div');
        bgControlsContainer.className = 'background-controls-container';

        // Create background toggle button
        const bgToggle = document.createElement('button');
        bgToggle.className = 'background-toggle';
        bgToggle.innerHTML = '<i class="fas fa-palette"></i>';
        bgToggle.setAttribute('aria-label', 'Change background');

        // Create background selector dropdown
        const bgSelector = document.createElement('div');
        bgSelector.className = 'background-selector';
        bgSelector.style.cssText = `
                position: absolute;
                top: 60px;
                left: 50%;
                transform: translateX(-50%);
                background: var(--card-bg);
                backdrop-filter: blur(15px);
                border: 1px solid var(--border-color);
                border-radius: 15px;
                padding: 15px;
                min-width: 200px;
                box-shadow: 0 8px 32px var(--shadow-color);
                opacity: 0;
                visibility: hidden;
                transform: translateX(-50%) translateY(-10px);
                transition: all 0.3s ease;
                z-index: 1002;
        `;

        // Add background options
        Object.entries(backgroundTypes).forEach(([key, name]) => {
                const option = document.createElement('div');
                option.className = 'background-option';
                option.textContent = name;
                option.dataset.background = key;
                option.style.cssText = `
                        padding: 10px 15px;
                        margin: 5px 0;
                        border-radius: 8px;
                        cursor: pointer;
                        transition: all 0.2s ease;
                        color: var(--text-secondary);
                        text-align: center;
                        font-size: 0.9rem;
                `;

                if (key === currentBackground) {
                        option.style.cssText += `
                                background: var(--accent-primary);
                                color: #1a1a2e;
                                font-weight: 600;
                        `;
                }

                option.addEventListener('click', () => {
                        setBackground(key);
                        updateBackgroundSelector();
                        hideBgSelector();
                });

                option.addEventListener('mouseenter', () => {
                        if (key !== currentBackground) {
                                option.style.background = 'var(--border-color)';
                                option.style.color = 'var(--accent-primary)';
                        }
                });

                option.addEventListener('mouseleave', () => {
                        if (key !== currentBackground) {
                                option.style.background = 'transparent';
                                option.style.color = 'var(--text-secondary)';
                        }
                });

                bgSelector.appendChild(option);
        });

        function showBgSelector() {
                bgSelector.style.opacity = '1';
                bgSelector.style.visibility = 'visible';
                bgSelector.style.transform = 'translateX(-50%) translateY(0)';
        }

        function hideBgSelector() {
                bgSelector.style.opacity = '0';
                bgSelector.style.visibility = 'hidden';
                bgSelector.style.transform = 'translateX(-50%) translateY(-10px)';
        }

        function updateBackgroundSelector() {
                const options = bgSelector.querySelectorAll('.background-option');
                options.forEach(option => {
                        const key = option.dataset.background;
                        if (key === currentBackground) {
                                option.style.cssText += `
                                        background: var(--accent-primary);
                                        color: #1a1a2e;
                                        font-weight: 600;
                                `;
                        } else {
                                option.style.cssText = `
                                        padding: 10px 15px;
                                        margin: 5px 0;
                                        border-radius: 8px;
                                        cursor: pointer;
                                        transition: all 0.2s ease;
                                        color: var(--text-secondary);
                                        text-align: center;
                                        font-size: 0.9rem;
                                        background: transparent;
                                `;
                        }
                });
        }

        bgToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                if (bgSelector.style.opacity === '1') {
                        hideBgSelector();
                } else {
                        showBgSelector();
                }
        });

        // Hide selector when clicking outside
        document.addEventListener('click', (e) => {
                if (!bgControlsContainer.contains(e.target)) {
                        hideBgSelector();
                }
        });

        bgControlsContainer.appendChild(bgToggle);
        bgControlsContainer.appendChild(bgSelector);
        document.querySelector('.header-controls').appendChild(bgControlsContainer);
}

function setBackground(type) {
        currentBackground = type;
        localStorage.setItem('background', type);

        // Clear existing background
        clearBackground();

        // Set new background
        switch (type) {
                case 'particles':
                        createParticleSystem();
                        break;
                case 'geometric':
                        createGeometricPattern();
                        break;
                case 'waves':
                        createWaveAnimation();
                        break;
                case 'matrix':
                        createMatrixRain();
                        break;
                case 'stars':
                        createStarfield();
                        break;
                case 'bubbles':
                        createBubbleSystem();
                        break;
                default:
                        // Keep default gradient
                        break;
        }
}

function clearBackground() {
        // Stop existing animations
        if (backgroundAnimation) {
                cancelAnimationFrame(backgroundAnimation);
                backgroundAnimation = null;
        }

        // Remove existing background elements
        const existingBg = document.querySelector('.background-canvas');
        if (existingBg) {
                existingBg.remove();
        }

        // Reset particle system
        particleSystem = null;
}

function createBackgroundCanvas() {
        const canvas = document.createElement('canvas');
        canvas.className = 'background-canvas';
        canvas.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: -1;
                opacity: 0.6;
        `;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        document.body.appendChild(canvas);

        // Handle resize
        window.addEventListener('resize', () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
        });

        return canvas;
}

function createParticleSystem() {
        const canvas = createBackgroundCanvas();
        const ctx = canvas.getContext('2d');

        const particles = [];
        const particleCount = 80;

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
                particles.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        vx: (Math.random() - 0.5) * 2,
                        vy: (Math.random() - 0.5) * 2,
                        size: Math.random() * 3 + 1,
                        opacity: Math.random() * 0.6 + 0.2,
                        hue: Math.random() * 60 + 160 // Blue-green range
                });
        }

        function animateParticles() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                particles.forEach((particle, index) => {
                        // Update position
                        particle.x += particle.vx;
                        particle.y += particle.vy;

                        // Bounce off edges
                        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
                        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

                        // Draw particle
                        ctx.save();
                        ctx.globalAlpha = particle.opacity;
                        ctx.fillStyle = `hsl(${particle.hue}, 70%, 60%)`;
                        ctx.shadowBlur = 10;
                        ctx.shadowColor = `hsl(${particle.hue}, 70%, 60%)`;
                        ctx.beginPath();
                        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.restore();

                        // Draw connections
                        particles.slice(index + 1).forEach(otherParticle => {
                                const dx = particle.x - otherParticle.x;
                                const dy = particle.y - otherParticle.y;
                                const distance = Math.sqrt(dx * dx + dy * dy);

                                if (distance < 120) {
                                        ctx.save();
                                        ctx.globalAlpha = (120 - distance) / 120 * 0.3;
                                        ctx.strokeStyle = `hsl(${particle.hue}, 70%, 60%)`;
                                        ctx.lineWidth = 1;
                                        ctx.beginPath();
                                        ctx.moveTo(particle.x, particle.y);
                                        ctx.lineTo(otherParticle.x, otherParticle.y);
                                        ctx.stroke();
                                        ctx.restore();
                                }
                        });
                });

                backgroundAnimation = requestAnimationFrame(animateParticles);
        }

        animateParticles();
}

function createGeometricPattern() {
        const canvas = createBackgroundCanvas();
        const ctx = canvas.getContext('2d');

        const shapes = [];
        const shapeCount = 25;

        // Initialize shapes
        for (let i = 0; i < shapeCount; i++) {
                shapes.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        size: Math.random() * 50 + 20,
                        rotation: Math.random() * Math.PI * 2,
                        rotationSpeed: (Math.random() - 0.5) * 0.02,
                        type: Math.floor(Math.random() * 3), // 0: triangle, 1: square, 2: hexagon
                        hue: Math.random() * 360,
                        opacity: Math.random() * 0.4 + 0.1,
                        pulseSpeed: Math.random() * 0.02 + 0.01
                });
        }

        function drawTriangle(ctx, x, y, size, rotation) {
                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(rotation);
                ctx.beginPath();
                ctx.moveTo(0, -size / 2);
                ctx.lineTo(-size / 2, size / 2);
                ctx.lineTo(size / 2, size / 2);
                ctx.closePath();
                ctx.restore();
        }

        function drawSquare(ctx, x, y, size, rotation) {
                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(rotation);
                ctx.rect(-size / 2, -size / 2, size, size);
                ctx.restore();
        }

        function drawHexagon(ctx, x, y, size, rotation) {
                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(rotation);
                ctx.beginPath();
                for (let i = 0; i < 6; i++) {
                        const angle = i * Math.PI / 3;
                        const x = size / 2 * Math.cos(angle);
                        const y = size / 2 * Math.sin(angle);
                        if (i === 0) ctx.moveTo(x, y);
                        else ctx.lineTo(x, y);
                }
                ctx.closePath();
                ctx.restore();
        }

        let time = 0;

        function animateShapes() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                time += 0.016;

                shapes.forEach(shape => {
                        shape.rotation += shape.rotationSpeed;

                        // Pulsing effect
                        const pulse = Math.sin(time * shape.pulseSpeed) * 0.3 + 1;
                        const currentSize = shape.size * pulse;

                        ctx.save();
                        ctx.globalAlpha = shape.opacity;
                        ctx.strokeStyle = `hsl(${shape.hue}, 70%, 60%)`;
                        ctx.lineWidth = 2;
                        ctx.shadowBlur = 15;
                        ctx.shadowColor = `hsl(${shape.hue}, 70%, 60%)`;

                        ctx.beginPath();
                        switch (shape.type) {
                                case 0:
                                        drawTriangle(ctx, shape.x, shape.y, currentSize, shape.rotation);
                                        break;
                                case 1:
                                        drawSquare(ctx, shape.x, shape.y, currentSize, shape.rotation);
                                        break;
                                case 2:
                                        drawHexagon(ctx, shape.x, shape.y, currentSize, shape.rotation);
                                        break;
                        }
                        ctx.stroke();
                        ctx.restore();
                });

                backgroundAnimation = requestAnimationFrame(animateShapes);
        }

        animateShapes();
}

function createWaveAnimation() {
        const canvas = createBackgroundCanvas();
        const ctx = canvas.getContext('2d');

        let time = 0;

        function animateWaves() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                time += 0.01;

                const waveCount = 5;
                for (let i = 0; i < waveCount; i++) {
                        ctx.save();
                        ctx.globalAlpha = 0.3 - i * 0.05;
                        ctx.strokeStyle = `hsl(${200 + i * 20}, 70%, 60%)`;
                        ctx.lineWidth = 2;
                        ctx.shadowBlur = 10;
                        ctx.shadowColor = `hsl(${200 + i * 20}, 70%, 60%)`;

                        ctx.beginPath();
                        for (let x = 0; x < canvas.width; x += 5) {
                                const y = canvas.height / 2 +
                                        Math.sin((x * 0.01) + (time * 2) + (i * 0.5)) * 50 +
                                        Math.sin((x * 0.005) + (time * 1.5) + (i * 0.3)) * 30;

                                if (x === 0) ctx.moveTo(x, y);
                                else ctx.lineTo(x, y);
                        }
                        ctx.stroke();
                        ctx.restore();
                }

                backgroundAnimation = requestAnimationFrame(animateWaves);
        }

        animateWaves();
}

function createMatrixRain() {
        const canvas = createBackgroundCanvas();
        const ctx = canvas.getContext('2d');

        const fontSize = 14;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = new Array(columns).fill(1);
        const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

        function animateMatrix() {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                ctx.fillStyle = '#00ff88';
                ctx.font = `${fontSize}px monospace`;

                for (let i = 0; i < drops.length; i++) {
                        const char = chars[Math.floor(Math.random() * chars.length)];
                        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

                        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                                drops[i] = 0;
                        }
                        drops[i]++;
                }

                backgroundAnimation = requestAnimationFrame(animateMatrix);
        }

        animateMatrix();
}

function createStarfield() {
        const canvas = createBackgroundCanvas();
        const ctx = canvas.getContext('2d');

        const stars = [];
        const starCount = 200;

        for (let i = 0; i < starCount; i++) {
                stars.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        z: Math.random() * 1000,
                        pz: 0
                });
        }

        function animateStars() {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                const centerX = canvas.width / 2;
                const centerY = canvas.height / 2;

                stars.forEach(star => {
                        star.pz = star.z;
                        star.z -= 5;

                        if (star.z <= 0) {
                                star.x = Math.random() * canvas.width;
                                star.y = Math.random() * canvas.height;
                                star.z = 1000;
                                star.pz = star.z;
                        }

                        const sx = (star.x - centerX) * (200 / star.z) + centerX;
                        const sy = (star.y - centerY) * (200 / star.z) + centerY;
                        const psx = (star.x - centerX) * (200 / star.pz) + centerX;
                        const psy = (star.y - centerY) * (200 / star.pz) + centerY;

                        ctx.strokeStyle = '#ffffff';
                        ctx.lineWidth = 200 / star.z;
                        ctx.beginPath();
                        ctx.moveTo(psx, psy);
                        ctx.lineTo(sx, sy);
                        ctx.stroke();
                });

                backgroundAnimation = requestAnimationFrame(animateStars);
        }

        animateStars();
}

function createBubbleSystem() {
        const canvas = createBackgroundCanvas();
        const ctx = canvas.getContext('2d');

        const bubbles = [];
        const bubbleCount = 30;

        for (let i = 0; i < bubbleCount; i++) {
                bubbles.push({
                        x: Math.random() * canvas.width,
                        y: canvas.height + Math.random() * 100,
                        size: Math.random() * 40 + 10,
                        speed: Math.random() * 2 + 0.5,
                        opacity: Math.random() * 0.5 + 0.2,
                        hue: Math.random() * 60 + 180,
                        wobble: Math.random() * 0.02 + 0.01,
                        wobbleOffset: Math.random() * Math.PI * 2
                });
        }

        let time = 0;

        function animateBubbles() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                time += 0.016;

                bubbles.forEach((bubble, index) => {
                        bubble.y -= bubble.speed;
                        bubble.x += Math.sin(time * bubble.wobble + bubble.wobbleOffset) * 2;

                        if (bubble.y < -bubble.size) {
                                bubble.y = canvas.height + bubble.size;
                                bubble.x = Math.random() * canvas.width;
                        }

                        // Create gradient
                        const gradient = ctx.createRadialGradient(
                                bubble.x, bubble.y, 0,
                                bubble.x, bubble.y, bubble.size
                        );
                        gradient.addColorStop(0, `hsla(${bubble.hue}, 70%, 80%, ${bubble.opacity})`);
                        gradient.addColorStop(0.7, `hsla(${bubble.hue}, 70%, 60%, ${bubble.opacity * 0.5})`);
                        gradient.addColorStop(1, `hsla(${bubble.hue}, 70%, 40%, 0)`);

                        ctx.save();
                        ctx.fillStyle = gradient;
                        ctx.beginPath();
                        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
                        ctx.fill();

                        // Add highlight
                        ctx.fillStyle = `hsla(${bubble.hue}, 70%, 90%, ${bubble.opacity * 0.3})`;
                        ctx.beginPath();
                        ctx.arc(bubble.x - bubble.size * 0.3, bubble.y - bubble.size * 0.3, bubble.size * 0.2, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.restore();
                });

                backgroundAnimation = requestAnimationFrame(animateBubbles);
        }

        animateBubbles();
}

function cycleBackground() {
        const backgroundKeys = Object.keys(backgroundTypes);
        const currentIndex = backgroundKeys.indexOf(currentBackground);
        const nextIndex = (currentIndex + 1) % backgroundKeys.length;
        const nextBackground = backgroundKeys[nextIndex];

        setBackground(nextBackground);

        // Update the background selector if it exists
        const backgroundOptions = document.querySelectorAll('.background-option');
        backgroundOptions.forEach(option => {
                const key = option.dataset.background;
                if (key === currentBackground) {
                        option.style.cssText += `
                                background: var(--accent-primary);
                                color: #1a1a2e;
                                font-weight: 600;
                        `;
                } else {
                        option.style.cssText = `
                                padding: 10px 15px;
                                margin: 5px 0;
                                border-radius: 8px;
                                cursor: pointer;
                                transition: all 0.2s ease;
                                color: var(--text-secondary);
                                text-align: center;
                                font-size: 0.9rem;
                                background: transparent;
                        `;
                }
        });

        // Show a brief notification
        showBackgroundNotification(backgroundTypes[nextBackground]);
}

function showBackgroundNotification(backgroundName) {
        // Remove existing notification
        const existingNotification = document.querySelector('.background-notification');
        if (existingNotification) {
                existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = 'background-notification';
        notification.textContent = `Background: ${backgroundName}`;
        notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--card-bg);
                backdrop-filter: blur(15px);
                border: 1px solid var(--border-color);
                border-radius: 10px;
                padding: 12px 20px;
                color: var(--accent-primary);
                font-weight: 500;
                box-shadow: 0 4px 15px var(--shadow-color);
                z-index: 1001;
                transform: translateX(100%);
                transition: transform 0.3s ease;
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
                notification.style.transform = 'translateX(0)';
        }, 10);

        // Animate out
        setTimeout(() => {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                        if (notification.parentNode) {
                                notification.remove();
                        }
                }, 300);
        }, 2000);
}

// ========================
// USAGE STATISTICS FUNCTIONALITY
// ========================
function updateUsageStats(website) {
        if (!usageStats[website.url]) {
                usageStats[website.url] = {
                        name: website.name,
                        category: website.category,
                        visits: 0,
                        lastVisited: null
                };
        }

        usageStats[website.url].visits++;
        usageStats[website.url].lastVisited = new Date().toISOString();

        // Update category stats
        if (!usageStats.categories) {
                usageStats.categories = {};
        }
        if (!usageStats.categories[website.category]) {
                usageStats.categories[website.category] = 0;
        }
        usageStats.categories[website.category]++;

        localStorage.setItem('usageStats', JSON.stringify(usageStats));
}

function getMostVisitedSites(limit = 10) {
        return Object.entries(usageStats)
                .filter(([key]) => key !== 'categories')
                .map(([url, stats]) => ({ url, ...stats }))
                .sort((a, b) => b.visits - a.visits)
                .slice(0, limit);
}

function getMostUsedCategories() {
        if (!usageStats.categories) return [];
        return Object.entries(usageStats.categories)
                .sort(([, a], [, b]) => b - a)
                .map(([category, count]) => ({ category, count }));
}

// ========================
// CUSTOM CATEGORIES FUNCTIONALITY
// ========================
function addCustomCategory(name, color = '#00ff88') {
        const category = {
                id: Date.now().toString(),
                name: name.toLowerCase(),
                displayName: name,
                color: color,
                createdAt: new Date().toISOString()
        };

        customCategories.push(category);
        localStorage.setItem('customCategories', JSON.stringify(customCategories));
        return category;
}

function removeCustomCategory(categoryId) {
        customCategories = customCategories.filter(cat => cat.id !== categoryId);
        // Also remove websites in this category
        customWebsites = customWebsites.filter(site => site.categoryId !== categoryId);
        localStorage.setItem('customCategories', JSON.stringify(customCategories));
        localStorage.setItem('customWebsites', JSON.stringify(customWebsites));
}

function addCustomWebsite(website, categoryId = null) {
        const customSite = {
                id: Date.now().toString(),
                ...website,
                categoryId: categoryId,
                isCustom: true,
                createdAt: new Date().toISOString()
        };

        customWebsites.push(customSite);
        localStorage.setItem('customWebsites', JSON.stringify(customWebsites));
        return customSite;
}

function removeCustomWebsite(websiteId) {
        customWebsites = customWebsites.filter(site => site.id !== websiteId);
        localStorage.setItem('customWebsites', JSON.stringify(customWebsites));
}

function editCustomCategory(categoryId, updatedData) {
        const categoryIndex = customCategories.findIndex(cat => cat.id === categoryId);
        if (categoryIndex !== -1) {
                customCategories[categoryIndex] = {
                        ...customCategories[categoryIndex],
                        ...updatedData,
                        updatedAt: new Date().toISOString()
                };
                localStorage.setItem('customCategories', JSON.stringify(customCategories));
                return customCategories[categoryIndex];
        }
        return null;
}

function editCustomWebsite(websiteId, updatedData) {
        const websiteIndex = customWebsites.findIndex(site => site.id === websiteId);
        if (websiteIndex !== -1) {
                customWebsites[websiteIndex] = {
                        ...customWebsites[websiteIndex],
                        ...updatedData,
                        updatedAt: new Date().toISOString()
                };
                localStorage.setItem('customWebsites', JSON.stringify(customWebsites));
                return customWebsites[websiteIndex];
        }
        return null;
}

function clearUsageStats() {
        usageStats = {};
        localStorage.removeItem('usageStats');
        showNotification('Usage statistics cleared successfully!', 'success');
}

function getAllCategories() {
        const defaultCategories = [...new Set(websiteData.map(site => site.category))];
        const customCats = customCategories.map(cat => cat.name);
        return [...defaultCategories, ...customCats];
}

// ========================
// IMPORT/EXPORT FUNCTIONALITY
// ========================
function exportData() {
        const exportData = {
                customCategories: customCategories,
                customWebsites: customWebsites,
                recentlyVisited: recentlyVisited,
                usageStats: usageStats,
                theme: currentTheme,
                background: currentBackground,
                exportedAt: new Date().toISOString(),
                version: '1.0'
        };

        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });

        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `website-shortcuts-${new Date().toISOString().split('T')[0]}.json`;
        link.click();

        showNotification('Data exported successfully!', 'success');
}

function importData(file) {
        return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = function (e) {
                        try {
                                const importedData = JSON.parse(e.target.result);

                                // Validate data structure
                                if (!importedData.version) {
                                        throw new Error('Invalid file format');
                                }

                                // Import data
                                if (importedData.customCategories) {
                                        customCategories = [...customCategories, ...importedData.customCategories];
                                        localStorage.setItem('customCategories', JSON.stringify(customCategories));
                                }

                                if (importedData.customWebsites) {
                                        customWebsites = [...customWebsites, ...importedData.customWebsites];
                                        localStorage.setItem('customWebsites', JSON.stringify(customWebsites));
                                }

                                if (importedData.usageStats) {
                                        // Merge usage stats
                                        Object.keys(importedData.usageStats).forEach(key => {
                                                if (key === 'categories') {
                                                        if (!usageStats.categories) usageStats.categories = {};
                                                        Object.keys(importedData.usageStats.categories).forEach(cat => {
                                                                usageStats.categories[cat] = (usageStats.categories[cat] || 0) + importedData.usageStats.categories[cat];
                                                        });
                                                } else {
                                                        if (!usageStats[key]) {
                                                                usageStats[key] = importedData.usageStats[key];
                                                        } else {
                                                                usageStats[key].visits += importedData.usageStats[key].visits || 0;
                                                        }
                                                }
                                        });
                                        localStorage.setItem('usageStats', JSON.stringify(usageStats));
                                }

                                showNotification('Data imported successfully!', 'success');
                                renderShortcuts();
                                updateCategoryTabs();
                                resolve(importedData);
                        } catch (error) {
                                showNotification('Error importing data: ' + error.message, 'error');
                                reject(error);
                        }
                };
                reader.readAsText(file);
        });
}

// ========================
// ENHANCED NOTIFICATION SYSTEM
// ========================
function showNotification(message, type = 'info', duration = 3000) {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.enhanced-notification');
        existingNotifications.forEach(notif => notif.remove());

        const notification = document.createElement('div');
        notification.className = 'enhanced-notification';

        const colors = {
                success: '#00ff88',
                error: '#ff4757',
                warning: '#ffa502',
                info: '#3742fa'
        };

        notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--card-bg);
                backdrop-filter: blur(15px);
                border: 1px solid ${colors[type]};
                border-radius: 10px;
                padding: 15px 25px;
                color: ${colors[type]};
                font-weight: 500;
                box-shadow: 0 4px 15px var(--shadow-color);
                z-index: 1001;
                transform: translateX(100%);
                transition: transform 0.3s ease;
                max-width: 300px;
                word-wrap: break-word;
        `;

        notification.textContent = message;
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
                notification.style.transform = 'translateX(0)';
        }, 10);

        // Animate out
        setTimeout(() => {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                        if (notification.parentNode) {
                                notification.remove();
                        }
                }, 300);
        }, duration);
}

// Keyboard Navigation
function handleKeyboardNavigation(e) {
        updateVisibleCards();

        if (visibleCards.length === 0) return;

        switch (e.key) {
                case 'ArrowRight':
                case 'ArrowDown':
                        e.preventDefault();
                        focusNextCard();
                        break;
                case 'ArrowLeft':
                case 'ArrowUp':
                        e.preventDefault();
                        focusPreviousCard();
                        break;
                case 'Enter':
                        e.preventDefault();
                        if (focusedCardIndex >= 0 && focusedCardIndex < visibleCards.length) {
                                const card = visibleCards[focusedCardIndex];
                                const url = card.dataset.url;
                                openWebsite(url, card, e);
                        }
                        break;
                case 'Home':
                        e.preventDefault();
                        focusedCardIndex = 0;
                        updateCardFocus();
                        break;
                case 'End':
                        e.preventDefault();
                        focusedCardIndex = visibleCards.length - 1;
                        updateCardFocus();
                        break;
        }
}

function updateVisibleCards() {
        visibleCards = Array.from(shortcutsGrid.querySelectorAll('.shortcut-card:not(.hidden)'));
}

function focusNextCard() {
        if (focusedCardIndex < visibleCards.length - 1) {
                focusedCardIndex++;
        } else {
                focusedCardIndex = 0; // Wrap to beginning
        }
        updateCardFocus();
}

function focusPreviousCard() {
        if (focusedCardIndex > 0) {
                focusedCardIndex--;
        } else {
                focusedCardIndex = visibleCards.length - 1; // Wrap to end
        }
        updateCardFocus();
}

function updateCardFocus() {
        // Remove focus from all cards
        visibleCards.forEach(card => card.classList.remove('keyboard-focused'));

        // Add focus to current card
        if (focusedCardIndex >= 0 && focusedCardIndex < visibleCards.length) {
                const focusedCard = visibleCards[focusedCardIndex];
                focusedCard.classList.add('keyboard-focused');

                // Scroll into view if needed
                focusedCard.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'nearest'
                });
        }
}

function clearFocus() {
        focusedCardIndex = -1;
        visibleCards.forEach(card => card.classList.remove('keyboard-focused'));
}

// Keyboard Help
function toggleKeyboardHelp() {
        keyboardTooltip.classList.toggle('show');
}

// Setup event listeners
function setupEventListeners() {
        // Theme toggle
        themeToggle.addEventListener('click', toggleTheme);

        // Keyboard help toggle
        keyboardHelp.addEventListener('click', toggleKeyboardHelp);

        // Close keyboard help when clicking outside
        document.addEventListener('click', (e) => {
                if (!keyboardHelp.contains(e.target) && !keyboardTooltip.contains(e.target)) {
                        keyboardTooltip.classList.remove('show');
                }
        });

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
                if (e.key === '/' && !searchInput.matches(':focus')) {
                        e.preventDefault();
                        searchInput.focus();
                }

                // Keyboard navigation
                if (!searchInput.matches(':focus')) {
                        handleKeyboardNavigation(e);
                }
        });
}// Handle search input
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
        // Combine default websites with custom websites
        let allWebsites = [...websiteData];

        // Add custom websites with proper category mapping
        customWebsites.forEach(customSite => {
                const category = customSite.categoryId
                        ? customCategories.find(cat => cat.id === customSite.categoryId)?.name || 'other'
                        : customSite.category || 'other';

                allWebsites.push({
                        ...customSite,
                        category: category,
                        isCustom: true
                });
        });

        // Regular filtering
        return allWebsites.filter(website => {
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

        // Get usage statistics
        const stats = usageStats[website.url];
        const visitCount = stats?.visits || 0;
        const lastVisited = stats?.lastVisited;

        // Show visit count badge if there are visits
        const visitBadge = visitCount > 0 ? `
                <div class="visit-badge" title="Visited ${visitCount} times">
                        <i class="fas fa-chart-line"></i>
                        <span>${visitCount}</span>
                </div>
        ` : '';

        // Show delete button for custom websites
        const deleteButton = website.isCustom ? `
                <button class="delete-custom-site" onclick="event.stopPropagation(); removeCustomWebsite('${website.id}'); renderShortcuts();" title="Delete custom website">
                        <i class="fas fa-times"></i>
                </button>
        ` : '';

        // Remove icon background color for a clean look
        return `
        <div class="shortcut-card ${website.isCustom ? 'custom-site' : ''}" 
             data-url="${website.url}"
             style="animation-delay: ${index * 0.1}s"
             data-name="${website.name.toLowerCase()}"
             data-category="${website.category}"
             data-website-id="${website.id || ''}">
            ${visitBadge}
            ${deleteButton}
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

        // Reset keyboard focus when content changes
        clearFocus();

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

                // Add mouse enter to update focus index for keyboard navigation
                card.addEventListener('mouseenter', () => {
                        updateVisibleCards();
                        focusedCardIndex = visibleCards.indexOf(card);
                        updateCardFocus();
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
        // Find the website data to track stats
        const allWebsites = [...websiteData, ...customWebsites];
        const website = allWebsites.find(site => site.url === url);

        if (website) {
                // Update usage statistics
                updateUsageStats(website);
        }

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

// ========================
// NEW FUNCTIONALITY IMPLEMENTATION
// ========================

// Initialize new features
function initializeNewFeatures() {
        setupModalEventListeners();
        setupManagementTabs();
        updateCategoryTabs();
        populateCategorySelect();
}

// Modal Management
function setupModalEventListeners() {
        // Modal close functionality
        document.querySelectorAll('.modal-close').forEach(btn => {
                btn.addEventListener('click', closeAllModals);
        });

        // Close modal when clicking outside
        document.querySelectorAll('.modal').forEach(modal => {
                modal.addEventListener('click', (e) => {
                        if (e.target === modal) {
                                closeAllModals();
                        }
                });
        });

        // Form submissions
        document.getElementById('addWebsiteForm').addEventListener('submit', handleAddWebsite);
        document.getElementById('addCategoryForm').addEventListener('submit', handleAddCategory);
        document.getElementById('editWebsiteForm').addEventListener('submit', handleEditWebsite);
        document.getElementById('editCategoryForm').addEventListener('submit', handleEditCategory);

        // Clear data buttons
        document.getElementById('clearStatsBtn').addEventListener('click', () => {
                clearUsageStats();
                closeAllModals();
        });
        document.getElementById('clearAllCustomBtn').addEventListener('click', () => {
                clearAllCustomContent();
                closeAllModals();
        });

        // Import/Export buttons
        document.getElementById('exportBtn').addEventListener('click', exportData);
        document.getElementById('importBtn').addEventListener('click', () => {
                document.getElementById('importFile').click();
        });
        document.getElementById('importFile').addEventListener('change', handleImportFile);
}

function setupManagementTabs() {
        document.getElementById('addWebsiteTab').addEventListener('click', () => {
                showModal('addWebsiteModal');
        });

        document.getElementById('addCategoryTab').addEventListener('click', () => {
                showModal('addCategoryModal');
        });

        document.getElementById('statsTab').addEventListener('click', () => {
                updateStatsModal();
                showModal('statsModal');
        });

        document.getElementById('importExportTab').addEventListener('click', () => {
                showModal('importExportModal');
        });

        document.getElementById('editCustomTab').addEventListener('click', () => {
                populateEditCustomModal();
                showModal('editCustomModal');
        });

        document.getElementById('clearDataTab').addEventListener('click', () => {
                showModal('clearDataModal');
        });
}

function showModal(modalId) {
        closeAllModals();
        const modal = document.getElementById(modalId);
        modal.classList.add('show');
        modal.style.display = 'flex';
}

function closeAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
                modal.classList.remove('show');
                modal.style.display = 'none';
        });
}

// Add Website Functionality
function handleAddWebsite(e) {
        e.preventDefault();

        const name = document.getElementById('websiteName').value.trim();
        const url = document.getElementById('websiteUrl').value.trim();
        const description = document.getElementById('websiteDescription').value.trim();
        const icon = document.getElementById('websiteIcon').value.trim();
        const category = document.getElementById('websiteCategory').value;
        const color = document.getElementById('websiteColor').value;

        if (!name || !url || !description) {
                showNotification('Please fill in all required fields', 'error');
                return;
        }

        // Validate URL
        try {
                new URL(url);
        } catch {
                showNotification('Please enter a valid URL', 'error');
                return;
        }

        const website = {
                name: name,
                url: url,
                description: description,
                icon: icon || `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=64`,
                category: category,
                color: color
        };

        const categoryId = customCategories.find(cat => cat.name === category)?.id || null;
        addCustomWebsite(website, categoryId);

        // Reset form and close modal
        e.target.reset();
        closeAllModals();
        renderShortcuts();
        showNotification('Website added successfully!', 'success');
}

// Add Category Functionality
function handleAddCategory(e) {
        e.preventDefault();

        const name = document.getElementById('categoryName').value.trim();
        const color = document.getElementById('categoryColor').value;

        if (!name) {
                showNotification('Please enter a category name', 'error');
                return;
        }

        // Check if category already exists
        const existingCategories = getAllCategories();
        if (existingCategories.includes(name.toLowerCase())) {
                showNotification('Category already exists', 'error');
                return;
        }

        addCustomCategory(name, color);

        // Reset form and close modal
        e.target.reset();
        closeAllModals();
        updateCategoryTabs();
        populateCategorySelect();
        showNotification('Category added successfully!', 'success');
}

// Update category tabs to include custom categories
function updateCategoryTabs() {
        const categoryTabsContainer = document.querySelector('.category-tabs');

        // Get existing tabs (not custom ones)
        const existingTabs = Array.from(categoryTabsContainer.children).filter(tab =>
                !tab.classList.contains('custom-category-tab')
        );

        // Add custom category tabs
        customCategories.forEach(category => {
                const existingTab = Array.from(categoryTabsContainer.children).find(tab =>
                        tab.dataset.category === category.name
                );

                if (!existingTab) {
                        const tab = document.createElement('button');
                        tab.className = 'category-tab custom-category-tab';
                        tab.dataset.category = category.name;
                        tab.innerHTML = `
                                <i class="fas fa-tag" style="color: ${category.color}"></i>
                                ${category.displayName}
                        `;

                        tab.addEventListener('click', () => {
                                setActiveCategory(category.name);
                                currentCategory = category.name;
                                renderShortcuts();
                        });

                        categoryTabsContainer.appendChild(tab);
                }
        });
}

// Populate category select in add website form
function populateCategorySelect() {
        const select = document.getElementById('websiteCategory');
        const currentValue = select.value;

        // Clear existing options except 'other'
        select.innerHTML = '<option value="other">Other</option>';

        // Add default categories
        const defaultCategories = [...new Set(websiteData.map(site => site.category))];
        defaultCategories.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
                select.appendChild(option);
        });

        // Add custom categories
        customCategories.forEach(category => {
                const option = document.createElement('option');
                option.value = category.name;
                option.textContent = category.displayName;
                select.appendChild(option);
        });

        // Restore previous value if it exists
        if (currentValue && Array.from(select.options).some(opt => opt.value === currentValue)) {
                select.value = currentValue;
        }
}

// Update statistics modal
function updateStatsModal() {
        // Most visited sites
        const mostVisited = getMostVisitedSites(10);
        const mostVisitedList = document.getElementById('mostVisitedList');

        if (mostVisited.length === 0) {
                mostVisitedList.innerHTML = '<p>No visit data available yet.</p>';
        } else {
                mostVisitedList.innerHTML = mostVisited.map(site => `
                        <div class="stats-item">
                                <span class="stats-item-name">${site.name}</span>
                                <span class="stats-item-value">${site.visits} visits</span>
                        </div>
                `).join('');
        }

        // Category usage
        const categoryUsage = getMostUsedCategories();
        const categoryUsageList = document.getElementById('categoryUsageList');

        if (categoryUsage.length === 0) {
                categoryUsageList.innerHTML = '<p>No category data available yet.</p>';
        } else {
                categoryUsageList.innerHTML = categoryUsage.map(cat => `
                        <div class="stats-item">
                                <span class="stats-item-name">${cat.category}</span>
                                <span class="stats-item-value">${cat.count} visits</span>
                        </div>
                `).join('');
        }
}

// Handle file import
function handleImportFile(e) {
        const file = e.target.files[0];
        if (!file) return;

        importData(file).then(() => {
                closeAllModals();
                updateCategoryTabs();
                populateCategorySelect();
        }).catch(error => {
                console.error('Import error:', error);
        });

        // Clear the file input
        e.target.value = '';
}

// Add keyboard shortcuts for new features
function addNewKeyboardShortcuts() {
        // No additional keyboard shortcuts - removed per user request
}

// Update the keyboard help tooltip to include new shortcuts
function updateKeyboardHelp() {
        // No additional keyboard shortcuts to add - removed per user request
}

// ========================
// EDIT CUSTOM CONTENT FUNCTIONALITY
// ========================

function populateEditCustomModal() {
        populateCustomCategoriesList();
        populateCustomWebsitesList();
}

function populateCustomCategoriesList() {
        const container = document.getElementById('customCategoriesList');

        if (customCategories.length === 0) {
                container.innerHTML = '<div class="no-items-message">No custom categories found.</div>';
                return;
        }

        container.innerHTML = customCategories.map(category => `
                <div class="edit-item">
                        <div class="edit-item-info">
                                <div class="edit-item-name">${category.displayName}</div>
                                <div class="edit-item-details">
                                        <span style="color: ${category.color}">●</span> Created: ${new Date(category.createdAt).toLocaleDateString()}
                                </div>
                        </div>
                        <div class="edit-item-actions">
                                <button class="btn-edit" onclick="openEditCategoryModal('${category.id}')">
                                        <i class="fas fa-edit"></i> Edit
                                </button>
                                <button class="btn-delete" onclick="deleteCustomCategory('${category.id}')">
                                        <i class="fas fa-trash"></i> Delete
                                </button>
                        </div>
                </div>
        `).join('');
}

function populateCustomWebsitesList() {
        const container = document.getElementById('customWebsitesList');

        if (customWebsites.length === 0) {
                container.innerHTML = '<div class="no-items-message">No custom websites found.</div>';
                return;
        }

        container.innerHTML = customWebsites.map(website => {
                const category = customCategories.find(cat => cat.id === website.categoryId);
                const categoryName = category ? category.displayName : 'Other';

                return `
                        <div class="edit-item">
                                <div class="edit-item-info">
                                        <div class="edit-item-name">${website.name}</div>
                                        <div class="edit-item-details">
                                                Category: ${categoryName} | Created: ${new Date(website.createdAt).toLocaleDateString()}
                                        </div>
                                </div>
                                <div class="edit-item-actions">
                                        <button class="btn-edit" onclick="openEditWebsiteModal('${website.id}')">
                                                <i class="fas fa-edit"></i> Edit
                                        </button>
                                        <button class="btn-delete" onclick="deleteCustomWebsite('${website.id}')">
                                                <i class="fas fa-trash"></i> Delete
                                        </button>
                                </div>
                        </div>
                `;
        }).join('');
}

function openEditCategoryModal(categoryId) {
        const category = customCategories.find(cat => cat.id === categoryId);
        if (!category) return;

        document.getElementById('editCategoryId').value = categoryId;
        document.getElementById('editCategoryName').value = category.name;
        document.getElementById('editCategoryColor').value = category.color;

        closeAllModals();
        showModal('editCategoryModal');
}

function openEditWebsiteModal(websiteId) {
        const website = customWebsites.find(site => site.id === websiteId);
        if (!website) return;

        document.getElementById('editWebsiteId').value = websiteId;
        document.getElementById('editWebsiteName').value = website.name;
        document.getElementById('editWebsiteUrl').value = website.url;
        document.getElementById('editWebsiteDescription').value = website.description;
        document.getElementById('editWebsiteIcon').value = website.icon || '';
        document.getElementById('editWebsiteColor').value = website.color;

        // Populate category select for edit form
        populateEditWebsiteCategorySelect();
        document.getElementById('editWebsiteCategory').value = website.categoryId || 'other';

        closeAllModals();
        showModal('editWebsiteModal');
}

function populateEditWebsiteCategorySelect() {
        const select = document.getElementById('editWebsiteCategory');
        select.innerHTML = '<option value="other">Other</option>';

        // Add default categories
        const defaultCategories = [...new Set(websiteData.map(site => site.category))];
        defaultCategories.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
                select.appendChild(option);
        });

        // Add custom categories
        customCategories.forEach(category => {
                const option = document.createElement('option');
                option.value = category.id;
                option.textContent = category.displayName;
                select.appendChild(option);
        });
}

function handleEditCategory(e) {
        e.preventDefault();

        const categoryId = document.getElementById('editCategoryId').value;
        const name = document.getElementById('editCategoryName').value.trim();
        const color = document.getElementById('editCategoryColor').value;

        if (!name) {
                showNotification('Please enter a category name', 'error');
                return;
        }

        const updatedData = {
                name: name.toLowerCase(),
                displayName: name,
                color: color
        };

        const updatedCategory = editCustomCategory(categoryId, updatedData);
        if (updatedCategory) {
                closeAllModals();
                updateCategoryTabs();
                populateCategorySelect();
                renderShortcuts();
                showNotification('Category updated successfully!', 'success');
        } else {
                showNotification('Failed to update category', 'error');
        }
}

function handleEditWebsite(e) {
        e.preventDefault();

        const websiteId = document.getElementById('editWebsiteId').value;
        const name = document.getElementById('editWebsiteName').value.trim();
        const url = document.getElementById('editWebsiteUrl').value.trim();
        const description = document.getElementById('editWebsiteDescription').value.trim();
        const icon = document.getElementById('editWebsiteIcon').value.trim();
        const categoryId = document.getElementById('editWebsiteCategory').value;
        const color = document.getElementById('editWebsiteColor').value;

        if (!name || !url || !description) {
                showNotification('Please fill in all required fields', 'error');
                return;
        }

        // Validate URL
        try {
                new URL(url);
        } catch {
                showNotification('Please enter a valid URL', 'error');
                return;
        }

        const updatedData = {
                name,
                url,
                description,
                icon: icon || null,
                categoryId: categoryId === 'other' ? null : categoryId,
                color
        };

        const updatedWebsite = editCustomWebsite(websiteId, updatedData);
        if (updatedWebsite) {
                closeAllModals();
                renderShortcuts();
                showNotification('Website updated successfully!', 'success');
        } else {
                showNotification('Failed to update website', 'error');
        }
}

function deleteCustomCategory(categoryId) {
        if (confirm('Are you sure you want to delete this category? All websites in this category will also be removed.')) {
                removeCustomCategory(categoryId);
                populateEditCustomModal();
                updateCategoryTabs();
                populateCategorySelect();
                renderShortcuts();
                showNotification('Category deleted successfully!', 'success');
        }
}

function deleteCustomWebsite(websiteId) {
        if (confirm('Are you sure you want to delete this website?')) {
                removeCustomWebsite(websiteId);
                populateEditCustomModal();
                renderShortcuts();
                showNotification('Website deleted successfully!', 'success');
        }
}

function clearAllCustomContent() {
        if (confirm('Are you sure you want to delete ALL custom categories and websites? This action cannot be undone!')) {
                customCategories = [];
                customWebsites = [];
                localStorage.removeItem('customCategories');
                localStorage.removeItem('customWebsites');
                updateCategoryTabs();
                populateCategorySelect();
                renderShortcuts();
                showNotification('All custom content cleared successfully!', 'success');
        }
}
