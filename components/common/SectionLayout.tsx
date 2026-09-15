import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionLayoutProps
    extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
}

export function SectionLayout({
    children,
    className,
    ...props
}: SectionLayoutProps) {
    return (
        <section
            className={cn(
                "scroll-mt-24 py-10 md:py-12",
                className
            )}
            {...props}
        >
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
}