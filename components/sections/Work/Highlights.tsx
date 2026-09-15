import { CheckCircle2 } from "lucide-react";

import type { Highlight } from "@/types/work";

type ProjectHighlightsProps = {
    highlights: Highlight[];
};

export default function ProjectHighlights({
    highlights,
}: ProjectHighlightsProps) {
    return (
        <ul className="mt-8 space-y-5">

            {highlights.map((highlight) => (
                <li
                    key={highlight.title}
                    className="flex items-start gap-3"
                >
                    <CheckCircle2
                        className="
            mt-1
            h-5
            w-5
            flex-shrink-0
            text-primary
          "
                    />

                    <div>

                        <p className="font-semibold">
                            {highlight.title}
                        </p>

                        {highlight.description && (
                            <p className="mt-1 text-sm text-muted-foreground">
                                {highlight.description}
                            </p>
                        )}

                    </div>

                </li>
            ))}

        </ul>
    );
}