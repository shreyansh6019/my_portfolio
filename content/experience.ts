import type { Experience } from "@/types/experience";
import { Zap } from "lucide-react";
import {
    SiNextdotjs,
    SiReact,
    SiRedux,
    SiTailwindcss,
    SiTypescript,
    SiFusionauth,
    SiReactquery,
    SiAntdesign,
    SiWebpack,
    SiVite,
    SiHtml5,
    SiJest,
    SiReduxsaga,
} from "react-icons/si";

import { IoLogoCss3 } from "react-icons/io5";
import { MdPayment } from "react-icons/md";

import { PiWebhooksLogoDuotone } from "react-icons/pi";
import { TbBrandJavascript } from "react-icons/tb";

import { AiTwotoneApi } from "react-icons/ai";

export const experiences: Experience[] = [
    {
        id: "software-developer",

        company: "Clover Bay Technologies",

        role: "Software Developer",

        duration: {
            start: "Aug2024",
            end: "Sep 2025",
        },

        current: true,

        summary:
  "Designed and developed scalable frontend applications using React, Next.js, and TypeScript, taking ownership of complex features, improving application performance, optimizing build and bundle strategies, and building reusable architectures to deliver production-ready user experiences.",

        achievements: [
                    "Built and deployed production-ready frontend applications, optimizing build configurations, managing environment variables, and ensuring smooth release cycles.",
                    "Implemented authentication and authorization using JWT/OAuth-based workflows, protected routes, role-based access control, and secure session management.",
                    "Optimized application performance using lazy loading, code splitting, memoization, image optimization, list virtualization, and rendering best practices.",
                    "Analyzed and optimized Webpack/Vite bundles using bundle analysis tools to reduce unnecessary JavaScript and improve Core Web Vitals.",
                    "Developed and maintained unit and component tests using Jest and React Testing Library (RTL), improving application reliability and ensuring consistent UI behavior.",
                    "Improved Lighthouse performance scores by implementing bundle optimization, dynamic imports, and efficient resource loading strategies.",
                    "Integrated third-party payment solutions into web applications, enabling secure, responsive, and seamless payment experiences.",
                    "Designed and implemented scalable SEO strategies for Next.js applications, leveraging modern rendering techniques, metadata optimization, structured data, and search engine best practices.",
                    "Investigated and resolved production issues, improving application stability, responsiveness, and overall user experience.",
        ],

        technologies: [
                    {
                        name: "React",
                        icon: SiReact,
                    },
                    {
                        name: "Next.js",
                        icon: SiNextdotjs,
                    },
                    {
                        name: "TypeScript",
                        icon: SiTypescript,
                    },
                    {
                        name: "Redux Toolkit",
                        icon: SiRedux,
                    },
                    { icon: SiFusionauth, name: "Authentication/Authorization" },
                    { icon: MdPayment, name: "Payment Integration" },
                    { icon: SiReactquery, name: "React Query" },
                    { icon: SiWebpack, name: "Webpack/Babel" },
                    { icon: SiVite, name: "Vite" },
                    { icon: SiJest, name: "Jest" },
                    {
                        name: "Tailwind CSS",
                        icon: SiTailwindcss,
                    },
                ],
    },

    {
        id: "associate-software-developer",

        company: "Clover Bay Technologies",

        role: "Associate Software Developer",

        duration: {
            start: "Aug 2022",
            end: "July 2024",
        },

        current: false,

        summary: "Worked on developing production-ready frontend applications using modern JavaScript frameworks, focusing on responsive UI development, API integration, component reusability, performance optimization, and delivering high-quality features in an Agile development environment.",

        achievements: [
                "Implemented pixel-perfect, responsive web applications from Figma designs, ensuring high design fidelity, cross-browser compatibility, and excellent user experience.",
                "Designed reusable component architectures to improve maintainability, consistency, and development efficiency.",
                "Optimized application performance through lazy loading and code splitting.",
                "Selected and implemented appropriate Next.js rendering strategies (SSR, SSG, and ISR) based on application requirements to balance performance, scalability, and SEO.",
                "Integrated REST APIs and implemented robust client-side data handling for complex application workflows.",
                "Collaborated with cross-functional teams to deliver high-quality, production-ready features within Agile development cycles.",
                "Participated in code reviews, established frontend best practices, and contributed to scalable application architecture.",
        ],

        technologies: [
            {
                name: "React",
                icon: SiReact,
            },
            {
                name: "Next.js",
                icon: SiNextdotjs,
            },
            {
                name: "TypeScript",
                icon: SiTypescript,
            },
            { icon: Zap, name: "Performance Optimization" },
            { icon: AiTwotoneApi, name: "API Integration" },
            { icon: PiWebhooksLogoDuotone, name: "Web APIs" },
            {
                name: "Redux",
                icon: SiRedux,
            },
            {
                name: "Saga",
                icon: SiReduxsaga,
            },
        ],
    },
    {
        id: "software-developer-intern",

        company: "Clover Bay Technologies",

        role: "Software Developer Intern",

        duration: {
            start: "Mar 2022",
            end: "Jul 2022",
        },

        current: false,

        summary:
            "Frontend-focused Software Developer Intern skilled in building pixel-perfect, accessible user interfaces. Experienced in debugging, optimizing stability, and collaborating via Git and Jira.",

        achievements: [
            "Enhanced UI/UX.",
            "Implemented pixel-perfect and accessible designs.",
            "Resolved UI bugs to improve stability.",
        ],

        technologies: [
            {
                name: "React",
                icon: SiReact,
            },
            {
                name: "JavaScript",
                icon: TbBrandJavascript,
            },
            {
                name: "HTML5",
                icon: SiHtml5,
            },
            {
                name: "CSS3",
                icon: IoLogoCss3,
            },
            {
                name: "Ant Design",
                icon: SiAntdesign,
            },
        ],
    },
];