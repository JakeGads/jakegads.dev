module.exports = {
  siteTitle: 'Jake Gadaleta',
  siteDescription: `A personal portfolio website`,
  keyWords: ['curriculum'],
  authorName: 'Jake Gadaleta',
  twitterUsername: 'gadzygadz',
  githubUsername: 'gadzygadz',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Full Stack Dev, currently working as an intern and planning on expanding into full time in May of 2021, 
  <br><br> I love writing code, I spend all day in .NET and angular when at work and when at home I love working in Python and React. I've spent a lot of time working with Linux and use it as my daily driver`,
  skills: [
    {
      name: 'Python',
      level: 90
    },
    {
      name: 'C# / .NET',
      level: 85
    },
    {
      name: 'Git',
      level: 85
    },
    {
      name: 'Javascript & Node',
      level: 80
    },
    {
      name: 'React',
      level: 75
    },
    
    /* more skills here */
  ],
  jobs: [
    /* more portifolio items here */
    {
      company: "Computer Aid Inc.",
      begin: {
        month: 'sep',
        year: '2019'
      },
      duration: null,
      occupation: "Full Stack Software Engineering Intern",
      description: "I am part of the Intern Scrum Team, working on multiple projects that use a variety of tech stacks and frameworks, this role requires me to cover every aspect of the projects that we work on."
    },  {
      company: "DeSales University CS Department",
      begin: {
        month: 'aug',
        year: '2019'
      },
      duration: 'Present',
      occupation: "Senior Lab Tech",
      description: "I manage 3 computer labs with approx. 75 computers. I handle updates, upgrades and security alongside maintaining software from a variety of venders. A large aspect of the role it to work along side students to make sure that their work can get done"
  
    },{
      company: "DeSales University Office of Residents Life",
      begin: {
        month: 'Fall',
        year: '2019'
      },
      duration: 'Present',
      occupation: "Senior Resident Advisor",
      description: "Along with continuing the work below I also: created schedules for fellow RA's (see the repo below), and I work along side other Senior Resident Advisors to plan wide-scale overarching events "
  
    }, {
      company: "Lansdale Catholic Robotics",
      begin: {
        month: 'June',
        year: '2019'
      },
      duration: 'Present',
      occupation: "Tune Up In PA Chairperson",
      description: "In this position I created a python application that generates a schedule for 40+ teams, I also managed the judging portion of the competition and had 20+ people reporting to me."
    },
    {
      company: "DeSales University Office of Residents Life",
      begin: {
        month: 'Fall',
        year: '2018'
      },
      duration: 'Promotion| Fall 2019',
      occupation: "Resident Advisor",
      description: "I work alongside other RAs to provide a safe, healthy, and fun environment for residents. This includes planning events/activities for residents on a monthly basis."
  
    },{
      company: "DeSales University IT",
      begin: {
        month: 'Fall',
        year: '2018'
      },
      duration: '6 mo',
      occupation: "Head Student Ambassador",
      description: "Along with what is listed below, I generated schedules for other workers and I gave monthly presentations that talked about the technology used on campus for the faculty and staff"
    },{
      company: "DeSales University IT",
      begin: {
        month: 'Fall',
        year: '2017'
      },
      duration: 'Promotion| Fall 2018',
      occupation: "Student Ambassador",
      description: "I maintained a campus wide IT system composed of various models and operating systems."
    }, {
      company: "Lansdale Catholic Robotics",
      begin: {
        month: 'June',
        year: '2017'
      },
      duration: 'Present',
      occupation: "Lead Mentor of Data Management and Analysis",
      description: "In this volunteer position I teach highschool students to use statistical analysis to improve robotics competition results and guide them in using java/python to create tools to automate decision making during those competitions"
    }
  ],
  portifolio: [
    // here is where we will add
    {
      image: "/images/gatsby-starter-cv.png",
      description: "Gatsby starter CV template",
      url: "https://www.gatsbyjs.org/starters/santosfrancisco/gatsby-starter-cv/"
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: "https://twitter.com/gadzygadz",
    linkedin: "https://www.linkedin.com/in/jacob-gadaleta/",
    github: "https://github.com/gadzygadz",
    email: "jake.gads@gmail.com"
  },
  siteUrl: 'https://jakegads.dev',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/HTML.jpg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#7d7777',
  theme_color: '#000000',
  display: 'minimal-ui',
  icon: 'src/assets/logo.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    // {
    //   label: 'Portifolio',
    //   url: '/portifolio',
    // }
  ]
}