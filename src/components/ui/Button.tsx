import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", isLoading, children, disabled, ...props }, ref) => {
        const variants = {
            primary: "bg-hormel-green text-hormel-black hover:bg-hormel-green-dark hover:text-white border border-transparent",
            secondary: "bg-hormel-black text-white hover:bg-hormel-gray-800 border border-transparent",
            outline: "bg-transparent border-2 border-hormel-black text-hormel-black hover:bg-hormel-black hover:text-white",
            ghost: "bg-transparent text-hormel-black hover:bg-hormel-gray-100",
            link: "text-hormel-green underline-offset-4 hover:underline p-0 h-auto",
        };

        const sizes = {
            default: "h-12 px-7 py-2",
            sm: "h-10 px-5",
            lg: "h-14 px-10 text-base",
            icon: "h-10 w-10",
        };

        return (
            <button
                ref={ref}
                disabled={isLoading || disabled}
                className={cn(
                    "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hormel-green disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] text-sm tracking-wide",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
