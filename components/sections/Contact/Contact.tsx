import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { contactContent } from "@/content/contact";

import FadeIn from "@/components/ui/FadeIn";
import  SectionHeader  from "@/components/common/SectionHeader";
import { SectionLayout } from "@/components/common/SectionLayout";
import { GlassCard } from "@/components/common/GlassCard";

export default function Contact() {
    const {
        badge,
        title,
        description,
        availability,
        actions,
        socials,
    } = contactContent;

    return (
        <SectionLayout id="contact">
            <SectionHeader
                badge={badge}
                title={title}
                description={description}
            />

            <FadeIn>
                <GlassCard className="mt-16">
                    <div className="flex flex-col gap-10 p-8 md:p-12">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold tracking-tight">
                                {title}
                            </h3>

                            <p className="max-w-2xl leading-8 text-muted-foreground">
                                {availability}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {actions.map((action) => (
                                <Link
                                    key={action.id}
                                    href={action.href}
                                    target={
                                        action.external ? "_blank" : undefined
                                    }
                                    rel={
                                        action.external
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-primary
                    px-6
                    py-3
                    text-sm
                    font-medium
                    text-primary-foreground
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    hover:opacity-90
                  "
                                >
                                    {action.label}

                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center gap-5">
                            {socials.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <Link
                                        key={social.id}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="
                      rounded-full
                      border
                      border-border
                      p-3
                      transition-all
                      duration-300
                      hover:border-primary/40
                      hover:bg-primary/5
                    "
                                    >
                                        <Icon className="h-5 w-5" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </GlassCard>
            </FadeIn>
        </SectionLayout>
    );
}