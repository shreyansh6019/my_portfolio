import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import FadeIn from "@/components/ui/FadeIn";

import { aboutContent } from "@/content/about";

import AboutStory from "./Story";
import AboutChecklist from "./Highlights";
import CareerTimeline from "./Timeline";
import SectionHeader from "@/components/common/SectionHeader";
import { SectionLayout } from "@/components/common/SectionLayout";

export default function About() {
    return (
        <SectionLayout id="about">
            <div className="mx-auto max-w-6xl">
                <FadeIn>
                    <div className="text-center">
                        <SectionHeader
                            badge="About Me"
                            title={aboutContent.heading}
                        />
                    </div>
                </FadeIn>
                <div className="mt-16 grid gap-8 lg:grid-cols-2">
                    <FadeIn>
                        <AboutStory />
                    </FadeIn>

                    <FadeIn>
                        <AboutChecklist />
                    </FadeIn>
                </div>
                <FadeIn>
                    <CareerTimeline />
                </FadeIn>
            </div>
        </SectionLayout>
    );
}