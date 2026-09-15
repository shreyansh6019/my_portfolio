import type { Social } from "@/types/socials";

export interface ContactAction {
    id: string;
    label: string;
    href: string;
    external?: boolean;
}

export interface ContactSection {
    badge: string;
    title: string;
    description: string;
    availability: string;
    actions: ContactAction[];
    socials: Social[];
}