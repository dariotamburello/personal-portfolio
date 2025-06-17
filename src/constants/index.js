import classicModels from "../assets/classic-models.webp";
import findNumber from "../assets/find-number.webp";
import resumeFromJson from "../assets/resume-from-json.webp";
import todoApp from "../assets/todo-app.webp";
import asana from "../assets/asana.webp";

export const socialLinks = [
  { name: "GitHub", url: "https://github.com", icon: "🐙" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "💼" },
];

export const experiences = [
  {
    titleKey: "fullStackDeveloper",
    company: "Freelance",
    date: "2017 - Presente",
    descriptionKey: "freelanceDescription",
    website: "https://www.tdnic.com.ar/",
  },
  {
    titleKey: "itConsultantDeveloper",
    company: "Eling S.A.",
    date: "2024 - Presente",
    descriptionKey: "elingDescriptionConsultant",
    website: "https://www.eling.com.ar/",
  },
  {
    titleKey: "fullStackDeveloper",
    company: "Plum S.A.",
    date: "2022 - 2024",
    descriptionKey: "plumDescription",
    website: "https://www.plum.com.ar/",
  },
  {
    titleKey: "serverAdmin",
    company: "Eling S.A.",
    date: "2011 - 2022",
    descriptionKey: "elingDescriptionAdmin",
    website: "https://www.eling.com.ar/",
  },
];

export const projects = [
  {
    title: "Classic Models - REST API & Backoffice",
    descriptionKey: "project_classic_models_description",
    tech: ["Node.js", "MySQL", "MongoDB", "Javascript"],
    image: classicModels,
    url: "https://classicmodels-api-rest.vercel.app",
    repo: "https://github.com/dariotamburello/classicmodels_api_rest",
  },
  {
    title: "GAME - Find the number",
    descriptionKey: "project_game_find_number_description",
    tech: ["React", "Tailwind", "Javascript", "i18n"],
    image: findNumber,
    url: "https://game-find-number.vercel.app/",
    repo: "https://github.com/dariotamburello/game_find_number",
  },
  {
    title: "Resume web from json file",
    descriptionKey: "project_resume_web_description",
    tech: ["Astro", "Tailwind", "Javascript", "i18n"],
    image: resumeFromJson,
    url: "https://resume-portfolio-psi-lemon.vercel.app/en/",
    repo: "https://github.com/dariotamburello/resume_portfolio",
  },
  {
    title: "To.do.App",
    descriptionKey: "project_todo_app_description",
    tech: ["React", "Tailwind", "Javascript"],
    image: todoApp,
    url: "https://to-do-app-eight-psi-96.vercel.app/",
    repo: "https://github.com/dariotamburello/To.Do-App",
  },
  {
    title: "Asana website clone v1.0",
    descriptionKey: "project_asana_clone_description",
    tech: ["Astro", "Tailwind"],
    image: asana,
    url: "https://asana-clone-wine.vercel.app/",
    repo: "https://github.com/dariotamburello/asana_clone",
  },
];

export const skills = [
  {
    categoryKey: "languagesTools",
    icon: "Code",
    items: [
      "Javascript",
      "Typescript",
      "C#",
      "HTML5 & CSS3",
      "React",
      "NodeJS",
      "Angular",
      "ASP .NET",
      "Astro",
      "Tailwind CSS",
    ],
  },
  {
    categoryKey: "cloudDevOps",
    icon: "Cloud",
    items: [
      "AWS",
      "Vercel",
      "Docker",
      "CI/CD",
      "Shell Scripting",
      "OS: Linux / Windows / IOS",
    ],
  },
  {
    categoryKey: "databases",
    icon: "Database",
    items: ["MySQL", "SQL Server", "MongoDB"],
  },
  {
    categoryKey: "aiCollaborationTools",
    icon: "Tools",
    items: ["Copilot", "Windsurf AI", "MCP", "Notion", "Slack", "Trello"],
  },
];
