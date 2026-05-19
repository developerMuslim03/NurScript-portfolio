import { Project } from "@/types";
import {
  Globe,
  Palette,
  Code2,
  Rocket,
} from "lucide-react"

export const skills = [
  { name: "Next.js 15", icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
  { name: "TypeScript", icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
  { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
  { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
  { name: "PostgreSQL", icon: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
  { name: "Framer Motion", icon: "https://pagepro.co/blog/wp-content/uploads/2020/03/framer-motion.png" },
  { name: "Shadcn UI", icon: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4" },
];
export const projects: Project[] = [
  {
    id: "1",
    title: "Awaza-travel web site",
    description: "Next.js 15 bilen döwrebap Awaza syyahatcylyk web sayty.",
    image: "/project/project1.png", 
    tags: ["Next.js", "Tailwind", "Prisma"],
    link: "https://awaza-travel-site.vercel.app/",
    github: "https://github.com/developerMuslim03/Awaza-travel.git",
    
  },
   {
    id: "2",
    title: "NurScript Portfolio",
    description: "NurScript portfolio.",
    image: "/project/project3.png",
    tags: ["Next.js", "Tailwind"],
    link: "#",
    github: "https://github.com/developerMuslim03/NurScript-portfolio.git",
  },
  {
    id: "3",
    title: "Portfolio Test",
    description: "Practic portfolio.",
    image: "/project/project2.png",
    tags: ["Next.js", "Tailwind"],
    link: "https://magnificent-marzipan-5bd7f4.netlify.app/",
    github: "https://github.com/developerMuslim03/my-first-deploy-project.git",
  },
 

];
export const services = [
  {
    title: "Web Development",
    desc: "Döwrebap we çalt işleýän web sahypalaryny döredýärin.",
    icon: Globe,
  },
  {
    title: "UI/UX Design",
    desc: "Ulanyjy üçin amatly we döwrebap interfeýsler.",
    icon: Palette,
  },
  {
    title: "Frontend Development",
    desc: "React & Next.js bilen interaktiw sahypalar.",
    icon: Code2,
  },
  {
    title: "Performance Optimization",
    desc: "Sahypalaryň tizligini we SEO-ny gowulandyrmak.",
    icon: Rocket,
  },
];