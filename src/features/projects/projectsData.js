import ecommerce from "../../assets/images/ecommerce.webp";
import precision from "../../assets/images/precision.webp";
import foodie from "../../assets/images/foodie.webp";
import katalyx from "../../assets/images/katalyxmedia.webp";
import spotify from "../../assets/images/spotify ui.webp";
import inotebook from "../../assets/images/inotebook.webp";
import newsweb from "../../assets/images/news web.webp";
import airline from "../../assets/images/airline.webp";

export const projects = [
  {
    id: 1,

    slug: "foodie-food-delivery-app",

    title: "Foodie",

    category: "Mobile App · Food Delivery",

    tagline:
      "Full-stack Flutter food delivery app with real-time Firestore menus, cart management, and a clean animated ordering experience.",

    description: `
    Foodie is a full-stack mobile food delivery application built with Flutter and powered by Firebase. It delivers a complete ordering experience for customers, from account creation to checkout, backed by a live, cloud-hosted menu and order system.

    The app features a dynamic home feed that loads food items, categories, and promotions directly from Cloud Firestore, with real-time search and category filtering. Users can view detailed food pages with Hero animations, adjust quantities, and add items to a persistent cart. The cart is managed through a dedicated Provider-based state layer that handles quantity updates, automatic item removal, and live total price calculation.

    On checkout, orders are written to Firestore with itemized details, total price, and status, and are immediately reflected in a user-specific order history screen. The profile screen pulls the signed-in user's data from Firestore and provides quick access to order history and logout. Firebase Authentication handles signup, login, and persisted sessions, with a splash screen that automatically routes returning users into the app.

    The frontend was built with Flutter and Dart using Material Design components, Hero animations, and AnimatedContainer transitions for smooth, native-feeling interactions. The backend runs entirely on Firebase, using Firebase Authentication for user management and Cloud Firestore as a real-time NoSQL database for users, foods, and orders.

    This project demonstrates practical experience with Flutter app architecture, Firebase integration, Provider-based state management, and building a production-style mobile ordering flow from scratch.
  `,

    tech: [
      "Flutter",
      "Dart",
      "Firebase Authentication",
      "Cloud Firestore",
      "Provider",
      "Material Design",
    ],

    thumbnail: foodie,

    liveUrl: "",

    githubUrl: "",

    year: "2026",
  },
  {
    id: 2,

    slug: "precision-toronto",

    title: "Precision Toronto",

    category: "Booking Platform",

    tagline:
      "Premium car detailing platform with intelligent booking, real-time scheduling, and a modern high-performance user experience.",

    description: `
    Precision Toronto is a modern full-stack car detailing platform designed to deliver a seamless digital booking experience for both customers and administrators. Built with performance, scalability, and user experience in mind, the platform combines a high-end responsive frontend with a powerful backend booking and scheduling system.
    
    The project features a fully functional appointment workflow where users can select vehicle types, choose detailing services and add-ons, calculate service durations dynamically, and reserve available time slots in real time. To ensure reliability, the backend includes advanced booking validation and overlap prevention logic that eliminates scheduling conflicts and improves operational efficiency.

    Alongside the customer-facing experience, the platform includes a complete admin dashboard for managing bookings, approving appointments, rescheduling services, tracking timelines, exporting booking data, and handling bulk actions. The interface was carefully optimized using lazy loading, code splitting, connection-aware prefetching, and smooth animations to create a fast, modern, and engaging experience across all devices.

    The frontend was developed using React, Tailwind CSS, Framer Motion, React Three Fiber, and modern UI optimization techniques, while the backend was powered by Node.js, Express, MongoDB, and RESTful APIs for booking, scheduling, and contact management.

    This project demonstrates expertise in full-stack development, scalable booking architectures, responsive UI systems, performance optimization, and modern interactive web experiences.
  `,

    tech: [
      "React.js",
      "TailwindCSS",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],

    thumbnail: precision,

    liveUrl: "https://www.precisiontoronto.com/",

    githubUrl: "https://github.com/sab-eeh/Precision-Toronto",

    year: "2026",
  },

  {
    id: 3,

    slug: "iphone-purchase-ecommerce",

    title: "iPhone Purchase Ecommerce",

    category: "Full Stack Ecommerce",

    tagline:
      "Modern full-stack ecommerce platform for purchasing Apple iPhones with real-time stock management and seamless shopping experience.",

    description: `
    iPhone Purchase Ecommerce is a fully responsive full-stack web application designed to deliver a smooth and modern online shopping experience for Apple iPhones. The platform combines clean UI design with scalable backend architecture to provide users with an intuitive, fast, and reliable ecommerce workflow.

    The application features dynamic cart management, real-time stock updates, detailed order history tracking, and responsive product browsing optimized for both desktop and mobile devices. Users can seamlessly add products to their cart, place orders, and review previous purchases through an interactive and user-friendly interface.

    On the backend, the system handles inventory management and order processing through RESTful APIs built with Node.js and Express.js, while MySQL powers the relational database structure for products, orders, and transactional data. Real-time stock synchronization ensures accurate product availability and prevents inventory conflicts during purchases.

    The frontend was developed using React.js, Tailwind CSS, and React Router DOM to create a modern component-driven architecture with responsive layouts and optimized user interactions.

    This project demonstrates expertise in full-stack ecommerce development, database management, responsive UI engineering, API integration, and scalable shopping system architecture.
  `,

    tech: [
      "React.js",
      "TailwindCSS",
      "React Router DOM",
      "Node.js",
      "Express.js",
      "MySQL",
    ],

    thumbnail: ecommerce,

    liveUrl: "#",

    githubUrl: "https://github.com/sab-eeh/Iphone-Purchase-Ecommerce-Website",

    year: "2026",
  },

  {
    id: 4,

    slug: "katalyx-media",

    title: "Katalyx Media",

    category: "Agency Landing Page",

    tagline:
      "Modern conversion-focused media agency landing page with premium animations, responsive layouts, and strong visual storytelling.",

    description: `
    Katalyx Media is a modern agency landing page designed to establish a strong digital presence through clean aesthetics, smooth interactions, and conversion-focused user experience. The project was developed with a focus on modern frontend architecture, responsive design systems, and visually engaging layouts tailored for creative and marketing agencies.

    The landing page features structured content sections, animated transitions, interactive UI components, and performance-optimized rendering to create a seamless browsing experience across all devices. Strong typography hierarchy, strategic spacing, and modern motion design were implemented to improve readability, engagement, and brand presentation.

    Built using Next.js, Tailwind CSS, and Framer Motion, the project emphasizes fast page performance, scalable component architecture, and polished frontend development practices. The design approach balances minimalism with dynamic visual elements to create a premium and professional user experience.

    This project showcases expertise in responsive frontend development, UI/UX design systems, animation integration, and modern landing page architecture optimized for branding and user conversion.
  `,

    tech: ["Next.js", "TailwindCSS", "Framer Motion"],

    thumbnail: katalyx,

    liveUrl: "https://katalyx-media-landing-page.vercel.app/",

    githubUrl: "https://github.com/sab-eeh/katalyx-Media-Landing-Page",

    year: "2026",
  },
  {
    id: 5,

    slug: "spotify-ui-clone",

    title: "Spotify UI Clone",

    category: "UI Clone",

    tagline:
      "Pixel-perfect Spotify-inspired interface with immersive dark aesthetics, smooth animations, and modern interactive UI design.",

    description: `
    Spotify UI Clone is a modern frontend web application developed to recreate the visual experience and interaction patterns of Spotify using a clean component-based architecture and high-performance frontend technologies.

    The project focuses on delivering a polished user experience through responsive layouts, immersive dark-themed aesthetics, animated transitions, and reusable UI components. Designed with attention to spacing, typography, and interface behavior, the application replicates the modern streaming platform feel while maintaining scalability and frontend maintainability.

    The interface includes interactive artist modals, smooth page interactions, structured music sections, and modern card-based layouts enhanced with Framer Motion animations for fluid user engagement. Tailwind CSS was used to create a fast, scalable, and utility-driven design system optimized for responsiveness across different screen sizes.

    Built using React.js, Vite, Tailwind CSS, and Framer Motion, the project demonstrates strong frontend engineering practices, modern UI development workflows, and component-driven architecture.

    Future development plans include real-time music playback, backend API integration, playlist management systems, and personalized user data storage to evolve the project into a complete music streaming experience.
  `,

    tech: ["React.js", "Vite", "TailwindCSS", "Framer Motion"],

    thumbnail: spotify,

    liveUrl: "https://sspotifyyclone.netlify.app/",

    githubUrl: "https://github.com/sab-eeh/Spotify-Clone",

    year: "2025",
  },

  {
    id: 6,

    slug: "inotebook-app",

    title: "iNotebook",

    category: "Notes Application",

    tagline:
      "Secure MERN stack notes management application with private user authentication and real-time CRUD functionality.",

    description: `
    iNotebook is a full-stack MERN application developed to provide users with a secure and efficient platform for managing personal notes. The project focuses on authentication-driven data privacy, ensuring that every user has access only to their own notes through protected backend authorization systems.

    The application includes complete CRUD functionality, allowing users to create, update, delete, and organize notes through a clean and responsive interface. Authentication workflows such as sign-up and login were implemented using JWT-based authorization and encrypted password handling to maintain secure user sessions and data protection.

    The backend was built using Node.js, Express.js, MongoDB, and Mongoose to handle API operations, database management, and authentication logic efficiently. Features such as input validation, protected routes, encrypted credentials, and real-time API-driven updates ensure both scalability and reliability.

    On the frontend, React.js was used to create a responsive and component-driven user experience optimized for smooth interaction and fast state management.

    This project demonstrates expertise in MERN stack development, authentication systems, RESTful API architecture, secure database handling, and modern full-stack application development practices.
  `,

    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
    ],

    thumbnail: inotebook,

    liveUrl: "https://inote-book-alpha.vercel.app",

    githubUrl: "https://github.com/sab-eeh/iNoteBook",

    year: "2025",
  },

  {
    id: 7,

    slug: "news-application",

    title: "News Application",

    category: "Web Application",

    tagline:
      "Real-time news platform with category-based browsing, responsive layouts, and seamless live content updates.",

    description: `
    News Application is a React-based web platform developed to deliver real-time news updates through a fast, responsive, and user-friendly browsing experience. The project focuses on dynamic content rendering, category-based navigation, and clean frontend architecture for efficient news consumption across all devices.

    The application integrates with an external news API to fetch live articles and display continuously updated content in an organized and accessible interface. Users can seamlessly navigate between different news categories using React Router, creating a smooth single-page application experience with fast client-side transitions.

    The frontend was designed with responsive layouts, structured content sections, and optimized component rendering to ensure readability and usability on desktop, tablet, and mobile devices. Bootstrap and custom styling techniques were used to maintain consistency, scalability, and modern visual presentation.

    Built using React.js, React Router, external REST APIs, and Bootstrap, the project demonstrates expertise in API integration, frontend state management, responsive UI engineering, and dynamic content-driven web application development.

    This project highlights strong skills in building scalable frontend applications that handle live data updates while maintaining performance, accessibility, and clean user experience design.
  `,

    tech: ["React.js", "React Router", "News API", "Bootstrap"],

    thumbnail: newsweb,

    liveUrl: "https://news-application-indol-six.vercel.app/",

    githubUrl: "https://github.com/sab-eeh/News-Application",

    year: "2025",
  },
  {
    id: 8,

    slug: "airline-management-system",

    title: "Airline Management System",

    category: "CLI Application",

    tagline:
      "Command-line airline management system for handling flight schedules, passenger bookings, and reservation management.",

    description: `
    Airline Management System is a Python-based command-line application developed to simulate core airline operations through a lightweight and efficient management workflow. The project focuses on handling passenger bookings, flight scheduling, ticket management, and data storage using file handling techniques.

    The system allows users to view available flights, manage reservations, retrieve passenger details, and cancel bookings through an interactive CLI environment. Flight schedules, passenger records, and booking information are stored and managed using structured .txt file handling, providing a simple yet effective approach to persistent data management without requiring a database system.

    The application was designed with modular functionality to ensure organized data processing, smooth user interaction, and efficient record management. Features such as booking storage, cancellation updates, and passenger retrieval workflows demonstrate practical implementation of file handling, condition-based logic, and structured application flow in Python.

    Built using Python and text-based data storage systems, the project highlights strong foundational programming concepts, backend logic implementation, file management techniques, and command-line application development.

    This project demonstrates problem-solving skills, structured programming practices, and the ability to build functional management systems using core programming principles.
  `,

    tech: ["Python", "File Handling", "CLI Application", "Text File Storage"],

    thumbnail: airline,

    liveUrl: "#",

    githubUrl: "https://github.com/sab-eeh/Airline-Management-System",

    year: "2024",
  },
];
