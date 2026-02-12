"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-16 bg-hormel-black text-white">
                <Container className="text-center">
                    <div className="section-label justify-center mx-auto w-fit mb-6">Get In Touch</div>
                    <SectionHeader
                        title="Start the Conversation"
                        subtitle="Whether you're looking to invest, divest, or optimize your portfolio, our advisory team is ready to guide you."
                        light
                        centered
                        className="max-w-3xl mx-auto"
                    />
                </Container>
            </section>

            <section className="py-20">
                <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info Side */}
                    <FadeIn className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-medium mb-6">Contact Information</h3>
                            <div className="space-y-8">
                                {[
                                    {
                                        icon: MapPin,
                                        title: "Head Office",
                                        content: (
                                            <p className="text-hormel-gray-600">
                                                22, Idowu Taylor Street, Suite 11<br />
                                                Management Building<br />
                                                Victoria Island, Lagos, Nigeria
                                            </p>
                                        ),
                                    },
                                    {
                                        icon: Phone,
                                        title: "Phone",
                                        content: (
                                            <div className="text-hormel-gray-600 space-y-1">
                                                <p>+234 815 213 1313</p>
                                                <p>+234 815 413 1313</p>
                                                <p>+234 803 545 0452</p>
                                            </div>
                                        ),
                                    },
                                    {
                                        icon: Mail,
                                        title: "Email",
                                        content: (
                                            <a href="mailto:info@hormelng.com" className="text-hormel-green hover:underline">info@hormelng.com</a>
                                        ),
                                    },
                                    {
                                        icon: Clock,
                                        title: "Office Hours",
                                        content: (
                                            <div className="text-hormel-gray-600">
                                                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                                                <p>Saturday & Sunday: Closed</p>
                                            </div>
                                        ),
                                    },
                                ].map((item) => (
                                    <div key={item.title} className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-hormel-gray-100 flex items-center justify-center text-hormel-green shrink-0">
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-1">{item.title}</h4>
                                            {item.content}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Map */}
                        <div className="h-64 bg-hormel-gray-100 overflow-hidden relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7288636750893!2d3.419616314770286!3d6.42885999534947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53280e7648d%3A0x4d01e5c33842d38!2s22%20Idowu%20Taylor%20St%2C%20Victoria%20Island%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1678901234567!5m2!1sen!2sng"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </FadeIn>

                    {/* Contact Form */}
                    <FadeIn delay={0.2} className="bg-hormel-gray-50 p-8 md:p-10 border border-hormel-gray-200">
                        <h3 className="text-2xl font-medium mb-8">Send us a Message</h3>
                        <form
                            action="https://api.web3forms.com/submit"
                            method="POST"
                            className="space-y-6"
                        >
                            <input type="hidden" name="access_key" value="d1e1bcca-4ea4-4243-b95e-5e7bb1efd3ff" />
                            {/* Honeypot Spam Prevention */}
                            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium text-hormel-gray-700">First Name</label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        id="firstName"
                                        required
                                        className="w-full px-4 py-3 border border-hormel-gray-300 focus:ring-2 focus:ring-hormel-green focus:border-transparent outline-none transition-all bg-white"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium text-hormel-gray-700">Last Name</label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        id="lastName"
                                        required
                                        className="w-full px-4 py-3 border border-hormel-gray-300 focus:ring-2 focus:ring-hormel-green focus:border-transparent outline-none transition-all bg-white"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-hormel-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 border border-hormel-gray-300 focus:ring-2 focus:ring-hormel-green focus:border-transparent outline-none transition-all bg-white"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="clientType" className="text-sm font-medium text-hormel-gray-700">I am a...</label>
                                <select
                                    name="client_type"
                                    id="clientType"
                                    required
                                    defaultValue=""
                                    className="w-full px-4 py-3 border border-hormel-gray-300 focus:ring-2 focus:ring-hormel-green focus:border-transparent outline-none transition-all bg-white"
                                >
                                    <option value="" disabled>Select an option</option>
                                    <option value="High-Net-Worth Individual">High-Net-Worth Individual</option>
                                    <option value="Diaspora Investor">Diaspora Investor</option>
                                    <option value="Institutional Investor">Institutional Investor</option>
                                    <option value="Government Representative">Government Representative</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-hormel-gray-700">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    required
                                    className="w-full px-4 py-3 border border-hormel-gray-300 focus:ring-2 focus:ring-hormel-green focus:border-transparent outline-none transition-all resize-none bg-white"
                                    placeholder="Tell us about your investment goals..."
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </FadeIn>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
