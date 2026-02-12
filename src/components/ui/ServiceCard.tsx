"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "../animations/FadeIn";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
    title: string;
    description: string;
    href: string;
    imageSrc: string;
    delay?: number;
    className?: string;
    tags?: string[];
}

export function ServiceCard({
    title,
    description,
    href,
    imageSrc,
    delay = 0,
    className,
    tags = [],
}: ServiceCardProps) {
    return (
        <FadeIn delay={delay} className={cn("group relative h-full", className)}>
            <Link href={href} className="block h-full">
                <div className="relative h-full overflow-hidden bg-white border border-hormel-gray-200 transition-all duration-300 hover:border-hormel-green hover:shadow-lg">
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-hormel-black/10 z-10 transition-opacity duration-300 group-hover:opacity-0" />
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: `url(${imageSrc})` }}
                        />
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col h-[calc(100%-16rem)]">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-1 bg-hormel-gray-100 text-hormel-gray-600 text-xs font-medium uppercase tracking-wider"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h3 className="text-2xl font-bold mb-4 text-hormel-black group-hover:text-hormel-green transition-colors duration-300">
                            {title}
                        </h3>

                        <p className="text-hormel-gray-600 mb-6 flex-grow">
                            {description}
                        </p>

                        <div className="mt-auto flex items-center text-hormel-green font-semibold transition-all duration-300">
                            <span className="border-b-2 border-transparent group-hover:border-hormel-green transition-all duration-300">
                                Learn More
                            </span>
                            <ArrowRight
                                size={18}
                                className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            </Link>
        </FadeIn>
    );
}
