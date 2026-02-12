"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { TrendingUp, Globe, ShieldCheck, Users } from "lucide-react";

export default function PrivateWealthPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-32 bg-hormel-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/nigerian-wealth-advisory.jpg')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-hormel-black via-hormel-black/80 to-transparent" />

                <Container className="relative z-10">
                    <div className="section-label mb-6">Division I</div>
                    <SectionHeader
                        title="Private Wealth & Diaspora Advisory"
                        subtitle="Wealth architectures designed for intergenerational transfer and protection against economic volatility."
                        light
                        className="max-w-4xl"
                    />
                </Container>
            </section>

            {/* Strategic Focus */}
            <section className="py-20">
                <Container>
                    <div className="bg-hormel-gray-50 border border-hormel-gray-200 p-8 md:p-12 -mt-20 relative z-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-medium mb-4 text-hormel-black">
                                    Target Clientele
                                </h3>
                                <ul className="space-y-3 mb-8">
                                    {["High-Net-Worth Individuals (HNWIs)", "Diaspora Investors", "Family Offices"].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-hormel-gray-600">
                                            <div className="w-2 h-2 bg-hormel-green" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <h3 className="text-2xl font-medium mb-4 text-hormel-black">
                                    Strategic Focus
                                </h3>
                                <p className="text-hormel-gray-600">
                                    Wealth Preservation, Inflation Hedging &
                                    Legacy Building. For our private clients,
                                    real estate represents more than property —
                                    it is a vehicle for intergenerational wealth
                                    transfer.
                                </p>
                            </div>
                            <div className="bg-hormel-black p-8 text-white">
                                <h4 className="font-bold text-lg mb-4 text-hormel-green">
                                    Why This Matters
                                </h4>
                                <p className="text-hormel-gray-400 mb-6">
                                    "We serve as wealth architects, curating
                                    portfolios that deliver both capital
                                    preservation and consistent income
                                    generation."
                                </p>
                                <Link href="/contact">
                                    <Button size="sm">
                                        Schedule a Strategy Session
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Core Services */}
            <section className="py-20 md:py-32">
                <Container>
                    <div className="section-label mb-6">Core Services</div>
                    <SectionHeader
                        title="Comprehensive Solutions"
                        subtitle="Tailored for private wealth preservation."
                        className="mb-16"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hormel-gray-200">
                        {[
                            {
                                icon: TrendingUp,
                                title: "Inflation-Proof Portfolio Construction",
                                desc: "We curate high-yield, recession-resistant assets specifically designed to hedge against currency devaluation and generate predictable cash flows. Our focus areas include Purpose-Built Student Accommodation (PBSA), premium short-let apartments, and commercial properties with long-term anchor tenants.",
                            },
                            {
                                icon: Globe,
                                title: "Diaspora Investment Concierge",
                                desc: "A comprehensive, transparent end-to-end investment management service that enables Nigerians abroad to invest securely without physical presence. We handle every aspect from initial opportunity identification and title verification to property acquisition and documentation.",
                            },
                            {
                                icon: ShieldCheck,
                                title: "Strategic Asset Management",
                                desc: "We don't simply hand over keys — we actively manage your investment to ensure it remains a performing asset. Our services include proactive tenant management, preventive maintenance scheduling, rental income optimization, and strategic repositioning recommendations.",
                            },
                            {
                                icon: Users,
                                title: "Family Office Real Estate Services",
                                desc: "For ultra-high-net-worth families, we provide bespoke portfolio management services including estate consolidation, legacy planning, and multi-generational wealth structuring through real estate vehicles.",
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
                                <h3 className="text-2xl font-medium mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-hormel-gray-600">
                                    {service.desc}
                                </p>
                            </FadeIn>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-24 bg-hormel-green relative overflow-hidden">
                <Container className="relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-medium mb-8 text-hormel-black max-w-3xl mx-auto">
                        Secure your legacy with institutional-grade intelligence.
                    </h2>
                    <Link href="/contact">
                        <Button
                            size="lg"
                            className="bg-hormel-black text-white hover:bg-hormel-gray-800 border-none"
                        >
                            Book a Discovery Call
                        </Button>
                    </Link>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
