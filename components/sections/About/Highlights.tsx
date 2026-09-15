import { CheckCircle2 } from "lucide-react";
import { aboutContent } from "@/content/about";
import {GlassCard} from "@/components/common/GlassCard";

export default function AboutChecklist() {
    return (
        <GlassCard className="p-8">
            <h3 className="text-2xl font-bold">
                What I Bring
            </h3>

            <div className="mt-6 space-y-4">
                {aboutContent.highlights.map((item) => (
                    <div
                        key={item}
                        className="flex items-center gap-3"
                    >
                        <CheckCircle2 className="h-5 w-5 text-primary" />

                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </GlassCard>
    );
}