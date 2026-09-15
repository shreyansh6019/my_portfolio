import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import { heroContent } from "@/content/hero";

import HeroActions from "./HeroActions";
import HeroBadge from "./HeroBadge";
import HeroTechStack from "./HeroTechStack";
import Stagger from "@/components/ui/Stagger";

export default function Hero() {
    return (
        <Section
            id="hero"
            className="relative flex min-h-[calc(100vh-64px)] items-center overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10 overflow-hidden">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_60%)]" />

                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(circle_at_center,black,transparent_90%)]" />

            </div>

            <Container>
                <Stagger>
                    <div className="mx-auto max-w-6xl text-center">
                        <HeroBadge />
                        <h1 className="mt-8 whitespace-pre-line text-5xl font-black tracking-tight md:text-7xl lg:text-8xl">
                            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                                {heroContent.heading}
                            </span>
                        </h1>
                        <p className="mt-8 text-xl font-semibold text-primary">
                            {heroContent.intro}
                        </p>
                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
                            {heroContent.description}
                        </p>
                        <HeroActions />
                        <HeroTechStack />
                    </div>
                </Stagger>
            </Container>
        </Section>
    );
}