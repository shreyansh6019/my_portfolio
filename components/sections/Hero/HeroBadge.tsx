import { Badge } from "@/components/ui/badge";
import { heroContent } from "@/content/hero";

export default function HeroBadge() {
    return (
        <Badge
            variant="secondary"
            className="rounded-full px-5 py-1 text-sm font-medium"
        >
            🟢 {heroContent.badge}
        </Badge>
    );
}