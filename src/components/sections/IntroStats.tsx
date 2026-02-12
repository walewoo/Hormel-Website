"use client";

import { Container } from "../layout/Container";
import { FadeIn } from "../animations/FadeIn";

const stats = [
    {
        number: "₦50B+",
        title: "Assets Managed",
        desc: "Portfolio value under strategic advisory across Nigeria.",
    },
    {
        number: "15+",
        title: "Years of Excellence",
        desc: "Expert Real Estate Advisory Since 2009.",
    },
    {
        number: "98%",
        title: "Client Satisfaction",
        desc: "Trusted by HNWIs, Institutions & Government Bodies.",
    },
    {
        number: "200+",
        title: "Clients Served",
        desc: "Serving Diverse Clients with Professional Care.",
    },
];

export function IntroStats() {
    return (
        <>
            {/* Intro Section */}
            <section className="py-24 md:py-32 bg-white">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                        {/* Left Label */}
                        <FadeIn className="lg:col-span-2">
                            <div className="section-label">About Us</div>
                        </FadeIn>

                        {/* Right Content */}
                        <div className="lg:col-span-10 space-y-7">
                            <FadeIn delay={0.1}>
                                <h2
                                    className="text-[1.625rem] sm:text-[1.875rem] md:text-[2.25rem] lg:text-[2.625rem] font-medium leading-[1.35] text-hormel-black tracking-[-0.01em]"
                                    style={{ fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif" }}
                                >
                                    At{" "}
                                    <span className="font-display italic">Hormel</span>{" "}
                                    we've been turning investment visions into thriving portfolios since 2009, with{" "}
                                    <span className="text-hormel-black font-medium">₦50B+</span>{" "}
                                    in assets managed. We take pride in delivering tailored solutions that match your goals,
                                    risk appetite, and timeline.
                                </h2>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <p className="text-hormel-gray-500 max-w-2xl">
                                    Every successful investment begins with a thoughtful conversation. During this
                                    first stage, our team takes the time to understand your goals, preferences, and
                                    pain points — whether you're navigating diaspora investment challenges,
                                    institutional compliance requirements, or simply seeking a trusted partner for
                                    wealth preservation.
                                </p>
                            </FadeIn>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Stats Section */}
            <section className="py-4 md:py-6 bg-hormel-gray-50">
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-hormel-gray-200">
                        {stats.map((stat, index) => (
                            <FadeIn
                                key={stat.title}
                                delay={0.1 * index}
                                className="bg-hormel-gray-50 px-8 py-10 md:px-10 md:py-12"
                            >
                                <p className="text-[2.5rem] leading-[2.5rem] md:text-[3.25rem] md:leading-[3.25rem] lg:text-[4rem] lg:leading-[4rem] font-normal text-hormel-black mb-12 md:mb-16 lg:mb-20 tracking-tight">
                                    {stat.number}
                                </p>
                                <p className="font-semibold text-hormel-black text-[0.8125rem] mb-1.5 tracking-wide">
                                    {stat.title}
                                </p>
                                <p className="text-hormel-gray-500">
                                    {stat.desc}
                                </p>
                            </FadeIn>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}
