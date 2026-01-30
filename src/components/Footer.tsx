"use client";

import Link from "next/link";
import { Github, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t bg-card/50">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div className="space-y-3">
                        <h3 className="font-bold text-lg">Noarifty</h3>
                        <p className="text-sm text-muted-foreground">
                            Building exceptional Roblox experiences with clean code and scalable architecture.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-3">
                        <h4 className="font-semibold text-sm">Quick Links</h4>
                        <div className="flex flex-col gap-2">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About", href: "/about" },
                                { name: "Projects", href: "/projects" },
                                { name: "Contact", href: "/contact" },
                            ].map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1 w-fit block"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-3">
                        <h4 className="font-semibold text-sm">Connect</h4>
                        <div className="flex gap-4">
                            <motion.a
                                href="https://www.roblox.com/users/3147190762/profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Roblox Profile"
                                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.926 23.998L0.002 18.95 5.05.026l18.924 5.05-5.048 18.922zM15.348 12.58l-3.89-1.04-1.038 3.888 3.888 1.038 1.04-3.886z" />
                                </svg>
                            </motion.a>
                            <motion.a
                                href="https://github.com/zoobuh"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Github className="w-4 h-4" />
                            </motion.a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} Noarifty. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                        Made with <motion.span whileHover={{ scale: 1.2 }} className="inline-block"><Heart className="w-3 h-3 text-red-500 fill-current" /></motion.span> for the Roblox community
                    </p>
                </div>
            </div>
        </footer>
    );
}
