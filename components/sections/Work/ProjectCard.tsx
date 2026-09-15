
import { GlassCard } from "@/components/common";

import type { Work } from "@/types/work";

import ProjectActions from "./Actions";
import TechBadge from "../../common/TechBadge";

type ProjectCardProps = {
    project: Work;
};

export default function ProjectCard({
    project,
}: ProjectCardProps) {
    return (
        <GlassCard className="group overflow-hidden p-6">

            

            <div className="mt-6">

                <h3 className="text-2xl font-bold">
                    {project.title}
                </h3>

                <p className="mt-2 text-primary">
                    {project.subtitle}
                </p>

                <p className="mt-4 leading-7 text-muted-foreground">
                    {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <TechBadge
                            key={tech.name}
                            label={tech.name}
                            icon={tech.icon}
                        />
                    ))}
                </div>

                <ProjectActions
                    live={project.links.live}
                    // github={project.links.github}
                    projectName={project.title}
                />

            </div>

        </GlassCard>
    );
}