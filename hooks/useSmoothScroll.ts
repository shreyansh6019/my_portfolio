"use client";

import { useCallback } from "react";

import { scrollToSection } from "@/lib/utils";

export function useSmoothScroll() {
    return useCallback((id: string) => {
        scrollToSection(id);
    }, []);
}