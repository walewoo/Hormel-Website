"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

interface NavLinkItem {
    name: string;
    href: string;
    dropdown?: { name: string; href: string }[];
}

const navLinks: NavLinkItem[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
        name: "Services",
        href: "/services",
        dropdown: [
            { name: "Private Wealth", href: "/services/private-wealth" },
            { name: "Institutional Investment", href: "/services/institutional" },
            { name: "Public Sector", href: "/services/public-sector" },
        ],
    },
    {
        name: "Capabilities",
        href: "/capabilities",
        dropdown: [
            { name: "Construction Management", href: "/capabilities/construction" },
            { name: "Property Management", href: "/capabilities/property-management" },
        ],
    },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
    }, [pathname]);

    const isHomePage = pathname === "/";
    const showDark = scrolled || isOpen || !isHomePage;

    return (
        <nav
            className={cn(
                "fixed top-0 z-[999] w-full transition-all duration-300",
                scrolled
                    ? "bg-black/30 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.08)] py-4"
                    : "bg-transparent py-5"
            )}
        >
            <Container className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="z-50 flex items-center">
                    <Image
                        src={isOpen ? "/hormel_logo_black_main.png" : "/hormel_logo_main.png"}
                        alt="Hormel"
                        width={140}
                        height={40}
                        className="h-7 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-9">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative group h-full flex items-center"
                            onMouseEnter={() => setActiveDropdown(link.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                href={link.href}
                                className={cn(
                                    "flex items-center gap-1 text-sm leading-5 md:text-base md:leading-6 font-medium transition-colors duration-200 hover:text-hormel-green",
                                    pathname === link.href || (link.dropdown && pathname.startsWith(link.href))
                                        ? "text-hormel-green"
                                        : "text-white/80 hover:text-white"
                                )}
                            >
                                {link.name}
                                {link.dropdown && <ChevronDown size={14} className="mt-0.5" />}
                            </Link>

                            {/* Dropdown */}
                            <AnimatePresence>
                                {link.dropdown && activeDropdown === link.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                                    >
                                        <div className="bg-white shadow-lg border border-hormel-gray-200 py-2 w-64 rounded-sm">
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="block px-6 py-3 text-sm text-hormel-gray-600 hover:bg-hormel-gray-50 hover:text-hormel-green transition-colors"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm leading-5 md:text-base md:leading-6 font-semibold transition-all duration-200 bg-hormel-green text-hormel-black hover:bg-white hover:text-hormel-black"
                    >
                        Get In Touch
                        <ArrowRight size={16} strokeWidth={2.5} />
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={cn(
                        "md:hidden z-50 p-2 focus:outline-none",
                        isOpen ? "text-hormel-black" : "text-white"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-0 left-0 w-full min-h-screen bg-white flex flex-col pt-32 pb-10 px-6 overflow-y-auto md:hidden"
                        >
                            <div className="flex flex-col gap-6 w-full max-w-sm mx-auto">
                                {navLinks.map((link) => (
                                    <div key={link.name} className="flex flex-col gap-4">
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "text-2xl font-bold transition-colors hover:text-hormel-green",
                                                pathname === link.href ? "text-hormel-green" : "text-hormel-black"
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                        {link.dropdown && (
                                            <div className="flex flex-col gap-3 pl-4 border-l-2 border-hormel-gray-100">
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className="text-lg text-hormel-gray-500 hover:text-hormel-green transition-colors"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="mt-8 inline-flex items-center justify-center gap-2 bg-hormel-green text-hormel-black px-8 py-4 text-lg font-bold w-full"
                                >
                                    Get In Touch
                                    <ArrowRight size={20} />
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </nav>
    );
}
