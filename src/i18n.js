import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      title: "Personal Portfolio",
      // Menu
      home: "Home",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
      // Header
      hello:
        "Hello! My name is Darío. I'm a full-stack developer currently working with React, Node.js, Astro, and modern databases. Visit my profiles to see all my projects and skills:",

      // Projects
      projectsTitle: "Projects",
      access: "Access",
      code: "Code",
      project_classic_models_description:
        "REST API and backoffice for managing an e-commerce database. Built with Node.js and Express, it supports both MySQL and MongoDB as interchangeable databases. Includes a secure, EJS-rendered admin interface and authentication system.",
      project_game_find_number_description:
        "A number-guessing game built with React, featuring Tailwind for styling and i18n for multi-language support. Designed for both mobile and desktop users, it offers a smooth, responsive experience in light and dark modes. Players input digits to match a target number, receiving partial results after each attempt, which are saved in local storage to track progress. Ideal for puzzle enthusiasts, this game combines a clean, intuitive interface with challenging gameplay.",
      project_resume_web_description:
        "A web app built in Astro that creates resumes from a .json file. It supports multiple languages, light/dark mode, and is fully responsive, allowing resumes to be viewed as a webpage or printed.",
      project_todo_app_description:
        "A to-do app built with React, featuring local storage for tasks, light and dark mode, and drag-and-drop functionality for task management. Ideal for organizing tasks with a simple, responsive interface.",
      project_asana_clone_description:
        "Landingpage cloned from original Asana website and coded with Astro + TailwindCSS with improvements.",

      // Experiences
      experiencesTitle: "Experience",
      fullStackDeveloper: "Full Stack Developer",
      freelance: "Freelance",
      freelanceDescription:
        "Development of web sites and applications based on Javascript frameworks and libraries, database management, API creation, and CI/CD deployments.",
      itConsultantDeveloper: "IT Consultant and Developer",
      elingSA: "Eling S.A.",
      elingDescriptionConsultant:
        "IT consulting for infrastructure and application maintenance, software control and deployment, and customized solutions for the client.",
      plumDescription:
        "Development and maintenance of .NET-based shopping sites for North American companies. Main focus on implementing new functionalities, performance optimization, and technical problem solving.",
      serverAdmin: "Server and Application Administrator",
      elingDescriptionAdmin:
        "Administration of Windows and Linux servers, application and database management, implementation of security and backup solutions, and technical user support.",
      visitWebsite: "Visit website",

      // Skills
      skillsTitle: "Skills",
      languagesTools: "Languages & Frameworks",
      cloudDevOps: "Cloud & DevOps",
      databases: "Databases",
      aiCollaborationTools: "AI & Collaboration Tools",
      os: "OS: Linux / Windows / iOS",

      // Contact
      contactTitle: "Contact Me",
      sendMessage: "Send me a message",
      name: "Name",
      yourName: "Your name",
      email: "Email address",
      yourEmail: "your@email.com",
      message: "Message",
      yourMessage: "Your message...",
      sending: "Sending...",
      sendMessageButton: "Send message",
      messageSentSuccess: "Message sent! I'll get back to you soon.",
      messageSentError: "Error sending message. Please try again.",
      contactInfo: "Contact Information",
      contactInfoDescription:
        "Do you have a project in mind or want to work together? Don't hesitate to contact me! I respond quickly.",
      emailAddress: "Email address",
      availability: "Availability",
      responseTime: "Response within 24-48 hours",
      whyUseForm: "Why use this form?",
      receiveCopy: "You'll receive a copy of the message in your email",
      encryptedMessages: "Encrypted and protected messages",
      noSpam: "No spam or advertising",
    },
  },
  es: {
    translation: {
      title: "Portfolio Personal",
      // Menu
      home: "Inicio",
      projects: "Proyectos",
      experience: "Experiencia",
      skills: "Habilidades",
      contact: "Contacto",
      // Header
      hello:
        "¡Hola! Mi nombre es Darío. Soy un desarrollador full-stack trabajando actualmente con React, Node.js, Astro y bases de datos modernas. Visita mis perfiles para ver todos mis proyectos y habilidades:",

      // Projects
      projectsTitle: "Proyectos",
      access: "Acceder",
      code: "Código",
      project_classic_models_description:
        "API REST y backoffice para la gestión de una base de datos de comercio electrónico. Construido con Node.js y Express, soporta MySQL y MongoDB como bases de datos intercambiables. Incluye una interfaz de administración segura renderizada con EJS y un sistema de autenticación.",
      project_game_find_number_description:
        "Un juego de adivinar números construido con React, con Tailwind para estilos y i18n para soporte multi-idioma. Diseñado para usuarios móviles y de escritorio, ofrece una experiencia fluida y responsiva en modos claro y oscuro. Los jugadores introducen dígitos para igualar un número objetivo, recibiendo resultados parciales después de cada intento, los cuales se guardan en el almacenamiento local para seguir el progreso. Ideal para entusiastas de los rompecabezas, este juego combina una interfaz limpia e intuitiva con una jugabilidad desafiante.",
      project_resume_web_description:
        "Una aplicación web construida en Astro que crea currículums desde un archivo .json. Soporta múltiples idiomas, modo claro/oscuro, y es totalmente responsiva, permitiendo que los currículums se visualicen como una página web o se impriman.",
      project_todo_app_description:
        "Una aplicación de lista de tareas construida con React, con almacenamiento local para las tareas, modo claro y oscuro, y funcionalidad de arrastrar y soltar para la gestión de tareas. Ideal para organizar tareas con una interfaz sencilla y responsiva.",
      project_asana_clone_description:
        "Landing page clonada del sitio web original de Asana y codificada con Astro + TailwindCSS con mejoras.",

      // Experiences
      experiencesTitle: "Experiencia",
      fullStackDeveloper: "Desarrollador Full Stack",
      freelance: "Freelance",
      freelanceDescription:
        "Desarrollo de sitios y aplicaciones web basados en frameworks y librerías de Javascript, manejo de bases de datos, creación de APIs y despliegues CI/CD.",
      itConsultantDeveloper: "Consultor IT y Desarrollador",
      elingSA: "Eling S.A.",
      elingDescriptionConsultant:
        "Consultoría IT para el mantenimiento de infraestructura y aplicaciones, control y despliegue de software y soluciones personalizadas para el cliente.",
      plumDescription:
        "Desarrollo y mantenimiento de sitios de compras basados en .NET para empresas norteamericanas. Enfoque principal en la implementación de nuevas funcionalidades, optimización de rendimiento y resolución de problemas técnicos.",
      serverAdmin: "Administrador de Servidores y aplicaciones",
      elingDescriptionAdmin:
        "Administración de servidores Windows y Linux, gestión de aplicaciones y bases de datos, implementación de soluciones de seguridad y respaldo, y soporte técnico a usuarios.",
      visitWebsite: "Visitar sitio",

      // Skills
      skillsTitle: "Habilidades",
      languagesTools: "Lenguajes & Frameworks",
      cloudDevOps: "Nube & DevOps",
      databases: "Bases de Datos",
      aiCollaborationTools: "IA & Colaboración",
      os: "SO: Linux / Windows / iOS",

      // Contact
      contactTitle: "Contáctame",
      sendMessage: "Envíame un mensaje",
      name: "Nombre",
      yourName: "Tu nombre",
      email: "Correo electrónico",
      yourEmail: "tu@email.com",
      message: "Mensaje",
      yourMessage: "Tu mensaje...",
      sending: "Enviando...",
      sendMessageButton: "Enviar mensaje",
      messageSentSuccess: "¡Mensaje enviado! Te responderé pronto.",
      messageSentError: "Error al enviar el mensaje. Inténtalo de nuevo.",
      contactInfo: "Información de contacto",
      contactInfoDescription:
        "¿Tienes un proyecto en mente o quieres trabajar juntos? ¡No dudes en contactarme! Respondo rápidamente.",
      emailAddress: "Correo electrónico",
      availability: "Disponibilidad",
      responseTime: "Respuesta en 24-48 horas",
      whyUseForm: "¿Por qué usar este formulario?",
      receiveCopy: "Recibirás una copia del mensaje en tu correo",
      encryptedMessages: "Mensajes cifrados y protegidos",
      noSpam: "Sin spam ni publicidad",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
