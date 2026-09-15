import { aboutContent } from "@/content/about";

export default function CareerTimeline() {
    return (
        <div className="mt-16 rounded-2xl border bg-background/70 p-8 backdrop-blur">
            <h3 className="text-2xl font-bold">
                Career Journey
            </h3>

            <div className="mt-10 space-y-8">
                {aboutContent.timeline.map((item) => (
                    <div
                        key={item.title}
                        className="flex gap-6"
                    >
                        <div className="w-20 shrink-0 font-semibold text-primary">
                            {item.year}
                        </div>

                        <div>
                            <h4 className="font-semibold">
                                {item.title}
                            </h4>

                            <p className="mt-2 text-muted-foreground">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}