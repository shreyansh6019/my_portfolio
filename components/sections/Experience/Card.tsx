import {
    BriefcaseBusiness,
    Building2,
    CalendarDays,
} from "lucide-react";

import type { Experience } from "@/types/experience";

import { GlassCard } from "@/components/common/GlassCard";
import FeatureList from "@/components/common/FeatureList";

interface ExperienceCardProps {
    experience: Experience;
}

export function ExperienceCard({
    experience,
}: ExperienceCardProps) {
    const {
        company,
        role,
        summary,
        duration,
        current,
        achievements,
        technologies,
    } = experience;

    return (
        <GlassCard
            className={
                current
                    ? "border-primary/40"
                    : undefined
            }
        >
            <div className="space-y-8 p-6 md:p-8">
                {/* Header */}

                <div className="flex flex-col justify-between gap-6 lg:flex-row">
                    <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                            <div className="flex items-center gap-2">
                                <BriefcaseBusiness className="h-5 w-5 text-primary" />

                                <h3 className="text-2xl font-semibold tracking-tight">
                                    {role}
                                </h3>
                            </div>

                            {current && (
                                <span
                                    aria-label="Current Position"
                                    className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                                >
                                    <span className="h-2 w-2 rounded-full bg-primary" />
                                    Current
                                </span>
                            )}
                        </div>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Building2 className="h-4 w-4" />
                                {company}
                            </div>

                            <div className="flex items-center gap-2">
                                <CalendarDays className="h-4 w-4" />

                                {duration.start}
                                {" – "}
                                {duration.end ?? "Present"}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Summary */}

                <p className="max-w-3xl leading-8 text-muted-foreground">
                    {summary}
                </p>

                {/* Achievements */}

                <FeatureList
                    features={achievements}
                />

                {/* Technologies */}

                <div className="flex flex-wrap gap-3">
                    {technologies.map((technology) => {
                        const Icon = technology.icon;

                        return (
                            <div
                                key={technology.name}
                                className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1.5 text-sm font-medium"
                            >
                                {Icon && (
                                    <Icon
                                        className="h-4 w-4"
                                        style={{
                                            color: "inherit",
                                        }}
                                    />
                                )}

                                <span>{technology.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </GlassCard>
    );
}