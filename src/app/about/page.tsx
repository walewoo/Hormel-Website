"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Target, Eye, Award, CheckCircle2, Building2, Heart, Baby, Stethoscope, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-hormel-black text-white">
                <Container className="relative z-10">
                    <div className="section-label mb-6">About Us</div>
                    <SectionHeader
                        title="Nigeria's Premier Real Estate Intelligence Partner"
                        subtitle="Bridge the gap between traditional property services and sophisticated wealth management."
                        light
                        className="max-w-4xl"
                    />
                </Container>
            </section>

            {/* Our Story */}
            <section className="py-20 md:py-32">
                <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <FadeIn>
                        <div className="relative h-[500px] overflow-hidden">
                            <div className="absolute inset-0 bg-[url('/images/hero-lagos-skyline.jpg')] bg-cover bg-center" />
                            {/* Overlay Badge */}
                            <div className="absolute bottom-0 right-0 bg-hormel-green p-6 z-20">
                                <p className="text-4xl font-bold text-hormel-black mb-1">15+</p>
                                <p className="text-hormel-black font-medium text-sm">Years of Excellence</p>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} className="space-y-6">
                        <div className="section-label">Our Journey</div>
                        <h3 className="text-3xl font-medium text-hormel-black">Built on Trust, Driven by Results</h3>
                        <p className="text-hormel-gray-600">
                            Hormel Company Limited was established in 2009 with a clear mandate: to bridge the gap between local market realities and global investment standards.
                        </p>
                        <p className="text-hormel-gray-600">
                            We have evolved from a property servicing company into a strategic partner for capital deployment, serving High-Net-Worth Individuals (HNWIs), Institutional Investors, Diaspora clients, and Government bodies.
                        </p>
                        <p className="text-hormel-gray-600">
                            Our approach transcends conventional real estate brokerage. We engineer value through rigorous, data-driven methodologies that ensure every investment decision is backed by comprehensive intelligence.
                        </p>
                    </FadeIn>
                </Container>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 md:py-32 bg-hormel-black text-white">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hormel-gray-800">
                        <FadeIn className="bg-hormel-black p-10 md:p-14">
                            <div className="w-14 h-14 bg-hormel-gray-800 flex items-center justify-center text-hormel-green mb-6">
                                <Eye size={32} />
                            </div>
                            <h3 className="text-2xl font-medium mb-4">Our Vision</h3>
                            <p className="text-hormel-gray-300">
                                To be the definitive Knowledge Leader in African real estate, empowering clients to achieve sovereign-level stability and institutional-grade returns through unparalleled market intelligence and strategic asset positioning.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.2} className="bg-hormel-black p-10 md:p-14">
                            <div className="w-14 h-14 bg-hormel-gray-800 flex items-center justify-center text-hormel-green mb-6">
                                <Target size={32} />
                            </div>
                            <h3 className="text-2xl font-medium mb-4">Our Mission</h3>
                            <p className="text-hormel-gray-300">
                                To bridge the gap between local market realities and global investment standards by providing the technical insight, due diligence rigor, and strategic guidance required for high-impact developments and sustainable wealth creation.
                            </p>
                        </FadeIn>
                    </div>
                </Container>
            </section>

            {/* Core Values */}
            <section className="py-24 md:py-32 bg-white">
                <Container>
                    <div className="section-label justify-center mx-auto w-fit mb-6">Values</div>
                    <SectionHeader
                        title="Our Core Value: PERFORMANCE"
                        subtitle="PERFORMANCE is not merely a metric—it is the DNA of our organizational culture."
                        centered
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-hormel-gray-200 mt-16">
                        {[
                            { title: "Precision", desc: "We measure twice and execute once. Our due diligence processes are exhaustive.", icon: CheckCircle2 },
                            { title: "Innovation", desc: "We pioneer emerging asset classes often identifying opportunities before they enter mainstream.", icon: Building2 },
                            { title: "Integrity", desc: "We provide unbiased counsel. If an opportunity doesn't align with your objectives, we advise you to walk away.", icon: Award },
                            { title: "Intelligence", desc: "Every recommendation is underpinned by comprehensive market research and financial modeling.", icon: Eye },
                        ].map((value, i) => (
                            <FadeIn key={value.title} delay={i * 0.1} className="bg-white p-8 text-center group hover:bg-hormel-gray-50 transition-colors duration-300">
                                <div className="w-14 h-14 mx-auto bg-hormel-gray-100 flex items-center justify-center text-hormel-green mb-6 group-hover:bg-hormel-green group-hover:text-hormel-black transition-colors duration-300">
                                    <value.icon size={28} />
                                </div>
                                <h4 className="text-xl font-medium mb-3">{value.title}</h4>
                                <p className="text-hormel-gray-500">{value.desc}</p>
                            </FadeIn>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CSR - Social Responsibility */}
            <section className="py-24 md:py-32 bg-hormel-black text-white">
                <Container>
                    <div className="section-label justify-center mx-auto w-fit mb-6">Our Commitment</div>
                    <SectionHeader
                        title="Corporate Social Responsibility"
                        subtitle="Beyond business, Hormel is committed to uplifting communities and transforming lives across Nigeria."
                        centered
                        light
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hormel-gray-800 mt-16">
                        {[
                            {
                                icon: HandHeart,
                                title: "Nigerian Prison System",
                                subtitle: "Prisoner's Support",
                                desc: "We help pay for Medical Bills, Examination Fees & contribute to Skill Development Funds — empowering incarcerated individuals with a path to rehabilitation and reintegration.",
                            },
                            {
                                icon: Baby,
                                title: "Maternity Ward Support",
                                subtitle: "Lagos Island General Hospital",
                                desc: "We support child birth and maternity fees for families who cannot afford payment, ensuring every mother and child receives the care they deserve.",
                            },
                            {
                                icon: Stethoscope,
                                title: "Health Care Support",
                                subtitle: "Lagos Island General Hospital",
                                desc: "We assist with medical bills, most especially operation and surgery fees for patients who cannot afford payment — because access to healthcare is a right, not a privilege.",
                            },
                            {
                                icon: Heart,
                                title: "Motherless Babies Home",
                                subtitle: "Nurturing the Next Generation",
                                desc: "We supply food items and daily essentials to motherless babies homes, providing vulnerable children with the care and sustenance they need to thrive.",
                            },
                        ].map((item, i) => (
                            <FadeIn
                                key={item.title}
                                delay={i * 0.1}
                                className="bg-hormel-black p-8 md:p-10 group"
                            >
                                <div className="w-14 h-14 bg-hormel-gray-800 flex items-center justify-center text-hormel-green mb-6 group-hover:bg-hormel-green group-hover:text-hormel-black transition-colors duration-300">
                                    <item.icon size={28} />
                                </div>
                                <p className="text-hormel-green text-sm font-semibold uppercase tracking-wider mb-2">
                                    {item.subtitle}
                                </p>
                                <h4 className="text-xl font-medium mb-3">{item.title}</h4>
                                <p className="text-hormel-gray-400">{item.desc}</p>
                            </FadeIn>
                        ))}
                    </div>

                    {/* Awards & Recognition */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-medium text-center mb-10">
                            Awards & Recognition
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    src: "/award.jpg",
                                    title: "Appreciation & Gratitude Award",
                                    org: "Lagos Island General Hospital — Maternity Ward",
                                    desc: "65th Year Anniversary recognition for consistent support for maternal healthcare.",
                                },
                                {
                                    src: "/award_2.png",
                                    title: "Award of Appreciation",
                                    org: "Nigerian Correctional Service — Ikoyi Custodial Centre",
                                    desc: "In recognition of selfless outstanding contributions, care and support to humanity. February 2024.",
                                },
                                {
                                    src: "/award_3.png",
                                    title: "Awards of Appreciation — Reformed for Impact",
                                    org: "Nigerian Correctional Service — Zone A (Lagos & Ogun State)",
                                    desc: "Presented at the 2025 Correctional Inmates Exhibition and Graduation Ceremony. August 2025.",
                                },
                                {
                                    src: "/award_4.png",
                                    title: "Recognition Award",
                                    org: "Lagos State Health Service Commission — Lagos Island Maternity Hospital",
                                    desc: "For kind gestures and support towards patients. September 2021.",
                                },
                            ].map((award, i) => (
                                <FadeIn
                                    key={award.src}
                                    delay={i * 0.1}
                                    className="border border-hormel-gray-800 p-6 md:p-8 flex flex-col items-center text-center"
                                >
                                    <div className="bg-hormel-gray-900 p-4 mb-6 w-full flex items-center justify-center">
                                        <Image
                                            src={award.src}
                                            alt={award.title}
                                            width={300}
                                            height={300}
                                            className="h-64 w-auto object-contain"
                                        />
                                    </div>
                                    <h4 className="text-lg font-medium mb-2">{award.title}</h4>
                                    <p className="text-hormel-gray-400 text-sm mb-3">{award.desc}</p>
                                    <p className="text-hormel-green font-semibold text-xs uppercase tracking-wider">
                                        {award.org}
                                    </p>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Affiliations */}
            <section className="py-20 bg-hormel-gray-50 border-t border-hormel-gray-200">
                <Container className="text-center">
                    <h3 className="text-lg font-medium text-hormel-gray-400 uppercase tracking-widest mb-10">Professional Affiliations</h3>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {["ESVARBON", "NIESV", "REDAN"].map((name) => (
                            <div key={name} className="flex items-center gap-2 font-bold text-xl text-hormel-gray-600">
                                <span className="bg-hormel-gray-300 w-10 h-10 flex items-center justify-center text-white">{name[0]}</span>
                                {name}
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-20 bg-hormel-green">
                <Container className="text-center">
                    <h2 className="text-3xl md:text-4xl font-medium mb-8 text-hormel-black">Ready to partner with Nigeria's premier advisory firm?</h2>
                    <Link href="/contact">
                        <Button size="lg" className="bg-hormel-black text-white hover:bg-hormel-gray-800 border-none">
                            Book a Consultation
                        </Button>
                    </Link>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
