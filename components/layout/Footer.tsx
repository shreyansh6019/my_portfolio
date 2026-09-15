import Link from "next/link";

import { SOCIALS } from "@/content/socials";

export default function Footer() {
    return (
        <footer className="border-t border-border/60 py-10">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center text-sm text-muted-foreground md:flex-row lg:px-8">
                <div>
                    © {new Date().getFullYear()} Shreyansh Nigam. All rights
                    reserved.
                </div>

                <div className="flex items-center gap-5">
                    {SOCIALS.map((social) => (
                        <Link
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="transition-colors hover:text-foreground"
                        >
                            {social.icon && (
                                <social.icon className="h-5 w-5" aria-hidden="true" />
                            )}
                        </Link>
                    ))}
                </div>

                <div>
                    Built with{" "}
                    <span className="font-medium text-foreground">
                        Next.js
                    </span>
                    ,{" "}
                    <span className="font-medium text-foreground">
                        React
                    </span>
                    ,{" "}
                    <span className="font-medium text-foreground">
                        TypeScript
                    </span>{" "}
                    &{" "}
                    <span className="font-medium text-foreground">
                        Tailwind CSS
                    </span>
                </div>
            </div>
        </footer>
    );
}