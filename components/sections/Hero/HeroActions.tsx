"use client";

import { Button } from "@/components/ui/button";
import { heroContent } from "@/content/hero";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function HeroActions() {
    const scrollTo = useSmoothScroll();
    const handleNavigation = (id: string) => {
        document.body.style.overflow = "";

        setTimeout(() => {
            scrollTo(id);
        }, 50);
    };
    return (
        <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Button size="lg"
                className="px-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                onClick={(e)=>{
                    e.preventDefault();
                    handleNavigation("work")
                }}
            >
                {heroContent.primaryCTA.label}
            </Button>

            <Button
                size="lg"
                variant="outline"
                className="px-8 transition-all duration-300 hover:-translate-y-1"
                onClick={(e)=>{
                    e.preventDefault();
                    handleNavigation("contact")
                }}
            >
                {heroContent.secondaryCTA.label}
            </Button>
        </div>
    );
}