"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingElementProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    yOffset?: number;
}

export function FloatingElement({
    children,
    className,
    delay = 0,
    duration = 4,
    yOffset = 15,
}: FloatingElementProps) {
    return (
        <motion.div
            animate={{
                y: [0, -yOffset, 0],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: delay,
            }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
