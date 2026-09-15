"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useSyncExternalStore } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const mounted = useSyncExternalStore(
        () => () => {},
        () => true,
        () => false,
    );

    if (!mounted) return null;

    return (
        <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
            }
            className="cursor-pointer"
        >
            {theme === "dark" ? (
                <Sun className="h-5 w-5" />
            ) : (
                <Moon className="h-5 w-5" />
            )}
        </Button>
    );
}