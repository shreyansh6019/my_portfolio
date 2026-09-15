"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[]) {
    const [activeSection, setActiveSection] = useState(ids[0]);

    useEffect(() => {
        const sections = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio -
                            a.intersectionRatio
                    );
                
                console.log(entries, "Entries", ids, "Ids", sections, "Sections", visible, "Visible");
                if (visible.length > 0) {
                    setActiveSection(
                        visible[0].target.id
                    );
                }
            },
            {
                rootMargin: "-25% 0px -55% 0px",
                threshold: [0.2, 0.4, 0.6],
            }
        );

        sections.forEach((section) =>
            observer.observe(section)
        );

        return () => observer.disconnect();
    }, [ids]);

    return activeSection;
}