import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    seagate,
    html,
    css,
    year2,
    baeP,
    year1,
    reactjs,
    arbutus,
    redux,
    ascot,
    bae,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Cloud Practioner",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Fabricator & Welder",
      company_name: "Ascot Signs",
      icon: ascot,
      iconBg: "#E6DEDD",
      date: "Sept 2016 - Aug 2018",
      points: [
        "Fabricated and manufactured metal parts for later assembly, followed blueprints to maintain exact specifications of output, produced strong, clean welds, tested strength, and tolerance of welds.",
        "Operated CNC machine for 6 months and also created designs for signs on software before cutting on the CNC machine."
      ],
    },
    {
      title: "Head Waiter",
      company_name: "Arbutus at the Forum",
      icon: arbutus,
      iconBg: "#383E56",
      date: "Nov 2018 - July 2019",
      points: [
        "Greet customers and make aware of restaurant’s menu, answer questions about menu offerings, process  food and drink orders, carries food and drinks from kitchen to tables. ",
        "Prepares bills and processes payment.",
        "Accept and make bookings for customers.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Summer Internship",
      company_name: "Seagate",
      icon: seagate,
      iconBg: "#383E56",
      date: "June 2019 - July 2019",
      points: [
        "Developed a programme using python to store and upload live data",
        "Utilized a Raspberry Pi 3 and hardware called SenseHat which allows the recording of temperature andother environment factors to be stored in my programe and uploaded to Google cloud. Done to test outpossibility of implementing new technology into Seagates labs.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "BAE Systems",
      icon: bae,
      iconBg: "#E6DEDD",
      date: "June 2022 - June 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Utilising AWS Cloud technologies for fast and effiecent rapid prototyping",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I worked with Calum on the milkFloat initiative this year and he has been very successful. He is professional, positive, and eager to learn. Despite being a Technical Intern, he has taken on various roles in the team and has developed both Software Development and Consulting skills.",
      name: "Ian Horlock",
      designation: "Managing Consultant",
      company: "BAE Systems",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Calum has played an active role in the milkFloat team, contributing to both customer engagements and internal activities. He has completed technical and non-technical tasks to a high standard, working independently and with the development team during rapid prototyping sprints.",
      name: "Zoe Jeffers",
      designation: "Software Engineer",
      company: "BAE Systems",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Calum's excellent proactive attitude, willingness to learn, and eagerness to get involved have made him a valuable addition to the milkFloat team during his year-long industrial placement. Despite the challenging environment, Calum has leaned in and made the most of his experience. He has developed his software engineering skills, gaining familiarity with scripting languages like node.js and python, as well as AWS Cloud services and infrastructure-as-code.",
      name: "Andy Smith",
      designation: "Solution Architect",
      company: "BAE Systems",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Year 1",
      description:
        "I am pleased to present my academic achievements throughout 1st Year at University. With a score of 86% in Mathematics I, 94% in Programming II. Additionally, I obtained strong scores of 84%, 83%, and 79% in Programming I, Systems Analysis & Design, and Database Systems, respectively. Additionally I received a score of 93% in Computer Hardware & Operating Systems. ",
      tags: [
        {
          name: "OSS",
          color: "blue-text-gradient",
        },
        {
          name: "Software Dev I",
          color: "green-text-gradient",
        },
        {
          name: "Database Systems",
          color: "pink-text-gradient",
        },
      ],
      image: year1,
      source_code_link: "https://www.ulster.ac.uk/campuses/derry-londonderry",
    },
    {
      name: "Year 2",
      description:
        "In my 2nd Year I achieved an 82% in Algorithms and Data Structures. I also completed Mobile Application Development with 73% and Web Application Development with 88%. Additionally, I received an outstanding score of 90% in Professional Development. Furthermore, I obtained scores of 81% in Object Oriented Programming and User Experience. Finally, Computer Networks and Security with a score of 80%. ",
      tags: [
        {
          name: "Algorithms",
          color: "blue-text-gradient",
        },
        {
          name: "UI/UX",
          color: "green-text-gradient",
        },
        {
          name: "Web App Dev",
          color: "pink-text-gradient",
        },
      ],
      image: year2,
      source_code_link: "https://www.ulster.ac.uk/campuses/derry-londonderry",
    },
    {
      name: "Placement",
      description:
      "My time at BAE Systems as a software developer was spent working with JavaScript, HTML, CSS, Python, and AWS as well as many other tools and technologies. I worked on developing software applications and systems using these technologies, collaborating with other developers and customers, and researching and implementing new technologies and tools to improve software performance.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "AWS",
          color: "green-text-gradient",
        },
        {
          name: "ML",
          color: "pink-text-gradient",
        },
      ],
      image: baeP,
      source_code_link: "https://www.baesystems.com/en/home",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };