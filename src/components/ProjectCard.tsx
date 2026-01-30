"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
    title: string;
    videoUrl: string;
    tags: string[];
    description: string;
}

export default function ProjectCard({ title, videoUrl, tags, description }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <Card className="overflow-hidden group">
                <CardHeader className="p-0">
                    <div className="relative aspect-video overflow-hidden bg-muted">
                        <iframe
                            src={videoUrl}
                            title={title}
                            className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                        <CardTitle className="text-xl">{title}</CardTitle>
                        <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardDescription className="mb-4">{description}</CardDescription>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
