import { SOCIALS } from "@/content/socials";

import type { ContactSection } from "@/types/contact";

export const contactContent: ContactSection = {
    badge: "Contact",

    title: "Let's Build Something Great Together",

    description:
        "I'm always interested in discussing frontend engineering, building exceptional web experiences, collaborating on exciting projects, or exploring new opportunities. If you have an idea or a role that aligns with my experience, I'd love to hear from you.",

    availability:
        "Currently open to full-time opportunities, freelance projects, and technical collaborations.",

    actions: [
        {
            id: "email",
            label: "Email Me",
            href: "mailto:shreyanshnigam67@gmail.com",
        },
        {
            id: "resume",
            label: "Download Resume",
            href: "/resume.pdf",
        },
    ],

    socials: SOCIALS,
};