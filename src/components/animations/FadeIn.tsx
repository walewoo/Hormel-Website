"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    duration?: number;
}

export function FadeIn({
    children,
    className,
    delay = 0,
    direction = "up",
    duration = 0.5,
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const getDirectionOffset = () => {
        switch (direction) {
            case "up":
                return { y: 20 };
            case "down":
                return { y: -20 };
            case "left":
                return { x: 20 };
            case "right":
                return { x: -20 };
            case "none":
                return {};
            default:
                return { y: 20 };
        }
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, ...getDirectionOffset() }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...getDirectionOffset() }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
