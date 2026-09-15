import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export interface Skill {
    id: string;
    name: string;
    icon?: LucideIcon | IconType;
}

export interface SkillCategory {
    id: string;
    title: string;
    description: string;
    icon?: LucideIcon | IconType;
    skills: Skill[];
}

export interface SkillsSection {
    badge: string;
    title: string;
    description: string;
    categories: SkillCategory[];
}