import { type ViewportOptions } from "framer-motion";

export const ANIMATION = {
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
  },

  delay: {
    none: 0,
    sm: 0.1,
    md: 0.2,
    lg: 0.3,
  },

  stagger: {
    fast: 0.08,
    normal: 0.12,
    slow: 0.18,
  },
} as const;

export const VIEWPORT: ViewportOptions = {
  once: true,
  amount: 0.2,
};