import Link from "next/link";

import { GlassCard } from "@/components/common/GlassCard";
import { Home } from "lucide-react";

export default function NotFound() {
    return (
        <main className="flex min-h-[100svh] items-center justify-center px-6 py-24">
            <div className="mx-auto w-full max-w-2xl">
                <GlassCard>
                    <div className="flex flex-col items-center space-y-8 p-8 text-center md:p-12">
                        <div className="space-y-3">
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                                Error 404
                            </p>

                            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
                                Page Not Found
                            </h1>

                            <p className="mx-auto max-w-lg text-lg leading-8 text-muted-foreground">
                                The page you&apos;re looking for doesn&apos;t exist, may have been moved,
                                or the URL might be incorrect.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
                            >
                                <Home className="h-4 w-4" />
                                Back to Home
                            </Link>

                            <Link
                                href="/#work"
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-medium transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
                            >
                                View My Work
                            </Link>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </main>
    );
}