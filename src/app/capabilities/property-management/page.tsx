"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { KeyRound, Wrench, BarChart3, Users } from "lucide-react";

export default function PropertyManagementPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-32 bg-hormel-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/nigerian-commercial-property.jpg')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-hormel-black via-transparent to-transparent" />

                <Container className="relative z-10">
                    <div className="section-label mb-6">Capability</div>
                    <SectionHeader
                        title="Property Management"
                        subtitle="Ensuring real estate assets deliver sustained value through professional operations and tenant satisfaction."
                        light
                        className="max-w-4xl"
                    />
                </Container>
            </section>

            {/* Core Services */}
            <section className="py-20 md:py-32">
                <Container>
                    <div className="section-label mb-6">Our Services</div>
                    <SectionHeader
                        title="Comprehensive Asset Operations"
                        subtitle="From tenant relations to facility maintenance, we protect and grow your asset value."
                        className="mb-16"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hormel-gray-200">
                        {[
                            {
                                icon: KeyRound,
                                title: "Tenant Management",
                                desc: "Professional tenant screening, lease administration, and relationship management that ensures high occupancy rates and reliable income streams.",
                            },
                            {
                                icon: Wrench,
                                title: "Facility Maintenance",
                                desc: "Preventive and responsive maintenance programs that preserve asset condition, extend building lifecycle, and minimize capital expenditure surprises.",
                            },
                            {
                                icon: BarChart3,
                                title: "Financial Reporting",
                                desc: "Transparent monthly and quarterly reporting on rental income, operating expenses, occupancy metrics, and asset performance benchmarking.",
                            },
                            {
                                icon: Users,
                                title: "Vendor Coordination",
                                desc: "Competitive procurement and management of service providers including security, cleaning, landscaping, and specialized technical services.",
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
                        Maximize your asset's potential with professional management.
                    </h2>
                    <Link href="/contact">
                        <Button size="lg" className="bg-hormel-black text-white hover:bg-hormel-gray-800 border-none">
                            Get a Management Proposal
                        </Button>
                    </Link>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
