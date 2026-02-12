"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";

export default function CapabilitiesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-hormel-black text-white">
                <Container className="text-center">
                    <div className="section-label justify-center mx-auto w-fit mb-6">
                        Capabilities
                    </div>
                    <SectionHeader
                        title="Operational Excellence"
                        subtitle="Specialized services that support our strategic advisory core and ensure full-cycle asset performance."
                        light
                        centered
                        className="max-w-4xl mx-auto"
                    />
                </Container>
            </section>

            <section className="py-20 md:py-32">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ServiceCard
                            title="Construction Management"
                            description="End-to-end project delivery with institutional-grade oversight, cost management, and quality assurance for developments of all scales."
                            href="/capabilities/construction"
                            imageSrc="/images/nigerian-construction-site.jpg"
                            tags={["Project Delivery", "Quality Control", "Cost Management"]}
                        />

                        <ServiceCard
                            title="Property Management"
                            description="Ensuring real estate assets deliver sustained value through professional operations, tenant satisfaction, and proactive maintenance."
                            href="/capabilities/property-management"
                            imageSrc="/images/nigerian-commercial-property.jpg"
                            tags={["Operations", "Facilities", "Tenant Relations"]}
                            delay={0.1}
                        />
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
