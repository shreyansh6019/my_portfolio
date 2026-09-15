import {
    Mail,
    FileText,
} from "lucide-react";

import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import type { Social } from "@/types/socials";

export const SOCIALS: Social[] = [
    {
        id: "github",
        label: "GitHub",
        href: "https://github.com/shreyansh6019",
        icon: FaGithub,
    },
    {
        id: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/shreyansh-nigam-210915235/",
        icon: FaLinkedin,
    },
    {
        id: "resume",
        label: "Resume",
        href: "/resume.pdf",
        icon: FileText,
    },
    {
        id: "email",
        label: "Email",
        href: "mailto:shreyanshnigam67@gmail.com",
        icon: Mail,
    },
];