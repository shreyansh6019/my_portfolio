type TimelineProps = {
    current?: boolean;
};

export default function Timeline({
    current = false,
}: TimelineProps) {
    return (
        <div className="hidden md:flex flex-col items-center">

            <span
                className={`
          h-5
          w-5
          rounded-full
          border-4
          ${current
                        ? "border-primary bg-primary"
                        : "border-muted bg-background"
                    }
        `}
            />

            <div className="
                                h-full
                                w-px
                                origin-top
                                animate-pulse
                                bg-border
                            " 
            />

        </div>
    );
}