
import { GlassCard } from "@/components/common";

import type { Work } from "@/types/work";

import ProjectActions from "./Actions";
import ProjectHighlights from "./Highlights";
import TechBadge from "../../common/TechBadge";
import ViewportVideo from "@/components/common/ViewportVideo";

type FeaturedProjectProps = {
    project: Work;
};

export default function FeaturedProject({
    project,
}: FeaturedProjectProps) {
    return (
        <GlassCard className="group overflow-hidden p-6 md:p-8 lg:p-10">

            <div className="grid items-center gap-12 lg:grid-cols-2">

                <ViewportVideo
                    src={project.media.src}
                    className="h-full w-full object-contain"
                />

                <div>

                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                        Featured Project
                    </span>

                    <h3 className="mt-4 text-3xl font-bold md:text-4xl">
                        {project.title}
                    </h3>

                    <p className="mt-2 text-lg text-primary">
                        {project.subtitle}
                    </p>

                    <p className="mt-6 leading-8 text-muted-foreground">
                        {project.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {project.technologies.map((tech) => (
                            <TechBadge
                                key={tech.name}
                                label={tech.name}
                                icon={tech.icon}
                            />
                        ))}
                    </div>

                    <ProjectHighlights
                        
                        highlights={project.highlights}
                    />

                    <ProjectActions
                        live={project.links.live}
                        // github={project.links.github}
                        projectName={project.title}
                    />

                </div>

            </div>

        </GlassCard>
    );
}