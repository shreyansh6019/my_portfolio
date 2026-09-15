import type { SkillCategory } from "@/types/skills";

import { GlassCard } from "@/components/common/GlassCard";

interface SkillCardProps {
    category: SkillCategory;
}

export function SkillCard({
    category,
}: SkillCardProps) {
    return (
        <GlassCard className="h-full">
            <div className="space-y-6 p-6 md:p-8">
                <div className="flex items-start gap-4">
                    {category.icon && (
                        <div className="rounded-xl bg-primary/10 p-3">
                            <category.icon
                                aria-hidden="true"
                                className="h-5 w-5 text-primary"
                            />
                        </div>
                    )}

                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold tracking-tight">
                            {category.title}
                        </h3>

                        <p className="text-sm leading-7 text-muted-foreground">
                            {category.description}
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => {
                        const Icon = skill.icon;

                        return (
                            <div
                                key={skill.id}
                                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-border
                  bg-muted/40
                  px-3
                  py-2
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  hover:border-primary/40
                  hover:bg-primary/5
                "
                            >
                                {Icon && (
                                    <Icon
                                        className="h-4 w-4 text-primary"
                                    />
                                )}

                                <span>{skill.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </GlassCard>
    );
}