"use client";

import { cn } from "@/lib/utils";
import { FadeIn } from "../animations/FadeIn";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
    className?: string;
    light?: boolean;
}

export function SectionHeader({
    title,
    subtitle,
    centered = false,
    className,
    light = false,
}: SectionHeaderProps) {
    return (
        <FadeIn className={cn("mb-12 md:mb-16", centered && "text-center", className)}>
            <h2
                className={cn(
                    "text-[1.875rem] md:text-[2.75rem] lg:text-[3.25rem] font-medium tracking-[-0.02em] mb-5 leading-[1.1]",
                    light ? "text-white" : "text-hormel-black"
                )}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className={cn(
                        "max-w-2xl",
                        centered && "mx-auto",
                        light ? "text-hormel-gray-400" : "text-hormel-gray-500"
                    )}
                >
                    {subtitle}
                </p>
            )}
        </FadeIn>
    );
}
