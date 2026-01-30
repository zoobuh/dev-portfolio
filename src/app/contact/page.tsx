"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, Copy, Check, Send } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function ContactPage() {
    const [copied, setCopied] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const copyDiscord = () => {
        navigator.clipboard.writeText("Noarifty");
        setCopied(true);
        toast.success("Discord username copied to clipboard!");
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-4"
                >
                    <h1 className="text-5xl md:text-6xl font-bold">
                        Get In <span className="text-gradient">Touch</span>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Let's work together on your next Roblox project
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Methods */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="space-y-6"
                    >
                        <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <MessageSquare className="w-6 h-6 text-primary" />
                                        <CardTitle>Discord</CardTitle>
                                    </div>
                                    <CardDescription>
                                        The fastest way to reach me
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center gap-2 p-4 bg-muted rounded-lg">
                                        <code className="text-lg font-semibold">Noarifty</code>
                                    </div>
                                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Button
                                            onClick={copyDiscord}
                                            variant="outline"
                                            className="w-full gap-2"
                                        >
                                            {copied ? (
                                                <>
                                                    <Check className="w-4 h-4" /> Copied!
                                                </>
                                            ) : (
                                                <>
                                                    <Copy className="w-4 h-4" /> Copy Username
                                                </>
                                            )}
                                        </Button>
                                    </motion.div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <Mail className="w-6 h-6 text-primary" />
                                        <CardTitle>Email</CardTitle>
                                    </div>
                                    <CardDescription>
                                        For longer inquiries
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Prefer Discord for faster responses
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Contact Form</CardTitle>
                                    <CardDescription>
                                        Reach out directly
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Name</Label>
                                            <motion.div whileFocus={{ scale: 1.01 }}>
                                                <Input
                                                    id="name"
                                                    placeholder="Your name"
                                                    value={formData.name}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, name: e.target.value })
                                                    }
                                                    required
                                                />
                                            </motion.div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <motion.div whileFocus={{ scale: 1.01 }}>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="your@email.com"
                                                    value={formData.email}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, email: e.target.value })
                                                    }
                                                    required
                                                />
                                            </motion.div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="message">Message</Label>
                                            <motion.div whileFocus={{ scale: 1.01 }}>
                                                <Textarea
                                                    id="message"
                                                    placeholder="Tell me about your project..."
                                                    className="min-h-[120px]"
                                                    value={formData.message}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, message: e.target.value })
                                                    }
                                                    required
                                                />
                                            </motion.div>
                                        </div>
                                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                            <Button type="submit" className="w-full gap-2">
                                                <Send className="w-4 h-4" /> Send Message
                                            </Button>
                                        </motion.div>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
