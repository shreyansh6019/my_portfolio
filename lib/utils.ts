import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes safely.
 *
 * Example:
 * cn("p-4", isActive && "bg-primary")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Clamp a value between a minimum and maximum.
 */
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Format a date using the browser locale.
 */
export function formatDate(
  value: Date | string,
  options?: Intl.DateTimeFormatOptions
) {
  const date = typeof value === "string" ? new Date(value) : value;

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
    ...options,
  }).format(date);
}

/**
 * Smooth scroll to an element.
 */
/**
 * Smoothly scrolls to a section while accounting for the fixed navbar.
 */
export function scrollToSection(id: string, offset = 80) {
  const element = document.getElementById(id);

  if (!element) return;

  const top =
    element.getBoundingClientRect().top +
    window.scrollY -
    offset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
}