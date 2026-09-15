import Link from "next/link";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/content/hero";

export default function HeroActions() {
    return (
        <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Button size="lg"
                className="px-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                asChild>
                <Link href={heroContent.primaryCTA.href}>
                    {heroContent.primaryCTA.label}
                </Link>
            </Button>

            <Button
                size="lg"
                variant="outline"
                className="px-8 transition-all duration-300 hover:-translate-y-1"
                asChild
            >
                <Link href={heroContent.secondaryCTA.href}>
                    {heroContent.secondaryCTA.label}
                </Link>
            </Button>
        </div>
    );
}