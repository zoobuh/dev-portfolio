"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, CreditCard, DollarSign, Wallet, ArrowRight, ShieldCheck, Zap, Layers, Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const pricingTiers = [
    {
        id: "simple",
        name: "Simple Tasks",
        price: "2,000–5,000",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        borderColor: "border-green-500/20",
        icon: Zap,
        description: "Small features, fixes, or lightweight scripts.",
        examples: [
            "Bug fixes",
            "Small scripts",
            "Simple UI logic",
            "Basic tools or abilities",
            "Minor edits to existing systems",
            "Simple data saving",
        ]
    },
    {
        id: "standard",
        name: "Standard Systems",
        price: "6,000–15,000",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        borderColor: "border-blue-500/20",
        icon: Layers,
        description: "Medium-sized or standalone systems.",
        examples: [
            "Shop systems",
            "Inventory systems",
            "Pets/companions",
            "Admin/mod tools",
            "Matchmaking/lobby systems",
            "DataStore setups",
            "Custom UI frameworks",
        ]
    },
    {
        id: "advanced",
        name: "Advanced / Large Systems",
        price: "18,000–40,000+",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        borderColor: "border-purple-500/20",
        icon: Box,
        description: "Complex or fully custom systems that require significant planning and backend work.",
        examples: [
            "Full game frameworks",
            "Large progression/simulator systems",
            "Secure server-client architecture",
            "Multiple connected systems",
            "Long-term or multi-week projects",
        ]
    }
];

export default function PricingPage() {
    const [activeTier, setActiveTier] = useState("standard");

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
            <div className="max-w-6xl mx-auto space-y-24">

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

                {/* General Pricing Guide Section */}
                <section className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center space-y-4"
                    >
                        <h2 className="text-3xl font-bold">General Pricing Guide</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            These are estimated ranges for common requests. Final pricing depends on complexity and time required.
                        </p>
                    </motion.div>

                    {/* Interactive Slider / Tabs */}
                    <div className="flex flex-col items-center gap-8">
                        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-secondary/30 backdrop-blur rounded-full border border-white/5">
                            {pricingTiers.map((tier) => (
                                <button
                                    key={tier.id}
                                    onClick={() => setActiveTier(tier.id)}
                                    className={cn(
                                        "relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300",
                                        activeTier === tier.id ? "text-white" : "text-muted-foreground hover:text-white"
                                    )}
                                >
                                    {activeTier === tier.id && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className={cn("absolute inset-0 rounded-full bg-primary/20 border border-primary/30", tier.bgColor.replace("/10", "/30"))}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10 flex items-center gap-2">
                                        <tier.icon className={cn("w-4 h-4", activeTier === tier.id ? tier.color : "text-muted-foreground")} />
                                        {tier.name}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Active Tier Content */}
                        <div className="w-full max-w-4xl min-h-[400px]">
                            <AnimatePresence mode="wait">
                                {pricingTiers.map((tier) => (
                                    tier.id === activeTier && (
                                        <motion.div
                                            key={tier.id}
                                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                            transition={{ duration: 0.4 }}
                                            className="w-full"
                                        >
                                            <Card className={cn(
                                                "border-2 backdrop-blur-sm transition-colors duration-500",
                                                tier.borderColor,
                                                "bg-card/50"
                                            )}>
                                                <div className={cn("absolute inset-0 opacity-10 blur-3xl transition-colors duration-500", tier.bgColor)} />

                                                <CardHeader className="text-center pb-8 pt-10">
                                                    <div className={cn("mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ring-4 ring-white/5", tier.bgColor)}>
                                                        <tier.icon className={cn("w-8 h-8", tier.color)} />
                                                    </div>
                                                    <CardTitle className="text-3xl mb-2">{tier.name}</CardTitle>
                                                    <div className="flex items-center justify-center gap-1 text-2xl font-bold text-foreground/80">
                                                        <span className="text-lg text-muted-foreground font-normal">Est.</span>
                                                        {tier.price}
                                                        <span className="text-lg text-muted-foreground font-normal">Robux</span>
                                                    </div>
                                                    <CardDescription className="text-lg mt-4 max-w-xl mx-auto">
                                                        {tier.description}
                                                    </CardDescription>
                                                </CardHeader>

                                                <CardContent className="pb-10">
                                                    <div className="max-w-2xl mx-auto">
                                                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6 text-center">Common Examples</h4>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            {tier.examples.map((example, idx) => (
                                                                <motion.div
                                                                    key={idx}
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: idx * 0.1 }}
                                                                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 border border-white/5 hover:border-white/10 transition-colors"
                                                                >
                                                                    <div className={cn("w-1.5 h-1.5 rounded-full shrink-0", tier.color.replace("text-", "bg-"))} />
                                                                    <span className="text-sm font-medium">{example}</span>
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    )
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </section>

                {/* Requirements & Payments Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
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
