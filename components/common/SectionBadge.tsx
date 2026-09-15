import { cn } from "@/lib/utils";

type SectionBadgeProps = {
    children: React.ReactNode;
    className?: string;
};

export default function SectionBadge({
    children,
    className,
}: SectionBadgeProps) {
    return (
        <p
            className={cn(
                "text-sm font-semibold uppercase tracking-[0.2em] text-primary",
                className
            )}
        >
            {children}
        </p>
    );
}