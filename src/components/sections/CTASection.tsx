"use client";

import Link from "next/link";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { FadeIn } from "../animations/FadeIn";

export function CTASection() {
    return (
        <section className="py-24 md:py-32 bg-hormel-green relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.04]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `repeating-linear-gradient(
                            45deg,
                            transparent,
                            transparent 40px,
                            #000 40px,
                            #000 41px
                        )`,
                    }}
                />
            </div>

            <Container className="relative z-10 text-center">
                <FadeIn>
                    <h2 className="text-[2rem] md:text-[2.75rem] lg:text-[3.5rem] font-medium mb-7 text-hormel-black tracking-[-0.02em] max-w-4xl mx-auto leading-[1.1]">
                        Get Started <span className="font-display italic">with Us</span>
                    </h2>
                    <p className="text-hormel-black/60 mb-10 max-w-2xl mx-auto">
                        Schedule a complimentary consultation with our advisory
                        team to discuss your investment goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button
                                size="lg"
                                className="bg-hormel-black text-white hover:bg-hormel-gray-800 border-none w-full sm:w-auto"
                            >
                                Get In Touch
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-hormel-black text-hormel-black hover:bg-hormel-black hover:text-white w-full sm:w-auto"
                            >
                                Explore Services
                            </Button>
                        </Link>
                    </div>
                </FadeIn>
            </Container>
        </section>
    );
}
