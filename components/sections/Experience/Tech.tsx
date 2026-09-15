import TechBadge from "@/components/common/TechBadge";

type Props = {
    technologies: string[];
};

export default function ExperienceTech({
    technologies,
}: Props) {
    return (
        <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((tech) => (
                <TechBadge
                    key={tech}
                    label={tech}
                    // icon={tech}
                />
            ))}
        </div>
    );
}