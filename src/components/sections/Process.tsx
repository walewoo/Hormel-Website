"use client";

import { Container } from "../layout/Container";
import { FadeIn } from "../animations/FadeIn";
import { PhoneCall, Search, FileCheck, Landmark, BarChart3 } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Discovery Call",
        description:
            "We understand your investment objectives, risk tolerance, and timeline.",
        icon: PhoneCall,
    },
    {
        number: "02",
        title: "Opportunity Curation",
        description:
            "We source vetted properties that strictly match your investment criteria.",
        icon: Search,
    },
    {
        number: "03",
        title: "Due Diligence",
        description:
            "Comprehensive legal, technical, and commercial assessment of assets.",
        icon: FileCheck,
    },
    {
        number: "04",
        title: "Execution",
        description:
            "Seamless acquisition process with full documentation and compliance.",
        icon: Landmark,
    },
    {
        number: "05",
        title: "Ongoing Management",
        description:
            "Active asset management and reporting to ensure performance.",
        icon: BarChart3,
    },
];

export function Process() {
    return (
        <section className="py-24 md:py-32 bg-hormel-gray-50 overflow-hidden">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <FadeIn>
                        <div className="section-label justify-center mx-auto w-fit mb-6">
                            Process
                        </div>
                        <h2 className="text-[1.875rem] md:text-[2.75rem] lg:text-[3.25rem] font-medium mb-5 tracking-[-0.02em] text-hormel-black leading-[1.1]">
                            Your Path to{" "}
                            <span className="font-display italic">Secure Ownership</span>
                        </h2>
                        <p className="text-hormel-gray-500">
                            A transparent, structured approach to real estate
                            investment that eliminates guesswork and minimizes risk.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0">
                    {steps.map((step, index) => (
                        <FadeIn
                            key={step.number}
                            delay={index * 0.1}
                            className="relative group"
                        >
                            <div className="p-8 border border-hormel-gray-200 bg-white h-full hover:bg-hormel-black hover:text-white hover:border-hormel-black transition-all duration-300 group">
                                <div className="text-[2rem] font-medium text-hormel-black mb-4 leading-none group-hover:text-white transition-colors duration-300">
                                    {step.number}
                                </div>

                                <h3 className="text-[1rem] font-medium mb-2.5">
                                    {step.title}
                                </h3>
                                <p className="text-hormel-gray-500 group-hover:text-hormel-gray-400 transition-colors duration-300">
                                    {step.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Container>
        </section>
    );
}
