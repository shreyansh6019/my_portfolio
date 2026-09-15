import { experiences } from "@/content/experience";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import FadeIn from "@/components/ui/FadeIn";

import { SectionHeader } from "@/components/common";

import Timeline from "./Timeline";
import { ExperienceCard } from "./Card";
import { SectionLayout } from "@/components/common/SectionLayout";

export default function Experience() {
    return (
        <SectionLayout id="experience">
            <FadeIn>
                <SectionHeader
                    badge="Career Journey"
                    title="3+ years building scalable frontend applications."
                    description="My progression from building responsive interfaces to delivering production-grade frontend systems."
                />
            </FadeIn>
            <div className="mt-16 space-y-12">
                {experiences.map((experience, index) => (
                    <div
                        key={experience.id}
                        className="grid gap-6 md:grid-cols-[50px_1fr]"
                    >
                        <Timeline
                            current={experience.current}
                        />
                        <div>
                            {/* Experience Card */}
                            <FadeIn delay={index * 0.15}>
                                <ExperienceCard experience={experience} />
                            </FadeIn>
                        </div>
                    </div>
                ))}
            </div>
        </SectionLayout>
    );
}