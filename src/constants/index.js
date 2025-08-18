import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  github,
  dotnet,
  csharp,
  reactnative,
  sql,
  cleanArchi,
  hookForm,
  mobx,
  mui,
  rquery,
  axios,
  fullstack,
  node,
  postman,
  fluentValid,
  rrouter,
  ef,
  eastcoast,
  littlecocoa,
  foresight,
  scorpion,
  techreal,
  hospital,
  studentconnect,
  glasses,
  ecommerce,
  eastcoast_recommendation,
  scorpion_recommendation,
  techreal_recommendation,
  griffith,
  griffith_recommendation,
  griffith_scholarship,
  mediatr,
  comtrac,
  Azure,
  dev,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experiences",
    title: "Experiences",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Development",
    icon: dev,
  },
];

const technologies = [
  {
    name: "Clean Architecture",
    icon: cleanArchi,
  },
  {
    name: ".NET",
    icon: dotnet,
  },
  {
    name: "C#",
    icon: csharp,
  },

  {
    name: "EF Core",
    icon: ef,
  },
  {
    name: "Fluent Validation",
    icon: fluentValid,
  },
  {
    name: "MediatR",
    icon: mediatr,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "SQL",
    icon: sql,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React Native",
    icon: reactnative,
  },
  // {
  //   name: "Mobx",
  //   icon: mobx,
  // },
  {
    name: "React Query",
    icon: rquery,
  },
  {
    name: "Axios",
    icon: axios,
  },
  {
    name: "React Router",
    icon: rrouter,
  },
  {
    name: "React Hook Form",
    icon: hookForm,
  },
  {
    name: "Node JS",
    icon: node,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },

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
    name: "Azure",
    icon: Azure,
  },
  {
    name: "GitHub",
    icon: github,
  },
];

const experiences = [
  {
    title: "Software Development Intern",
    company_name: "Comtrac, Brisbane",
    icon: comtrac,
    iconBg: "#383E56",
    date: "Jul 2025 - Current",
    points: [
      "Applied project management skills to create a detailed 13-week internship proposal, which involved defining the project scope, key deliverables, success metrics and risk mitigation strategies.",
      "Contribute to the C#/.NET backend: develop APIs, write unit tests, and fix bugs to improve application quality.",
      "Scheduled to rotate to the DevOps team in September 2025 to improve IaC scripts and CI/CD pipelines in Microsoft Azure.",
      "Collaborate within a Shape Up framework, engaging in technical and client meetings to align work with commercial goals.",
    ],
  },
  {
    title: "IT Support (Casual)",
    company_name: "Little Cocoa, Qld",
    icon: littlecocoa,
    iconBg: "#383E56",
    date: "Oct 2024 - Apr 2025",
    points: [
      "Migrated https://littlecocoa.com.au to a new server, which reduced hosting costs by 60% annually.",
      "Collaborated with the team to enhance the website by implementing features like a delivery method, delivery calendar and order notes, led to a 50% reduction in delivery timing related queries.",
    ],
  },
  {
    title: "Web Designer (Volunteer)",
    company_name: "East Coast Whale Study, Qld",
    icon: eastcoast,
    iconBg: "#E6DEDD",
    date: "Sept 2024 - Current",
    points: [
      "Collaborate closely with the founding director to understand her vision and requirements, translating them into website features and content that effectively represent the Not-for-profit organisation's mission.",
      "Carry out the development of a responsive, user-friendly website for the charity, built from scratch.",
      "https://eastcoastwhalestudy.com",
    ],
    recommendationImage: eastcoast_recommendation,
  },
  {
    title: "Web Designer (Contract)",
    company_name: "Foresight Elite Services, Qld",
    icon: foresight,
    iconBg: "#383E56",
    date: "Feb 2025",
    points: [
      "Built a custom website from scratch by understanding the business needs and collaborating directly with the director.",
      "Created graphic elements using Canva to enhance the website's design.",
      "https://foresighteliteservices.com.au",
    ],
  },
  {
    title: "Web Designer (Contract)",
    company_name: "Scorpion International Tennis Academy, Qld",
    icon: scorpion,
    iconBg: "#383E56",
    date: "Jan 2025",
    points: [
      "Developed web pages to showcase Brisbane tennis courses and Thai tennis tours, effectively attracting potential sign-ups.",
      "Gathered requirements from the director to build a website tailored to the tennis academy’s specific needs.",
      "https://scorpiontennis.com.au",
    ],
    recommendationImage: scorpion_recommendation,
  },
  {
    title: "Desktop Deployment and Rollout Support (Contract)",
    company_name: "Gold Coast Private Hospital",
    icon: hospital,
    iconBg: "#383E56",
    date: "Feb 2025",
    points: [
      "Coordinated with hospital staff to schedule desktop deployments, ensuring minimal disruption to hospital operations, especially in surgery rooms.",
      "Deployed and configured new desktops for hospital staff, including nurses, doctors, and administrative personnel.",
    ],
  },
  {
    title: "Senior Real Estate Negotiator (Full Time)",
    company_name: "Tech Real Estate Sdn Bhd, Malaysia",
    icon: techreal,
    iconBg: "#383E56",
    date: "June 2022 - June 2023",
    points: [
      "Advised clients on high-end property transactions by analysing market data, valuations and home lending options, while liaising with bankers and lawyers to secure deals.",
    ],
    recommendationImage: techreal_recommendation,
  },
];

const projects = [
  {
    name: "Student Connect",
    description:
      "My approach to software is driven by observation. I noticed that students often struggle to find friends to join professional events or social activities across different universities. Existing platforms were cluttered and inefficient. This inspired me to architect and build StudentConnect, a full-stack application designed to solve this community need. This project is my playground for implementing clean architecture with .NET and building a dynamic, responsive user experience with React and TypeScript.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: ".NET",
        color: "pink-text-gradient",
      },
      {
        name: "C#",
        color: "orange-text-gradient",
      },
      {
        name: "Postman",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "orange-text-gradient",
      },
      {
        name: "React Query",
        color: "pink-text-gradient",
      },
      {
        name: "Clean Architecture",
        color: "blue-text-gradient",
      },
    ],
    image: studentconnect,
    source_code_link: "https://github.com/AndersPeh/StudentConnect",
    website_link: "https://github.com/AndersPeh/StudentConnect",
  },
  {
    name: "Ecommerce React Native App",
    description:
      "An e-commerce platform that allows users to browse products, manage a shopping cart, and process orders, leveraging the Fake Store API for product data and a dedicated backend service for user and order management.",
    tags: [
      {
        name: "React-Native",
        color: "orange-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Redux Thunk",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/AndersPeh/Ecommerce_MobileApp",
    website_link: "https://github.com/AndersPeh/Ecommerce_MobileApp",
  },

  {
    name: "AR Try On Glasses",
    description:
      "This project allows users to virtually try on different pairs of glasses using Augmented Reality. Click to checkout our demo video.",
    tags: [
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "Unity",
        color: "pink-text-gradient",
      },
      {
        name: "Google ARCore",
        color: "blue-text-gradient",
      },
    ],
    image: glasses,
    source_code_link: "https://github.com/AndersPeh/AR_Try_On_Glasses",
    website_link: "https://www.youtube.com/watch?v=77nya6C8xmM",
  },
];

const education = [
  {
    title: "Master of IT",
    major: "Major: Software Development",
    universityName: "Griffith University",
    icon: griffith,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - Current",
    grade: "GPA 6.63",
    recommendation_image: griffith_recommendation,
    scholarship_image: griffith_scholarship,
  },
];

export { services, technologies, experiences, projects, education };
