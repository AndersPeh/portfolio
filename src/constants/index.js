import {
  backend,
  // java,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  // redux,
  // tailwind,
  nodejs,
  // mongodb,
  git,
  dotnet,
  csharp,
  react_native,
  sqlicon,
  eastcoast,
  littlecocoa,
  foresight,
  scorpion,
  techreal,
  hospital,
  studentconnect,
  glasses,
  ecommerce,
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
  // general_assembly,
  // medical_team,
  // victoria_state_gov,
  // slotmachine,
  // startasker,
  // booksnap,
  // dreamphotography,
  // snackEShop,
  // movieReviewer,
  // todoApp,
  // huntergarden,
  // lovecalculator,
  // threejs,
  // python,
  // dreamlife,
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
    title: "Full-Stack Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "React Native Developer",
    icon: react_native,
  },
  {
    title: ".Net Developer",
    icon: dotnet,
  },
  // {
  //   title: "Python Developer",
  //   icon: python,
  // },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React-Native",
    icon: react_native,
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
  // {
  //   name: "Scss",
  //   icon: scss,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },


  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "Bootstrap",
  //   icon: bootstrap,
  // },
  // {
  //   name: "Java",
  //   icon: java,
  // },
  // {
  //   name: "Spring",
  //   icon: spring,
  // },
  // {
  //   name: "AWS",
  //   icon: aws,
  // },
  // {
  //   name: "Next.js",
  //   icon: nextJs,
  // },
  // {
  //   name: "Nest.js",
  //   icon: nestJs,
  // },
  {
    name: ".Net",
    icon: dotnet,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "SQL",
    icon: sqlicon,
  },
  // {
  //   name: "FireStore",
  //   icon: fireStore,
  // },

  // {
  //   name: "Python",
  //   icon: python,
  // },
  // {
  //   name: "Django",
  //   icon: django,
  // },

  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "IT Support (Casual)",
    company_name: "Little Cocoa, Qld",
    icon: littlecocoa,
    iconBg: "#383E56",
    date: "Oct 2024 to Current",
    points: [
      "Successfully migrated https://littlecocoa.com.au to a new server by provisioning a server, configuring DNS settings and transferred web files using SFTP.",
      "Collaborated with director and chocolatiers to improve customer experience, including adding custom snowfall effects, implementing options for selecting delivery methods and dates, restricted the availability of Christmas products to specific periods, and changed the calendar background to align with the company theme, enhancing the visual contrast between the calendar and the website background.",
      "Automated processes between the ERP system and the website using n8n, enabling automatic replies to customer inquiries and streamlining the recording of customer and order details.",
    ],
  },
  {
    title: "Web Designer (Volunteer)",
    company_name: "East Coast Whale Study",
    icon: eastcoast,
    iconBg: "#E6DEDD",
    date: "September 2024 to Current",
    points: [
      "Collaborate closely with the founding director to understand her vision and requirements, translating them into website features and content that effectively represent the charity's mission.",
      "Carry out the development of a responsive, user-friendly website for the charity, built from scratch.",
      "Website: https://eastcoastwhalestudy.com",
    ],
  },
  {
    title: "Web Designer",
    company_name: "Foresight Elite Services",
    icon: foresight,
    iconBg: "#383E56",
    date: "February 2025",
    points: [
      "Built a custom website from scratch by understanding the business needs and collaborating directly with the director.",
      "Created graphic elements using Canva to enhance the website's design.",
      "Website: https://foresighteliteservices.com.au",
    ],
  },
  {
    title: "Web Designer",
    company_name: "Scorpion International Tennis Academy",
    icon: scorpion,
    iconBg: "#383E56",
    date: "January 2025",
    points: [
      "Developed web pages to showcase Brisbane tennis courses and Thai tennis tours, effectively attracting potential sign-ups.",
      "Gathered requirements from the director to build a website tailored to the tennis academy’s specific needs.",
      "Website: scorpiontennis.com.au.",
    ],
  },
  {
    title: "Desktop Deployment and Rollout Support",
    company_name: "Gold Coast Private Hospital",
    icon: hospital,
    iconBg: "#383E56",
    date: "January to February 2025",
    points: [
      "Coordinated with hospital staff to schedule desktop deployments, ensuring minimal disruption to hospital operations, especially in surgery rooms.",
      "Deployed and configured new desktops for hospital staff, including nurses, doctors, and administrative personnel.",
    ],
  },
  {
    title: "Senior Real Estate Negotiator",
    company_name: "Tech Real Estate Sdn Bhd, Malaysia",
    icon: techreal,
    iconBg: "#383E56",
    date: "May 2022 to December 2023",
    points: [
      "Leveraged market knowledge and experience in transaction negotiations to secure landed properties with favorable terms for both property purchasers and sellers.",
      "Achieved Monthly Top Achiever in September 2022 and April 2023.",
    ],
  },
];

const projects = [
  {
    name: "Student Connect",
    description:
      "StudentConnect is a personal project born from a passion for learning React and .NET, and a desire to solve a real-world problem for students. This social media application aims to be a dedicated platform for students from diverse universities to connect, collaborate, and interact.",
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
        name: ".Net",
        color: "pink-text-gradient",
      },
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "React-Hook-Form",
        color: "green-text-gradient",
      },
      {
        name: "React Query",
        color: "green-text-gradient",
      },
      // {
      //   name: "AWS",
      //   color: "pink-text-gradient",
      // },
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
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },

    ],
    image: ecommerce,
    source_code_link: "https://github.com/AndersPeh/Ecommerce_MobileApp",
    website_link: "https://github.com/AndersPeh/Ecommerce_MobileApp",
  },

  {
    name: "AR Try On Glasses",
    description:
      "This project allows users to virtually try on different pairs of glasses using Augmented Reality.",
    tags: [
      
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "Unity",
        color: "pink-text-gradient",
      },
      {
        name: "AR Foundation",
        color: "pink-text-gradient",
      },
      {
        name: "Google ARCore XR Plugin",
        color: "pink-text-gradient",
      },

    ],
    image: glasses,
    source_code_link: "https://github.com/AndersPeh/AR_Try_On_Glasses",
    website_link: "https://www.youtube.com/watch?v=77nya6C8xmM",
  },
  
 
];

export { services, technologies, experiences, projects };
