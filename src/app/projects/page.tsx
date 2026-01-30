"use client";

import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Inventory System",
        videoUrl: "https://www.youtube.com/embed/Oad6XZsjMMw",
        tags: ["Backend", "UI", "Systems"],
        description: "Server-authentic storage with modular architecture and clean UI logic.",
    },
    {
        title: "Simple Loading Screen with Animations",
        videoUrl: "https://streamable.com/e/iknb9o",
        tags: ["UI", "Animations", "Tweens"],
        description: "Custom loading screen featuring smooth animations and tweening effects for enhanced user experience.",
    },
    {
        title: "Legacy Shop UI System (2023)",
        videoUrl: "https://medal.tv/clip/1klFDR7OfoBSwM",
        tags: ["UI", "Shop", "Frontend"],
        description: "Full-featured shop user interface with custom design and interaction logic.",
    },
    {
        title: "Cash Grab Game System",
        videoUrl: "https://medal.tv/clip/m10CZ4rK7D2rag9gY",
        tags: ["Gamepass", "Backend", "Systems"],
        description: "Complete game system including gamepass integration, monetization logic, and core gameplay mechanics.",
    },
    {
        title: "Comprehensive Game System",
        videoUrl: "https://medal.tv/clip/m10ltCmzTQZ_yZVrm",
        tags: ["Loading Screen", "Shop NPC", "Phone System"],
        description: "Complete game loop implementation including loading screen, shop NPC interaction, and phone UI system.",
    },
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-4"
                >
                    <h1 className="text-5xl md:text-6xl font-bold">
                        My <span className="text-gradient">Projects</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Showcase of scalable Roblox systems
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </main>
    );
}
