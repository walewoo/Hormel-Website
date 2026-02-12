"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Building, BarChart2, Briefcase, FileSearch } from "lucide-react";

export default function InstitutionalPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-32 bg-hormel-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/hero-lagos-skyline.jpg')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-hormel-black via-transparent to-transparent" />

                <Container className="relative z-10">
                    <div className="section-label mb-6">Division II</div>
                    <SectionHeader
                        title="Institutional Investment & Industrial Advisory"
                        subtitle="De-risked deal flow and market intelligence for institutions seeking secure, compliant exposure."
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
                                <h3 className="text-2xl font-medium mb-4 text-hormel-black">Target Clientele</h3>
                                <ul className="space-y-3 mb-8">
                                    {["Pension Fund Administrators (PFAs)", "Asset Management Companies", "Corporate Entities & Insurance Firms"].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-hormel-gray-600">
                                            <div className="w-2 h-2 bg-hormel-green" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <h3 className="text-2xl font-medium mb-4 text-hormel-black">Strategic Focus</h3>
                                <p className="text-hormel-gray-600">
                                    Risk-Adjusted Returns, Regulatory Compliance & Institutional-Grade Due Diligence. We serve as the trusted real estate intelligence arm for institutional investors.
                                </p>
                            </div>
                            <div className="bg-hormel-black p-8 text-white">
                                <h4 className="font-bold text-lg mb-4 text-hormel-green">Why This Matters</h4>
                                <p className="text-hormel-gray-400 mb-6">
                                    "Our value proposition centers on de-risked deal flow and market intelligence that meets the exacting standards of Investment Committee approval processes."
                                </p>
                                <Link href="/contact">
                                    <Button size="sm">Request Intelligence Report</Button>
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
                    <SectionHeader title="Institutional Solutions" subtitle="Rigorous frameworks for institutional capital deployment." className="mb-16" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hormel-gray-200">
                        {[
                            { icon: FileSearch, title: "De-Risked Investment Pipeline", desc: "Opportunities that have passed our 3-tier internal audit: Title Verification, Technical Assessment, and Commercial Viability Modeling." },
                            { icon: Building, title: "Industrial & Logistics", desc: "Sourcing prime industrial land, warehousing facilities, and logistics hubs along strategic corridors like Lekki Free Trade Zone." },
                            { icon: BarChart2, title: "Market Intelligence", desc: "Quarterly reports on yields, occupancy rates, and asset performance. The \"ground truth\" necessary for confident allocation." },
                            { icon: Briefcase, title: "Joint Venture Structuring", desc: "Facilitating co-investment between institutions and reputable developers with proper governance frameworks." },
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
            <section className="py-24 bg-hormel-black relative overflow-hidden">
                <Container className="relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-medium mb-8 text-white max-w-3xl mx-auto">
                        Perform due diligence with a partner that understands risk.
                    </h2>
                    <Link href="/contact">
                        <Button size="lg">
                            Contact Our Institutional Desk
                        </Button>
                    </Link>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
