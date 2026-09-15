import type { IconType } from "react-icons";

export interface Technology {
    name: string;
    icon: IconType;
}

export interface Duration {
    start: string;
    end: string | null;
}

export interface Experience {
    id: string;
    company: string;
    role: string;
    duration: Duration;
    current: boolean;
    summary: string;
    achievements: string[];
    technologies: Technology[];
}