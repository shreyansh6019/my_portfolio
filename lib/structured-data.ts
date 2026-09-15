import type { WithContext, Person } from "schema-dts";

import { siteConfig } from "@/config/sitemap";

export const personStructuredData: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: siteConfig.title,
    description: siteConfig.description,
    email: siteConfig.email,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    sameAs: [
        siteConfig.links.github,
        siteConfig.links.linkedin,
    ],
};