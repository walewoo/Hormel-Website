"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface StaggerContainerProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    staggerChildren?: number;
    viewportAmount?: number;
}

export function StaggerContainer({
    children,
    className,
    delay = 0,
    staggerChildren = 0.1,
    viewportAmount = 0.2,
}: StaggerContainerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: viewportAmount });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={{
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: {
                        delayChildren: delay,
                        staggerChildren: staggerChildren,
                    },
                },
            }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
