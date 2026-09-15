"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { NAVIGATION } from "@/constants/navigation";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { cn } from "@/lib/utils";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const scrollTo = useSmoothScroll();

    const activeSection = useScrollSpy(
        NAVIGATION.map((item) => item.id)
    );

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 12);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const handleNavigation = (id: string) => {
        setIsOpen(false);

        document.body.style.overflow = "";

        setTimeout(() => {
            scrollTo(id);
        }, 50);
    };

    return (
        <header
            className={cn(
                "fixed inset-x-0 top-0 z-50 transition-all duration-300",
                isScrolled
                    ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
                    : "bg-transparent"
            )}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
                <Link
                    href="/"
                    className="text-lg font-bold tracking-tight"
                    onClick={(e) => {
                        e.preventDefault();
                        handleNavigation("hero");
                    }}
                >
                    SN
                </Link>

                {/* Desktop */}
                <nav className="hidden items-center gap-8 md:flex">
                    {NAVIGATION.map((item) => {
                        const active = activeSection === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => handleNavigation(item.id)}
                                aria-current={active ? "page" : undefined}
                                className={cn(
                                    "relative rounded-md px-1 py-2 text-sm font-medium outline-none transition-colors",
                                    "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                                    active
                                        ? "text-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {item.label}

                                <AnimatePresence>
                                    {active && (
                                        <motion.span
                                            layoutId="navbar-indicator"
                                            className="absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-primary"
                                            transition={{
                                                type: "spring",
                                                stiffness: 450,
                                                damping: 35,
                                            }}
                                        />
                                    )}
                                </AnimatePresence>
                            </button>
                        );
                    })}
                </nav>
                <div className="hidden items-center gap-2 lg:flex">
                    <ThemeToggle />
                    <Link href="/resume">
                        Resume
                    </Link>
                </div>
                <button
                    aria-label="Toggle navigation"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="rounded-lg p-2 transition hover:bg-muted md:hidden"
                >
                    {isOpen ? (
                        <X className="h-5 w-5" />
                    ) : (
                        <Menu className="h-5 w-5" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                            duration: 0.25,
                        }}
                        className="overflow-hidden md:hidden"
                    >
                        <nav className="border-t border-border/60 bg-background/95 backdrop-blur-xl">
                            {NAVIGATION.map((item) => {
                                const active =
                                    activeSection === item.id;

                                return (
                                    <button
                                        key={item.id}
                                        onClick={() =>
                                            handleNavigation(item.id)
                                        }
                                        className={cn(
                                            "block w-full px-6 py-4 text-left text-sm font-medium transition-colors",
                                            active
                                                ? "bg-primary/10 text-primary"
                                                : "hover:bg-muted"
                                        )}
                                    >
                                        {item.label}
                                    </button>
                                );
                            })}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}