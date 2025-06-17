import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiAstro,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiJavascript,
  SiI18Next,
} from "react-icons/si";

import {
  FaJs,
  FaAngular,
  FaDocker,
  FaAws,
  FaTerminal,
  FaGitAlt,
  FaLinux,
  FaWindows,
  FaApple,
  FaTools,
  FaCode,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";
import {
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiDotnet,
  SiVercel,
  SiNotion,
  SiSlack,
  SiTrello,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

import { TbBrandCSharp } from "react-icons/tb";

import { GoCopilot } from "react-icons/go";

export const techIcons = {
  React: { icon: FaReact, color: "#00c8ff" },
  Astro: { icon: SiAstro, color: "#8340ee" },
  "Node.js": { icon: FaNodeJs, color: "#339933" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  MySQL: { icon: SiMysql, color: "#00758F" },
  Tailwind: { icon: SiTailwindcss, color: "#38B2AC" },
  Javascript: { icon: SiJavascript, color: "#e1c800" },
  i18n: { icon: SiI18Next, color: "#61DAFB" },
};

export const skillsIcons = {
  // Languages & Tools
  Javascript: { icon: FaJs, color: "#F7DF1E" },
  Typescript: { icon: SiTypescript, color: "#3178C6" },
  "C#": { icon: TbBrandCSharp, color: "#239120" },
  "HTML5 & CSS3": { icon: [SiHtml5, SiCss3], color: ["#E34F26", "#1572B6"] },
  React: { icon: FaReact, color: "#61DAFB" },
  NodeJS: { icon: FaNodeJs, color: "#339933" },
  Angular: { icon: FaAngular, color: "#DD0031" },
  "ASP .NET": { icon: SiDotnet, color: "#512BD4" },
  Astro: { icon: SiAstro, color: "#FF5D01" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },

  // Cloud & DevOps
  AWS: { icon: FaAws, color: "#FF9900" },
  Vercel: { icon: SiVercel, color: "#000000" },
  Docker: { icon: FaDocker, color: "#2496ED" },
  "CI/CD": { icon: FaGitAlt, color: "#F05032" },
  "Shell Scripting": { icon: FaTerminal, color: "#4D4D4D" },
  "OS: Linux / Windows / IOS": {
    icon: [FaLinux, FaWindows, FaApple],
    color: ["#FCC624", "#0078D4", "#000000"],
  },

  // Databases
  MySQL: { icon: SiMysql, color: "#4479A1" },
  "SQL Server": { icon: DiMsqlServer, color: "#CC2927" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },

  // AI & Collaboration Tools
  Copilot: { icon: GoCopilot, color: "#00A4EF" },

  "Windsurf AI": { icon: FaTerminal, color: "#4B32C3" },
  MCP: { icon: FaTerminal, color: "#0072C6" },
  Notion: { icon: SiNotion, color: "#000000" },
  Slack: { icon: SiSlack, color: "#4A154B" },
  Trello: { icon: SiTrello, color: "#0052CC" },

  // Other
  Tools: { icon: FaTools, color: "#FFF" },
  Code: { icon: FaCode, color: "#FFF" },
  Cloud: { icon: FaCloud, color: "#FFF" },
  Database: { icon: FaDatabase, color: "#FFF" },
};
