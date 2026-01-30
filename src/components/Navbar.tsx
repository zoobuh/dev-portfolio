"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed w-full top-0 z-50 transition-all duration-300",
                scrolled
                    ? "glass-morphism border-b shadow-lg"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Code2 className="w-6 h-6 text-primary transition-transform group-hover:rotate-12" />
                    <span className="font-bold text-xl">Noarifty</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <motion.div key={link.name} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href={link.href}
                                className={cn(
                                    "relative text-sm font-medium transition-colors hover:text-primary",
                                    pathname === link.href
                                        ? "text-primary"
                                        : "text-muted-foreground"
                                )}
                            >
                                {link.name}
                                {pathname === link.href && (
                                    <motion.span
                                        layoutId="navbar-indicator"
                                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                    />
                                )}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <X className="w-5 h-5" />
                    ) : (
                        <Menu className="w-5 h-5" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden glass-morphism border-t animate-slide-down">
                    <div className="px-6 py-4 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary py-2",
                                    pathname === link.href
                                        ? "text-primary"
                                        : "text-muted-foreground"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
