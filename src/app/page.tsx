"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Code } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-20 relative">
                {/* Background Glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                    <motion.div
                        className="w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8 max-w-4xl"
                >
                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-7xl lg:text-8xl font-bold"
                    >
                        <motion.span
                            className="text-gradient inline-block"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Noarifty
                        </motion.span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Roblox Developer
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg text-muted-foreground/80 max-w-xl mx-auto"
                    >
                        Building scalable gameplay systems, clean backend architecture, and modern UI experiences
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap gap-4 justify-center pt-4"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button asChild size="lg" className="gap-2">
                                <Link href="/projects">
                                    View Work <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button asChild size="lg" variant="outline" className="gap-2">
                                <Link href="/contact">
                                    Contact Me <Code className="w-4 h-4" />
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>
        </main>
    );
}
