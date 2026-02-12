"use client";

import { Container } from "../layout/Container";
import { FadeIn } from "../animations/FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        title: "Private Wealth & Diaspora Advisory",
        description:
            "Bespoke real estate investment strategies designed to preserve capital and generate intergenerational wealth for HNWIs and global Nigerians.",
        image: "/images/luxury-nigerian-home.jpg",
        link: "/services/private-wealth",
    },
    {
        title: "Institutional Investment & Advisory",
        description:
            "Data-driven market intelligence and delivering bankable projects for institutional investors, family offices, and corporate developers.",
        image: "/images/hero-lagos-skyline.jpg",
        link: "/services/institutional",
    },
    {
        title: "Public Sector & Urban Regeneration Advisory",
        description:
            "Partnering with government bodies to unlock value in dormant assets and structure sustainable public-private partnerships.",
        image: "/images/nigerian-urban-landscape.jpg",
        link: "/services/public-sector",
    },
];

export function CoreServices() {
    return (
        <section className="py-24 md:py-32 bg-hormel-green-dark text-white overflow-hidden">
            <Container>
                <FadeIn className="max-w-3xl mx-auto text-center mb-16">
                    <div className="section-label justify-center mx-auto w-fit mb-6 !text-white border-white/20">
                        Our Core Services
                    </div>
                    <h2 className="text-[1.875rem] md:text-[2.75rem] lg:text-[3.25rem] font-medium mb-5 tracking-[-0.02em] leading-[1.1]">
                        Expertise Tailored to Your
                        <br className="hidden md:block" />{" "}
                        <span className="font-display italic text-white">
                            Investment & Advisory Needs
                        </span>
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <FadeIn
                            key={service.title}
                            delay={0.15 * index}
                            className="group relative flex flex-col h-full"
                        >
                            <Link href={service.link} className="block flex-grow flex flex-col h-full">
                                <div className="relative aspect-[4/3] overflow-hidden mb-8 rounded-sm bg-white/5">
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        transition={{
                                            duration: 0.6,
                                            ease: [0.33, 1, 0.68, 1],
                                        }}
                                        src={service.image}
                                        alt={service.title}
                                        className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-hormel-green-dark/80 to-transparent opacity-60" />
                                </div>

                                <div className="flex flex-col flex-grow">
                                    <h3 className="text-xl md:text-2xl font-medium mb-4 leading-snug group-hover:text-white/90 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/70 mb-8 leading-relaxed flex-grow">
                                        {service.description}
                                    </p>

                                    <div>
                                        <motion.div
                                            className="inline-flex items-center gap-2 text-white font-medium hover:text-white/80 transition-colors"
                                            whileHover="hover"
                                        >
                                            <span className="uppercase tracking-widest text-xs">
                                                Learn More
                                            </span>
                                            <motion.span
                                                variants={{
                                                    hover: { x: 4 },
                                                }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 10,
                                                }}
                                            >
                                                <ArrowRight size={16} />
                                            </motion.span>
                                        </motion.div>
                                    </div>
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </Container>
        </section>
    );
}
