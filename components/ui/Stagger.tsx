"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

import { staggerContainer } from "@/lib/animations";

type Props = {
    children: ReactNode;
};

export default function Stagger({
    children,
}: Props) {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
        >
            {children}
        </motion.div>
    );
}