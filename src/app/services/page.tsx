"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-hormel-black text-white">
                <Container className="text-center">
                    <div className="section-label justify-center mx-auto w-fit mb-6">
                        What We Do
                    </div>
                    <SectionHeader
                        title="Strategic Service Divisions"
                        subtitle="Hormel's expertise is structured into specialized divisions, each designed to address the distinct requirements of our diverse client base."
                        light
                        centered
                        className="max-w-4xl mx-auto"
                    />
                </Container>
            </section>

            {/* Main Divisions */}
            <section className="py-20 md:py-32">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard
                            title="Private Wealth & Diaspora Advisory"
                            description="Wealth preservation and inflation hedging strategies for HNWIs and Diaspora investors seeking secure, managed real estate exposure."
                            href="/services/private-wealth"
                            imageSrc="/images/nigerian-wealth-advisory.jpg"
                            tags={["HNWIs", "Diaspora", "Family Offices"]}
                            delay={0}
                        />

                        <ServiceCard
                            title="Institutional Investment & Industrial"
                            description="Risk-adjusted returns and regulatory compliance for PFAs, Insurance Firms, and Corporates requiring institutional-grade due diligence."
                            href="/services/institutional"
                            imageSrc="/images/hero-lagos-skyline.jpg"
                            tags={["PFAs", "Asset Managers", "Corporates"]}
                            delay={0.1}
                        />

                        <ServiceCard
                            title="Public Sector & Urban Regeneration"
                            description="Partnering with government entities to unlock value in dormant public assets through PPPs and urban renewal frameworks."
                            href="/services/public-sector"
                            imageSrc="/images/nigerian-public-infrastructure.jpg"
                            tags={["Government", "Municipal Councils", "Agencies"]}
                            delay={0.2}
                        />
                    </div>
                </Container>
            </section>

            {/* Secondary Capabilities */}
            <section className="py-20 bg-hormel-gray-50">
                <Container>
                    <div className="section-label mb-6">Supporting Services</div>
                    <SectionHeader
                        title="Operational Capabilities"
                        subtitle="Specialized operational services supporting our strategic advisory core."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        <ServiceCard
                            title="Construction Management"
                            description="End-to-end project delivery with institutional-grade oversight, cost management, and quality assurance."
                            href="/capabilities/construction"
                            imageSrc="/images/nigerian-construction-site.jpg"
                            tags={["Project Delivery", "Quality Control"]}
                            className="h-auto"
                        />

                        <ServiceCard
                            title="Property Management"
                            description="Ensuring real estate assets deliver sustained value through professional operations and tenant satisfaction."
                            href="/capabilities/property-management"
                            imageSrc="/images/nigerian-commercial-property.jpg"
                            tags={["Operations", "Facilities", "Reporting"]}
                            className="h-auto"
                        />
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
