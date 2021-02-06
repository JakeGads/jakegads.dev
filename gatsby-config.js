module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://jakegads.dev/`,
    name: `Jake Gadaleta`,
    role: `FullStack Software Developer`,
    email: `me@jakegads.dev`,
    socialMedia: [
      {
        name: "github",
        link: "https://github.com/gadzygadz",
      },
      { name: "linkedin", link: "https://www.linkedin.com/in/jacob-gadaleta/" },
      { name: "twitter", link: "https://twitter.com/gadzygadz" },
    ],
    about: `
      <p>A Software Developer from the Philadelphia area</p>
      <p>I've currently wrapping up my Bachelors Degree at DeSales University, In May of 2021 I hope to have a Degree in Computer Science along with minors in Mathematics and Data Analytics</p>
      <p>I currently have a lot of balls in the air</p>
      <ul>
        <li>Interning with Computer Aid Inc as a Full Stack Software Developer (Intern)</li>
        <li>Interning with Sigma AI as Data Scientist (Intern)</li>
        <li>Mentoring a FRC Robotics Team in Robot Programming</li>
        <li>
          Currently I'm also working on the following projects
          <ul>
            <li>Stonks Bot - an AI that can analyse stock market using tags</li>
            <li>Auto Masker - an AI that adds masks to videos as a demo</li>
            <li>Leaver - an AI that listens for an intent to leave a call and then leaves</li>
          </ul>
        </li>
      </ul>
      <br>
      <p>I'm also looking for a job</p>
      `,
    education: [
      {
        degree: "Ph.D.",
        major: "Computer Science",
        when: "2014-2018",
        school: "Harvard University",
        where: "Cambridge, MA",
        moreInfo: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        See my thesis <a href="#">here</a>.</p>`,
      },
      {
        degree: "M.Sc.",
        major: "Software Engineering",
        when: "2012-2014",
        school: "Stanford University",
        where: "Stanford, CA",
        moreInfo: `"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."`,
      },
      {
        degree: "B.Sc.",
        major: "Computer Engineering",
        when: "2008-2012",
        school: "UCLA",
        where: "Los Angeles, CA",
        moreInfo: `<p>I finally found out how it feels like to live in LA; it was awesome!</p>`,
      },
      {
        degree: "High School Diploma",
        when: "2000-2008",
        school: "Awesome High School",
        where: "Los Angeles, CA",
      },
    ],
    experience: [
      {
        role: "Software Developer",
        when: "2014-Present",
        company: "Facebook",
        where: "Menlo Park, CA",
        moreInfo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      },
      {
        role: "Web Developer",
        when: "2010-2014",
        company: "Amazon",
        where: "Vancouver, BC",
        moreInfo: `See my <a href="#" target="_blank" rel="noopener noreferrer">work</a>.`,
      },
    ],
    skills: [
      {
        name: "JavaScript",
        level: "85",
        experience: "5 years",
      },
      {
        name: "Python",
        level: "75",
        experience: "2 years",
      },
      {
        name: "Java",
        level: "65",
        experience: "2 years",
      },
      {
        name: "React",
        level: "75",
        experience: "1 years",
      },
      {
        name: "Linux",
        level: "75",
        experience: "4 years",
      },
      {
        name: "C++",
        level: "40",
        experience: "1 years",
      },
    ],
    interests: [
      "Reading",
      "Programming",
      "Playing the violin",
      "Running",
      "Watching Monty Python and the Holy Grail",
    ],
    //available_themes: ["great-gatsby", "master-yoda", "wonder-woman", "darth-vader", "luke-lightsaber"],
    theme: "great-gatsby",
    //fonts. Available: [default, programmer]
    font: "default",
  },
  plugins: [
    // Make sure this plugin is first in the array of plugins
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-111111111-1",
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
		`gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
            `IBM Plex Mono`,
        ],
				display: 'swap'
      },
    },
  ],
}
