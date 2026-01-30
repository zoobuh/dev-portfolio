"use client";

import { motion } from "framer-motion";
import { Check, CreditCard, DollarSign, Wallet, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PricingPage() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <main className="min-h-screen pt-24 pb-20 px-6">
            <div className="max-w-6xl mx-auto space-y-16">

                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="text-center space-y-4 max-w-3xl mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                        Commission Pricing
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Transparent, fixed-price quotes tailored to your specific project needs.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {/* Policy Card */}
                    <motion.div variants={item} className="md:col-span-2">
                        <Card className="bg-card/50 backdrop-blur border-primary/10 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                            <CardHeader>
                                <div className="p-3 bg-primary/10 w-fit rounded-lg mb-4">
                                    <DollarSign className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle className="text-2xl">Fixed-Price Basis</CardTitle>
                                <CardDescription className="text-lg mt-2">
                                    All commissions are handled on a fixed-price basis to keep pricing clear and predictable.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    I don't believe in hourly rates that leave you guessing about the final cost.
                                    Instead, after we discuss your project and requirements in detail, I will provide
                                    a quote based on the full scope of work.
                                </p>
                                <p>
                                    This ensures you know exactly what you're paying for, with no hidden fees or surprises.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Payment Methods */}
                    <motion.div variants={item}>
                        <Card className="h-full bg-card/50 backdrop-blur border-white/5 hover:border-primary/20 transition-colors">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <Wallet className="w-5 h-5 text-blue-400" />
                                    <CardTitle>Payment Methods</CardTitle>
                                </div>
                                <CardDescription>Flexible options for your convenience</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-3">
                                    <h4 className="font-medium text-foreground flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                        USD (Preferred)
                                    </h4>
                                    <div className="flex gap-3 flex-wrap">
                                        <div className="bg-secondary/50 px-3 py-1.5 rounded-md text-sm flex items-center gap-2 border border-white/5">
                                            <CreditCard className="w-4 h-4 text-muted-foreground" />
                                            Cash App
                                        </div>
                                        <div className="bg-secondary/50 px-3 py-1.5 rounded-md text-sm flex items-center gap-2 border border-white/5">
                                            <CreditCard className="w-4 h-4 text-muted-foreground" />
                                            Apple Pay
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h4 className="font-medium text-foreground flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        Robux
                                    </h4>
                                    <div className="flex gap-3 flex-wrap text-sm text-muted-foreground">
                                        <span className="border border-white/10 px-2 py-1 rounded bg-secondary/20">Giftcards</span>
                                        <span className="border border-white/10 px-2 py-1 rounded bg-secondary/20">Group Funds</span>
                                        <span className="border border-white/10 px-2 py-1 rounded bg-secondary/20">Gamepasses*</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground/60 italic">*Gamepasses may require covering the 30% tax.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Terms / Deposit */}
                    <motion.div variants={item}>
                        <Card className="h-full bg-card/50 backdrop-blur border-white/5 hover:border-primary/20 transition-colors">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <ShieldCheck className="w-5 h-5 text-purple-400" />
                                    <CardTitle>Deposit & Delivery</CardTitle>
                                </div>
                                <CardDescription>Secure process for both parties</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <span className="font-bold text-primary text-sm">35%</span>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-foreground">Upfront Deposit</h4>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Required before development begins to secure your slot and start work.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-4 h-4 text-green-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-foreground">Final Payment</h4>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            The remaining balance is due upon completion and approval, prior to delivery of final assets.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center pt-8"
                >
                    <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-primary/50 to-purple-500/50">
                        <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg bg-background hover:bg-secondary/80 text-foreground border-0 transition-all duration-300">
                            <Link href="/contact" className="flex items-center gap-2">
                                Discuss Your Project <ArrowRight className="w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>

            </div>
        </main>
    );
}
