"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const languages = [
    { name: "Lua", color: "text-blue-400", bgColor: "bg-blue-500/10" },
    { name: "Python", color: "text-blue-400", bgColor: "bg-blue-500/10" },
    { name: "JavaScript", color: "text-blue-400", bgColor: "bg-blue-500/10" },
];

const technologies = [
    "Roblox Studio",
    "DataStore",
    "RemoteEvents",
    "ModuleScripts",
    "UI Design",
    "Git",
];

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto space-y-20">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-4"
                >
                    <h1 className="text-5xl md:text-6xl font-bold">
                        About <span className="text-gradient">Me</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Building exceptional Roblox experiences with clean code and scalable architecture
                    </p>
                </motion.div>

                {/* Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Card>
                            <CardContent className="p-8 md:p-10">
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    I'm a Roblox developer focused on building clean, scalable systems like inventories,
                                    shops, pets, and secure backend logic. I prioritize performance and professional architecture,
                                    ensuring every system is robust, maintainable, and optimized for production environments.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>

                {/* Languages */}
                <div className="space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center"
                    >
                        Languages
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {languages.map((lang, index) => (
                            <motion.div
                                key={lang.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                            >
                                <Card className={lang.bgColor}>
                                    <CardContent className="p-8 text-center">
                                        <h3 className={`text-3xl font-bold ${lang.color}`}>
                                            {lang.name}
                                        </h3>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Technologies */}
                <div className="space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center"
                    >
                        Technologies & Tools
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-3 justify-center"
                    >
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={tech}
                                whileHover={{ scale: 1.1, rotate: 2 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Badge variant="secondary" className="text-base px-4 py-2 cursor-default">
                                    {tech}
                                </Badge>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
