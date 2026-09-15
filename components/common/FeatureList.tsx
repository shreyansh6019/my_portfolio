import { CheckCircle2 } from "lucide-react";

type FeaturesListProps = {
    features: string[];
};

export default function FeaturesList({
    features,
}: FeaturesListProps) {
    return (
        <ul className="mt-6 space-y-3">
            {features.map((feature) => (
                <li
                    key={feature}
                    className="flex items-start gap-3"
                >
                    <CheckCircle2
                        className="
                            mt-1
                            h-5
                            w-5
                            shrink-0
                            text-primary
                        "
                    />

                    <span className="text-muted-foreground">
                        {feature}
                    </span>
                </li>
            ))}
        </ul>
    );
}