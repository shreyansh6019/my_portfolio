import type { IconType } from "react-icons";

type TechBadgeProps = {
    label: string;
    icon?: IconType;
};

export default function TechBadge({
    label,
    icon: Icon,
}: TechBadgeProps) {
    return (
        <span
            className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-border/60
                bg-background/70
                px-3
                py-1.5
                text-sm
                font-medium
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-primary/40
                hover:-translate-y-0.5
            "
        >
            {Icon && <Icon className="h-4 w-4 text-primary" />}

            {label}
        </span>
    );
}