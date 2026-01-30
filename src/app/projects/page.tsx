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
];

export default function ProjectsPage() {
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
                        My <span className="text-gradient">Projects</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Showcase of scalable Roblox systems
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </main>
    );
}
