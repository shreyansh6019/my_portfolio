import Image from "next/image";

type BrowserFrameProps = {
    src: string;
    alt: string;
    priority?: boolean;
};

export default function BrowserFrame({
    src,
    alt,
    priority = false,
}: BrowserFrameProps) {
    return (
        <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-xl">

            <div className="flex items-center gap-2 border-b border-border bg-muted/60 px-4 py-3">

                <span className="h-3 w-3 rounded-full bg-red-500" />

                <span className="h-3 w-3 rounded-full bg-yellow-500" />

                <span className="h-3 w-3 rounded-full bg-green-500" />

            </div>

            <div className="group overflow-hidden">

                <Image
                    src={src}
                    alt={alt}
                    width={1600}
                    height={900}
                    priority={priority}
                    className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
                />

            </div>

        </div>
    );
}