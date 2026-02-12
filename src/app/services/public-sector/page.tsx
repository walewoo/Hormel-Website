"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Landmark, Map, FileStack, HardHat } from "lucide-react";

export default function PublicSectorPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-32 bg-hormel-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/nigerian-public-infrastructure.jpg')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-hormel-black via-transparent to-transparent" />

                <Container className="relative z-10">
                    <div className="section-label mb-6">Division III</div>
                    <SectionHeader
                        title="Public Sector & Urban Regeneration Advisory"
                        subtitle="Partnering with government to unlock value in public assets and modernize urban infrastructure."
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
                                    {["Federal & State Government Agencies", "Ministries & Land Bureaus", "Municipal Councils"].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-hormel-gray-600">
                                            <div className="w-2 h-2 bg-hormel-green" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <h3 className="text-2xl font-medium mb-4 text-hormel-black">Strategic Focus</h3>
                                <p className="text-hormel-gray-600">
                                    Urban Renewal, Public-Private Partnerships (PPP) & Land Administration Modernization. We help unlock the latent value of dormant public assets.
                                </p>
                            </div>
                            <div className="bg-hormel-black p-8 text-white">
                                <h4 className="font-bold text-lg mb-4 text-hormel-green">Why This Matters</h4>
                                <p className="text-hormel-gray-400 mb-6">
                                    "Our PPP structuring expertise ensures risk transfer, bankability, and long-term sustainability while protecting public interest."
                                </p>
                                <Link href="/contact">
                                    <Button size="sm">Discuss Partnership</Button>
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
                    <SectionHeader title="Public Sector Solutions" subtitle="Evidence-based policy frameworks for urban development." className="mb-16" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hormel-gray-200">
                        {[
                            { icon: HardHat, title: "Urban Renewal Advisory", desc: "Structuring bankable proposals for transforming blighted government estates into vibrant mixed-use developments through sustainable PPP models." },
                            { icon: Map, title: "Land Digitization Consultancy", desc: "Assisting State Governments in digitizing land registries and implementing GIS for improved land management and revenue generation." },
                            { icon: FileStack, title: "Policy Advisory & Research", desc: "Evidence-based recommendations on housing finance, land use planning, and rental market regulation to support government objectives." },
                            { icon: Landmark, title: "Estate Regularization", desc: "Frameworks for regularizing informal settlements, creating compliance pathways that generate revenue while providing tenure security." },
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
            <section className="py-24 bg-hormel-green relative overflow-hidden">
                <Container className="relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-medium mb-8 text-hormel-black max-w-3xl mx-auto">
                        Transform public assets into sustainable value.
                    </h2>
                    <Link href="/contact">
                        <Button size="lg" className="bg-hormel-black text-white hover:bg-hormel-gray-800 border-none">
                            Request a Proposal
                        </Button>
                    </Link>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
