"use client";

import { Container } from "../layout/Container";
import { FadeIn } from "../animations/FadeIn";
import Image from "next/image";

const logos = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
    "/9.png",
    "/10.png",
    "/11.png",
    "/12.png",
    "/13.png",
];

export function TrustBar() {
    return (
        <section className="py-10 border-b border-hormel-gray-200 bg-white">
            <Container className="flex flex-col md:flex-row items-center justify-between gap-8">
                <FadeIn className="shrink-0">
                    <p className="text-hormel-gray-500 text-[1.25rem] font-medium leading-snug">
                        Trusted by
                        <br />
                        Satisfied clients
                    </p>
                </FadeIn>

                <FadeIn delay={0.1} className="w-full md:w-auto md:flex-1 md:max-w-[65%] overflow-hidden relative">
                    {/* Fade edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />

                    {/* Marquee track */}
                    <div className="flex items-center gap-10 animate-marquee whitespace-nowrap">
                        {/* First set */}
                        {logos.map((src, i) => (
                            <Image
                                key={`a-${i}`}
                                src={src}
                                alt={`Client logo ${i + 1}`}
                                width={100}
                                height={40}
                                className="h-11 md:h-14 w-auto object-contain opacity-60 grayscale shrink-0"
                            />
                        ))}
                        {/* Duplicate for seamless loop */}
                        {logos.map((src, i) => (
                            <Image
                                key={`b-${i}`}
                                src={src}
                                alt={`Client logo ${i + 1}`}
                                width={100}
                                height={40}
                                className="h-11 md:h-14 w-auto object-contain opacity-60 grayscale shrink-0"
                            />
                        ))}
                    </div>
                </FadeIn>
            </Container>
        </section>
    );
}
