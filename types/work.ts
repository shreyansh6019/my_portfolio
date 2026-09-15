import type { IconType } from "react-icons";

export interface Technology {
    name: string;
    icon: IconType;
}

export interface Highlight {
    title: string;
    description?: string;
}

export interface Work {
    id: string;
    featured: boolean;

    title: string;
    subtitle: string;
    description: string;

    media: {
        type: "video";
        src: string;
    };

    technologies: Technology[];

    highlights: Highlight[];
    links: ProjectLinks;
}

export interface ProjectLinks {
    live: string;
    // github: string;
}