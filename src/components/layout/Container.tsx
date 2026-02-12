import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Container({ className, children, ...props }: ContainerProps) {
    return (
        <div
            className={cn(
                "mx-auto w-full max-w-[1280px] px-6 md:px-10",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
