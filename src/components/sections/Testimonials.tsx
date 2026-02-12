"use client";

import { Container } from "../layout/Container";
import { FadeIn } from "../animations/FadeIn";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Hormel transformed how we approach Nigerian real estate. Their due diligence rigor is unmatched in the local market.",
        author: "Tunde A.",
        role: "Institutional Investor",
    },
    {
        quote: "As a diaspora investor, Hormel gave me complete peace of mind with monthly reporting and professional management.",
        author: "Sarah O.",
        role: "UK-Based Doctor",
    },
    {
        quote: "Their advisory-first approach meant they actually advised us NOT to pursue deals that wouldn't serve our interests. That's integrity.",
        author: "Chief Williams",
        role: "Family Office Principal",
    },
];

export function Testimonials() {
    return (
        <section className="py-24 md:py-32 bg-white">
            <Container>
                <FadeIn className="text-center max-w-3xl mx-auto mb-16">
                    <div className="section-label justify-center mx-auto w-fit mb-6">
                        Testimonials
                    </div>
                    <h2 className="text-[1.875rem] md:text-[2.75rem] lg:text-[3.25rem] font-medium mb-5 tracking-[-0.02em] text-hormel-black leading-[1.1]">
                        Trusted by{" "}
                        <span className="font-display italic text-hormel-black">Visionaries</span>
                    </h2>
                    <p className="text-hormel-gray-500">
                        We've built our reputation on helping our clients build
                        theirs.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hormel-gray-200">
                    {testimonials.map((item, index) => (
                        <FadeIn
                            key={index}
                            delay={index * 0.15}
                            className="bg-white p-10 flex flex-col hover:bg-hormel-gray-50 transition-colors duration-300"
                        >
                            <div className="text-hormel-green mb-5">
                                <Quote size={28} />
                            </div>
                            <p className="italic text-[1.0625rem] text-hormel-gray-700 leading-[1.65] mb-8 flex-grow">
                                &ldquo;{item.quote}&rdquo;
                            </p>
                            <div className="flex items-center gap-4 pt-5 border-t border-hormel-gray-100">
                                <div className="w-9 h-9 bg-hormel-gray-200 flex items-center justify-center text-hormel-black font-bold text-[0.75rem]">
                                    {item.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-medium text-hormel-black text-[0.8125rem]">
                                        {item.author}
                                    </h4>
                                    <p className="text-[0.6875rem] text-hormel-gray-500 uppercase tracking-[0.08em] font-medium">
                                        {item.role}
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
