import React from "react";
import { cn } from "@/lib/utils";

interface DiagonalDividerProps {
    position?: "top" | "bottom";
    angle?: "left" | "right";
    className?: string;
    color?: string;
    height?: number;
}

export function DiagonalDivider({
    position = "bottom",
    angle = "right",
    className,
    color = "fill-white",
    height = 60,
}: DiagonalDividerProps) {
    return (
        <div
            className={cn(
                "absolute left-0 w-full overflow-hidden leading-none z-10",
                position === "top" ? "top-0 transform -translate-y-full" : "bottom-0 transform translate-y-full",
                className
            )}
            style={{ height: `${height}px` }}
        >
            <svg
                className={cn("block w-full h-full", color)}
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
            >
                <path
                    d={
                        angle === "right"
                            ? "M1200 120L0 16.48 0 0 1200 0 1200 120z"
                            : "M0 120L1200 16.48 1200 0 0 0 0 120z"
                    }
                    className={color}
                />
            </svg>
        </div>
    );
}
