"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SlideInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "left" | "right" | "up" | "down";
    duration?: number;
    viewportAmount?: number;
}

export function SlideIn({
    children,
    className,
    delay = 0,
    direction = "up",
    duration = 0.6,
    viewportAmount = 0.2,
}: SlideInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: viewportAmount });

    const variants = {
        hidden: {
            opacity: 0,
            x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
            y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: duration,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                delay: delay,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
