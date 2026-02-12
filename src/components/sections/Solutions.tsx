"use client";

import { Container } from "../layout/Container";
import { FadeIn } from "../animations/FadeIn";
import { ArrowUpRight, ShieldCheck, Globe, Scale } from "lucide-react";

const solutions = [
    {
        title: "Inflation-Proof Portfolios",
        description:
            "We curate high-yield, recession-resistant assets specifically designed to hedge against currency devaluation and generate predictable cash flows.",
        icon: ArrowUpRight,
    },
    {
        title: "De-Risked Deal Flow",
        description:
            "Every opportunity passes our rigorous 3-tier internal audit process before it ever reaches your desk. We prioritize safety of capital above all else.",
        icon: ShieldCheck,
    },
    {
        title: "Diaspora Concierge",
        description:
            "A comprehensive, transparent end-to-end investment management service that enables Nigerians abroad to invest securely without physical presence.",
        icon: Globe,
    },
    {
        title: "Advisory-First Philosophy",
        description:
            "We are strategic advisors, not transactional brokers. We have no desperation for quick sales and will advise you to walk away if a deal doesn't fit.",
        icon: Scale,
    },
];

export function Solutions() {
    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden">
            <Container>
                <div className="mb-16">
                    <FadeIn>
                        <div className="section-label mb-6">Our Approach</div>
                    </FadeIn>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                        <FadeIn delay={0.1} className="lg:col-span-8">
                            <h2 className="text-[1.875rem] md:text-[2.75rem] lg:text-[3.25rem] font-medium tracking-[-0.02em] text-hormel-black leading-[1.1] mb-0">
                                We Bridge the Gap Between{" "}
                                <span className="text-hormel-green">Local Realities</span>{" "}
                                and Global Standards
                            </h2>
                        </FadeIn>
                        <FadeIn delay={0.2} className="lg:col-span-4 lg:pt-2">
                            <p className="text-hormel-gray-500">
                                Our approach transcends conventional real estate brokerage.
                                We engineer value through rigorous, data-driven
                                methodologies.
                            </p>
                        </FadeIn>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hormel-gray-200">
                    {solutions.map((solution, index) => (
                        <FadeIn
                            key={solution.title}
                            delay={0.1 * index}
                            className="bg-white p-10 group hover:bg-hormel-gray-50 transition-colors duration-300"
                        >
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-hormel-gray-100 flex items-center justify-center text-hormel-green-dark shrink-0 group-hover:bg-hormel-green group-hover:text-hormel-black transition-colors duration-300">
                                    <solution.icon size={22} />
                                </div>
                                <div>
                                    <h3 className="font-medium text-[1.1875rem] text-hormel-black mb-2.5">
                                        {solution.title}
                                    </h3>
                                    <p className="text-hormel-gray-500">
                                        {solution.description}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Container>
        </section>
    );
}
