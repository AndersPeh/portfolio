import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  // redux,
  // tailwind,
  // mongodb,
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
  // bootstrap,
  // nextJs,
  // scss,
  // nestJs,
  // spring,
  // aws,
  // fireStore,
  // MUI,
  // django,
  // figma,
  // docker,
  // python,
  // dreamlife,
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
    title: "Full-Stack Software Development",
    icon: fullstack,
  },
  {
    title: "Frontend Development",
    icon: reactjs,
  },
  {
    title: "Backend Development",
    icon: dotnet,
  },
  {
    title: "Mobile App Development",
    icon: reactnative,
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
    name: "Material UI",
    icon: mui,
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
      "Carry out Software Development tasks to support the AI Investigation Management platform.",
    ],
  },
  {
    title: "IT Support (Casual)",
    company_name: "Little Cocoa, Qld",
    icon: littlecocoa,
    iconBg: "#383E56",
    date: "Oct 2024 - Apr 2025",
    points: [
      "Migrated https://littlecocoa.com.au to a new server, which reduced hosting costs by 80% annually",
      "Collaborated with the team to enhance the website by implementing features like a delivery method, delivery calendar and order notes, resulting in a 70% reduction in delivery timing related queries.",
      "Automated processes between ERPNext and the website using n8n, which enabled automatic replies to customer inquiries and streamlined the recording of order details.",
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
    date: "Jan - Feb 2025",
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
    date: "May 2022 - Dec 2023",
    points: [
      "Leveraged market knowledge and negotiation experience to secure high-end property transactions",
    ],
    recommendationImage: techreal_recommendation,
  },
];

const projects = [
  {
    name: "Student Connect",
    description:
      "I like observing what is happening around me to identify problems and come up with solutions. For example, I have noticed that students often struggle to find other students in their university or across different universities, to join professional events or social activities. There are too many social media groups filled with spam and often become inactive. These observations led me to start my personal project, “StudentConnect”, a centralised app designed to allow students to connect across different universities. This effort highlights my proactive approach to problem-solving and my commitment to developing practical solutions.",
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
