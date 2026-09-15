
import { SectionHeader } from "@/components/common";

import FadeIn from "@/components/ui/FadeIn";

import { work } from "@/content/work";

import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import { SectionLayout } from "@/components/common/SectionLayout";

export default function Work() {
    const featuredProject = work.filter(
        (project) => project.featured
    );

    const projects = work.filter(
        (project) => !project.featured
    );

    return (
        <SectionLayout id="work">
            <FadeIn>
                <SectionHeader
                    badge="Selected Work"
                    title="Building production-grade frontend applications."
                    description="A collection of projects showcasing scalable architecture, reusable components, accessibility, and performance-focused development."
                />
            </FadeIn>
            {featuredProject && (
                <div className="mt-16 grid gap-8">
                    {featuredProject.map((project) => (
                        <FadeIn key={project.id}>
                            <FeaturedProject project={project} />
                        </FadeIn>
                    ))}
                </div>
            )}
            {projects.length > 0 && (
                <div className="mt-16 grid gap-8 lg:grid-cols-2">
                    {projects.map((project) => (
                        <FadeIn
                            key={project.id}
                        >
                            <ProjectCard
                                project={project}
                            />
                        </FadeIn>
                    ))}
                </div>
            )}
        </SectionLayout>
    );
}