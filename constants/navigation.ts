export const NAVIGATION = [
    {
        id: "about",
        label: "About",
        href: "#about",
    },
    {
        id: "work",
        label: "Work",
        href: "#work",
    },
    {
        id: "experience",
        label: "Experience",
        href: "#experience",
    },
    {
        id: "skills",
        label: "Skills",
        href: "#skills",
    },
    {
        id: "contact",
        label: "Contact",
        href: "#contact",
    },
] as const;

export type NavigationItem = (typeof NAVIGATION)[number];