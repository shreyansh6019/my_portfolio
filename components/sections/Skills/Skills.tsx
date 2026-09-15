import { skillsContent } from "@/content/skills";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "../../common/SectionHeader";
import { SectionLayout } from "../../common/SectionLayout";

import { SkillCard } from "./Card";

export default function Skills() {
    const {
        badge,
        title,
        description,
        categories,
    } = skillsContent;

    return (
        <SectionLayout id="skills">
            <SectionHeader
                badge={badge}
                title={title}
                description={description}
            />

            <div className="mt-16 grid gap-8 md:grid-cols-2">
                {categories.map((category, index) => (
                    <FadeIn
                        key={category.id}
                        delay={index * 0.1}
                    >
                        <SkillCard category={category} />
                    </FadeIn>
                ))}
            </div>
        </SectionLayout>
    );
}