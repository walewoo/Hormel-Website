"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { HardHat, ClipboardCheck, DollarSign, Shield } from "lucide-react";

export default function ConstructionPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-32 bg-hormel-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/nigerian-construction-site.jpg')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-hormel-black via-transparent to-transparent" />

                <Container className="relative z-10">
                    <div className="section-label mb-6">Capability</div>
                    <SectionHeader
                        title="Construction Management"
                        subtitle="End-to-end project delivery with institutional-grade oversight, cost management, and quality assurance."
                        light
                        className="max-w-4xl"
                    />
                </Container>
            </section>

            {/* Core Services */}
            <section className="py-20 md:py-32">
                <Container>
                    <div className="section-label mb-6">What We Deliver</div>
                    <SectionHeader
                        title="Full-Cycle Project Management"
                        subtitle="From concept to completion, we ensure every phase meets the highest standards."
                        className="mb-16"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hormel-gray-200">
                        {[
                            {
                                icon: HardHat,
                                title: "Project Delivery",
                                desc: "End-to-end management of construction projects, ensuring timely delivery, budget adherence, and quality standards that meet institutional expectations.",
                            },
                            {
                                icon: ClipboardCheck,
                                title: "Quality Assurance",
                                desc: "Rigorous inspection protocols and quality control frameworks that ensure every aspect of construction meets or exceeds industry standards.",
                            },
                            {
                                icon: DollarSign,
                                title: "Cost Management",
                                desc: "Transparent cost tracking and budget optimization through value engineering, competitive procurement, and real-time financial reporting.",
                            },
                            {
                                icon: Shield,
                                title: "Risk Mitigation",
                                desc: "Proactive identification and management of project risks through comprehensive planning, insurance frameworks, and contingency protocols.",
                            },
                        ].map((service, index) => (
                            <FadeIn
                                key={service.title}
                                delay={0.1 * index}
                                className="bg-white p-10 group hover:bg-hormel-gray-50 transition-colors duration-300"
                            >
                                <div className="w-14 h-14 bg-hormel-black flex items-center justify-center text-white mb-6 group-hover:bg-hormel-green group-hover:text-hormel-black transition-colors duration-300">
                                    <service.icon size={28} />
                                </div>
                                <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                                <p className="text-hormel-gray-600">{service.desc}</p>
                            </FadeIn>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-24 bg-hormel-green">
                <Container className="text-center">
                    <h2 className="text-3xl md:text-5xl font-medium mb-8 text-hormel-black max-w-3xl mx-auto">
                        Build with confidence and institutional-grade oversight.
                    </h2>
                    <Link href="/contact">
                        <Button size="lg" className="bg-hormel-black text-white hover:bg-hormel-gray-800 border-none">
                            Discuss Your Project
                        </Button>
                    </Link>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
