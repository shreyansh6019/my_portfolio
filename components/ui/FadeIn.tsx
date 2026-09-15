"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

import { fadeUp } from "@/lib/animations";

type FadeInProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
};

export default function FadeIn({
    children,
    className,
    delay
}: FadeInProps) {
    return (
        <motion.div
            variants={fadeUp as any}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.25,
            }}
            
            className={className}
        >
            {children}
        </motion.div>
    );
}