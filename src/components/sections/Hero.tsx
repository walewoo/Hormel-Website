"use client";

import Link from "next/link";
import { Container } from "../layout/Container";
import { FadeIn } from "../animations/FadeIn";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden flex items-end pb-12 md:pb-20">
            {/* Background image */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('/images/hero-lagos-skyline.jpg')`,
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30" />
            </div>

            <Container className="relative z-10 w-full">
                <div className="max-w-4xl space-y-7">
                    <FadeIn delay={0.2}>
                        <h1
                            className="text-4xl leading-[1.1] sm:text-5xl sm:leading-[1.1] md:text-[3.75rem] md:leading-[1.1] lg:text-[4.5rem] lg:leading-[71px] font-semibold text-white tracking-[-0.02em]"
                        >
                            Bringing Life to
                            <br />
                            Legacy &{" "}
                            <span className="font-display italic font-normal">Real Estate</span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <p className="text-sm leading-5 md:text-base md:leading-6 text-white max-w-lg">
                            Expert Asset Management & Real Estate Advisory, Customized to Suit
                            Your Investment Goals — Because Every Portfolio Deserves Expert Care.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-start gap-5 pt-3">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2.5 bg-hormel-green text-hormel-black px-7 py-3 font-semibold text-sm leading-5 md:text-base md:leading-6 tracking-wide hover:bg-white transition-colors duration-200"
                        >
                            Get In Touch
                            <ArrowRight size={15} strokeWidth={2.5} />
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-white font-medium text-sm leading-5 md:text-base md:leading-6 border-b border-white/40 pb-0.5 hover:border-white transition-colors duration-200"
                        >
                            Explore Services
                            <ArrowRight size={15} strokeWidth={2} />
                        </Link>
                    </FadeIn>
                </div>
            </Container>
        </section>
    );
}
