"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[]) {
    const [activeSection, setActiveSection] =
        useState<string | null>(null);

    useEffect(() => {
        const sections = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        if (!sections.length) return;

        let ticking = false;

        const updateActiveSection = () => {
            const triggerPoint =
                window.innerHeight * 0.35;

            let currentSection: HTMLElement | null =
                null;

            for (const section of sections) {
                const { top } =
                    section.getBoundingClientRect();

                if (top <= triggerPoint) {
                    currentSection = section;
                } else {
                    break;
                }
            }

            setActiveSection(
                currentSection?.id ?? null
            );

            ticking = false;
        };

        const handleScroll = () => {
            if (ticking) return;

            ticking = true;

            window.requestAnimationFrame(
                updateActiveSection
            );
        };

        updateActiveSection();

        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        window.addEventListener(
            "resize",
            handleScroll
        );

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );

            window.removeEventListener(
                "resize",
                handleScroll
            );
        };
    }, [ids]);

    return activeSection;
}