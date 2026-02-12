import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-hormel-black text-white pt-20 pb-10">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/hormel_logo_main.png"
                                alt="Hormel"
                                width={140}
                                height={40}
                                className="h-8 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-hormel-gray-400 max-w-xs">
                            Nigeria's premier Asset Management and Real Estate Advisory firm.
                            Bridging local realities with global standards since 2009.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-hormel-gray-400 hover:text-hormel-green transition-colors">
                                <Linkedin size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {["About Us", "Our Services", "Capabilities", "Contact Us"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase().replace(" ", "-") === "/our-services" ? "services" : item.toLowerCase().replace(" ", "-")}`}
                                        className="text-hormel-gray-400 hover:text-hormel-green transition-colors text-sm"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Expertise</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Private Wealth", href: "/services/private-wealth" },
                                { name: "Institutional", href: "/services/institutional" },
                                { name: "Public Sector", href: "/services/public-sector" },
                                { name: "Construction Tech", href: "/capabilities/construction" },
                                { name: "Property Mgmt", href: "/capabilities/property-management" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-hormel-gray-400 hover:text-hormel-green transition-colors text-sm">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-3 text-sm text-hormel-gray-400">
                                <MapPin className="shrink-0 text-hormel-green mt-1" size={18} />
                                <span>
                                    22, Idowu Taylor Street, Suite 11<br />
                                    Management Building<br />
                                    Victoria Island, Lagos
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-hormel-gray-400">
                                <Phone className="shrink-0 text-hormel-green" size={18} />
                                <div className="flex flex-col">
                                    <a href="tel:+2348152131313" className="hover:text-white transition-colors">+234 815 213 1313</a>
                                    <a href="tel:+2348035450452" className="hover:text-white transition-colors">+234 803 545 0452</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-hormel-gray-400">
                                <Mail className="shrink-0 text-hormel-green" size={18} />
                                <a href="mailto:info@hormelng.com" className="hover:text-white transition-colors">info@hormelng.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-hormel-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-hormel-gray-500 text-xs">
                        © {currentYear} Hormel Company Limited. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-hormel-gray-500">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
