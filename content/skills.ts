import {
    Boxes,
    Gauge,
    LayoutTemplate,
    BugOff,
    ShieldCheck,
} from "lucide-react";

import {
    SiNextdotjs,
    SiReact,
    SiRedux,
    SiTailwindcss,
    SiTypescript,
    SiRetool,
    SiReactquery,
    SiAntdesign,
    SiWebpack,
    SiVite,
    SiHtml5,
    SiEslint,
    SiPrettier,
    SiVercel,
    SiTestin,
    SiJest,
    SiReduxsaga,
    SiLazyvim,
    SiModelcontextprotocol,
} from "react-icons/si";

import { FaSquareGitlab } from "react-icons/fa6";
import { BiLogoVisualStudio } from "react-icons/bi";
import { CiMemoPad } from "react-icons/ci";
import { MdOutlineBrokenImage } from "react-icons/md";
import { FaGitSquare } from "react-icons/fa";
import { GrBundle } from "react-icons/gr";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";

import { FaGithub } from "react-icons/fa";

import type { SkillsSection } from "@/types/skills";

export const skillsContent: SkillsSection = {
    badge: "Skills",

    title: "Technologies & Engineering Practices",

    description:
        "A collection of technologies, tools, and engineering practices I use to build scalable, performant, and production-ready frontend applications.",

    categories: [
        {
            id: "frontend",

            title: "Frontend Engineering",
            icon: LayoutTemplate,
            description:
                "Modern frameworks and languages used for building interactive user interfaces.",

            skills: [
                {
                    id: "react",
                    name: "React",
                    icon: SiReact,
                },
                {
                    id: "next",
                    name: "Next.js",
                    icon: SiNextdotjs,
                },
                {
                    id: "typescript",
                    name: "TypeScript",
                    icon: SiTypescript,
                },
                {
                    id: "javascript",
                    name: "JavaScript",
                    icon: TbBrandJavascript,
                },
                {
                    id: "html",
                    name: "HTML5",
                    icon: SiHtml5,
                },
                {
                    id: "css",
                    name: "CSS3",
                    icon: IoLogoCss3,
                },
                {
                    id: "tailwind",
                    name: "Tailwind CSS",
                    icon: SiTailwindcss,
                },
                {
                    id: "antd",
                    name: "Ant Design",
                    icon: SiAntdesign,
                },
            ],
        },

        {
            id: "state",
            icon: Boxes,
            title: "State Management",

            description:
                "Managing application state efficiently across small and large-scale applications.",

            skills: [
                {
                    id: "redux-toolkit",
                    name: "Redux Toolkit",
                    icon: SiRedux,
                },
                {
                    id: "redux-saga",
                    name: "Redux Saga",
                    icon: SiReduxsaga,
                },
                {
                    id: "context-api",
                    name: "Context API",
                    icon: SiModelcontextprotocol,
                },
            ],
        },

        {
            id: "architecture",
            icon: Boxes,
            title: "Architecture",

            description:
                "Patterns and rendering strategies for scalable React and Next.js applications.",

            skills: [
                {
                    id: "ssr",
                    name: "SSR",
                },
                {
                    id: "ssg",
                    name: "SSG",
                },
                {
                    id: "isr",
                    name: "ISR",
                },
                {
                    id: "server-components",
                    name: "Server Components",
                },
                {
                    id: "client-components",
                    name: "Client Components",
                },
                {
                    id: "auth",
                    name: "Authentication/Authorization",
                },
                {
                    id: "payment-integration",
                    name: "Payment Integration",
                },
                {
                    id: "seo",
                    name: "SEO Optimization",
                },
                {
                    id: "code-splitting",
                    name: "Code Splitting",
                },
                {
                    id: "dynamic-imports",
                    name: "Dynamic Imports",
                },
            ],
        },

        {
            id: "performance",
            icon: Gauge,
            title: "Performance",

            description:
                "Optimizing frontend applications for speed, accessibility, and user experience.",

            skills: [
                {
                    id: "web-vitals",
                    name: "Web Vitals",
                    icon: Gauge,
                },
                {
                    id: "lazy-loading",
                    name: "Lazy Loading",
                    icon: SiLazyvim,
                },
                {
                    id: "image-optimization",
                    name: "Image Optimization",
                    icon: MdOutlineBrokenImage,
                },
                {
                    id: "memoization",
                    name: "Memoization",
                    icon: CiMemoPad,
                },
                {
                    id: "bundle-splitting",
                    name: "Bundle Splitting",
                    icon: GrBundle,
                },
                { id: "react_query", icon: SiReactquery, name: "React Query" },
                { id: "webpack", icon: SiWebpack, name: "Webpack/Babel" },
                { id: "vite", icon: SiVite, name: "Vite" },
            ],
        },

        {
            id: "testing",
            icon: BugOff,
            title: "Testing",

            description:
                "Writing reliable frontend tests to maintain application quality.",

            skills: [
                {
                    id: "jest",
                    name: "Jest",
                    icon: SiJest,
                },
                {
                    id: "rtl",
                    name: "React Testing Library",
                    icon: SiTestin,
                },
            ],
        },

        {
            id: "tooling",
            icon: SiRetool,
            title: "Developer Experience",

            description:
                "Daily tools that improve collaboration, code quality, and deployment.",

            skills: [
                {
                    id: "git",
                    name: "Git",
                    icon: FaGitSquare,
                },
                {
                    id: "github",
                    name: "GitHub",
                    icon: FaGithub,
                },
                {
                    id: "gitlab",
                    name: "GitLab",
                    icon: FaSquareGitlab,
                },
                {
                    id: "visual_studio",
                    name: "Visual Studio Code",
                    icon: BiLogoVisualStudio,
                },
                {
                    id: "eslint",
                    name: "ESLint",
                    icon: SiEslint
                },
                {
                    id: "prettier",
                    name: "Prettier",
                    icon: SiPrettier
                },
                {
                    id: "vercel",
                    name: "Vercel",
                    icon: SiVercel
                },
                {
                    id: "security",
                    name: "Frontend Security",
                    icon: ShieldCheck,
                },
            ],
        },
    ],
};