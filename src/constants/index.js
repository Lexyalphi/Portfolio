import {
    mobile,
    backend,
    clickhere,
    creator,
    LinkedIn,
    scrum,
    mmu,
    oau,
    smac,
    union,
    oogi,
    summarize,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
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
      title: "Scrum Master",
      icon: scrum,
    },
    {
      title: "Web Developer",
      icon: nodejs,
    },
    {
      title: " Frontend Developer",
      icon: javascript,
    },
    {
      title: "3D Render",
      icon: reactjs,
    },
  ];
  
  const technologies = [
   
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Scrum Master",
      company_name: "BytheConsulting",
      icon: scrum,
      iconBg: "#383E56",
      date: "May 2020 - Current",
      points: [
        "Work effectively with the engineering team to improve sprint goals, which reduced delivery time by 15-20%.",
        "Partner with leaders and teams to share knowledge and drive organizational change and improvement.",
        "Assist the Product Owner in the development of user stories. Responsible for implementing, facilitating, and enabling the scrum and agile process at the leadership and team level for the continuous maintenance and enhancement of a data pipeline.",
        "Coach teams to take ownership of each deliverable (stories, sprint, and releases). Shaped the high-level design and technology plan required to deliver a business outcome. Constructed and delivered plans that brought together technology with people and processes.",
      ],
    },
    {
      title: "Scrum Master",
      company_name: "Union Bank",
      icon: union,
      iconBg: "#383E56",
      date: "Jan 2018 - May 2020",
      points: [
        "Managed the finance carefully, estimating any change request, forecasting, and ensuring that the project estimates are managed upfront.",
        "Facilitated sprint planning, daily scrums, retrospectives, stakeholder meetings, and software demonstrations.",
        "Protected the development team from outside distractions, impediments, or team conflicts, and maintain focus on the product backlog project timeline.",
        "Worked closely with project owners in backlog management and continuous delivery of features.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "OOGI",
      icon: reactjs,
      iconBg: "#383E56",
      date: "August 2022 - February 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Exploring with Web3.0.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "3D Render Artist",
      company_name: "Freelance",
      icon: backend,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Rendering visually appealing and realistic 3D renders of objects, scenes and environments using specialized software.",
        "Collaborating with web designers and developers to understand project requirements and provide creative input to deliver 3D renders that align with the overall website design.",
        "Optimizing rendering settings and resolving technical issues to achieve high quality and optimized 3D renders",
        "Managing time effectively to meet project deadlines and deliver high quality 3D renders in a timely manner.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  const education = [
    {
      name: "Manchester Metropolitan University",
      description:
        "Master of International Law",
      tags: [
        {
          name: "LegalTech",
          color: "blue-text-gradient",
        },
      ],
      image: mmu,
      source_code_link: "https://www.mmu.ac.uk/",
    },
    {
      name: "Obafemi Awolowo University",
      description:
        "Bachelor of Laws",
      tags: [
        {
          name: "CriminalLaw",
          color: "green-text-gradient",
        },
      ],
      image: oau,
      source_code_link: "https://oauife.edu.ng/",
    },
    {
      name: "SMAC",
      description:
        "Scrum Master Accredited Certification",
      tags: [
        {
          name: "Agile",
          color: "pink-text-gradient",
        },
      ],
      image: smac,
      source_code_link: "https://www.scrum-institute.org/",
    },
  ];
  
  const projects = [
    {
      name: "Summarize",
      description:
        "Introducing Summarize, an open-source tool that effortlessly converts long articles into concise summaries. Save time and enhance your reading experience by quickly grasping the main points of any article. Whether you're a student, professional, or an avid reader, our user-friendly website is here to streamline your information consumption and help you stay informed with ease.",
      tags: [
        {
          name: "ArtificialIntelligence",
          color: "blue-text-gradient",
        },
        {
          name: "Academic",
          color: "green-text-gradient",
        },
        {
          name: "Research",
          color: "pink-text-gradient",
        },
      ],
      image: summarize,
      source_code_link: "https://summarize.uk/",
    },
    {
      name: "Oogi",
      description:
        "Oogi, a cutting-edge demo website for cryptocurrency enthusiasts that simplifies Ethereum transactions. With Oogi, you can seamlessly connect your wallet, send Ethereum on the blockchain, and monitor live transactions directly on the website.",
      tags: [
        {
          name: "Web3.0",
          color: "blue-text-gradient",
        },
        {
          name: "cryptocurrency",
          color: "green-text-gradient",
        },
        {
          name: "blockchain",
          color: "pink-text-gradient",
        },
      ],
      image: oogi,
      source_code_link: "https://oogitoken.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, education };