import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export interface Social {
    id: string;
    label: string;
    href: string;
    icon?: LucideIcon | IconType;
}