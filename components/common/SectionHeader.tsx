import SectionBadge from "./SectionBadge";

type Props = {
    badge: string;
    title: string;
    description?: string;
};

export default function SectionHeader({
    badge,
    title,
    description,
}: Props) {
    return (
        <div className="mx-auto max-w-3xl text-center">
            <SectionBadge>{badge}</SectionBadge>

            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
                {title}
            </h2>

            {description && (
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    {description}
                </p>
            )}
        </div>
    );
}