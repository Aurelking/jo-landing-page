"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

interface BenefitsProps {
    icon: string;
    title: string;
    description: string;
    accent: string;
}

const benefitList: BenefitsProps[] = [
    {
        icon: "Sparkles",
        title: "Découvrir ton potentiel",
        description:
            "Identifie tes talents, tes forces et ce qui te rend unique grâce aux ateliers et échanges interactifs.",
        accent: "primary",
    },
    {
        icon: "Users",
        title: "Rencontrer & échanger",
        description:
            "Dialogue avec des mentors, des professionnels et des recruteurs qui partagent leur expérience et leurs conseils.",
        accent: "secondary",
    },
    {
        icon: "Target",
        title: "Construire ton avenir",
        description:
            "Accède à des ressources pratiques : orientation, création de CV, simulation d'entretien, entrepreneuriat.",
        accent: "primary",
    },
    {
        icon: "Gift",
        title: "Saisir des opportunités",
        description:
            "Participer à une tombola pour remporter des formations gratuites ou un accompagnement personnalisé de plusieurs mois.",
        accent: "secondary",
    },
];

export const BenefitsSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" as const },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" as const },
        },
    };

    return (
        <section id="benefits" className="relative overflow-hidden">
            {/* Section divider */}
            <div className="section-divider" />

            <div className="container w-full py-24 sm:py-32 px-6 lg:px-12">
                {/* Background accents */}
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/6 rounded-full blur-[100px] -z-10" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/6 rounded-full blur-[100px] -z-10" />

                <div className="grid lg:grid-cols-2 place-items-center lg:gap-20 gap-16">
                    {/* Section texte */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={textVariants}
                        className="space-y-8"
                    >
                        <div className="inline-block">
                            <span
                                className="text-xs font-bold text-primary uppercase tracking-[0.2em]
                                           bg-primary/8 px-4 py-2 rounded-full border border-primary/12"
                            >
                                Pourquoi venir
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.1]">
                            Pourquoi participer aux{" "}
                            <span className="text-gradient">JO ?</span>
                        </h2>

                        <div className="border-l-[3px] border-primary/40 pl-6 space-y-3">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Les JO 2026 sont bien plus qu'un simple événement. Que tu sois
                                étudiant, en recherche d'orientation, en reconversion ou simplement
                                curieux, les JO sont pour toi.
                            </p>
                            <p className="text-base text-muted-foreground/70">
                                Découvre ce que cette journée peut t'apporter pour ton avenir.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-4">
                            {[
                                { value: "4", label: "Thématiques", color: "text-primary" },
                                { value: "1", label: "Journée", color: "text-secondary" },
                                { value: "∞", label: "Opportunités", color: "text-accent" },
                            ].map((stat) => (
                                <motion.div
                                    key={stat.label}
                                    className="text-center p-4 rounded-xl bg-card/60 border border-border/40"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className={`text-3xl font-extrabold ${stat.color}`}>
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-1 font-medium uppercase tracking-wide">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Cards grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={containerVariants}
                        className="grid sm:grid-cols-2 gap-4 w-full"
                    >
                        {benefitList.map(({ icon, title, description, accent }, index) => (
                            <motion.div key={title} variants={itemVariants}>
                                <Card
                                    className="relative bg-card/80 backdrop-blur-sm border border-border/50
                                       hover:border-primary/30 transition-all duration-300 group cursor-pointer
                                       h-full rounded-2xl shadow-sm
                                       hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                                >
                                    {/* Top accent line */}
                                    <div
                                        className={`absolute top-0 left-4 right-4 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                            ${accent === "primary" ? "bg-gradient-to-r from-primary/60 to-primary/20" : "bg-gradient-to-r from-secondary/60 to-secondary/20"}`}
                                    />

                                    <CardHeader className="pb-3 space-y-3">
                                        <div className="flex justify-between items-start">
                                            {/* Icon */}
                                            <motion.div
                                                whileHover={{ rotate: 6, scale: 1.05 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <div
                                                    className={`p-3 rounded-xl ${
                                                        accent === "primary"
                                                            ? "bg-primary/8 text-primary"
                                                            : "bg-secondary/8 text-secondary"
                                                    }`}
                                                >
                                                    <Icon
                                                        name={icon as keyof typeof icons}
                                                        size={20}
                                                        color={accent === "primary" ? "#6B21A8" : "#2563EB"}
                                                    />
                                                </div>
                                            </motion.div>

                                            {/* Number */}
                                            <span className="text-4xl font-black text-muted-foreground/8 select-none leading-none">
                                                0{index + 1}
                                            </span>
                                        </div>

                                        <CardTitle className="text-[15px] font-bold group-hover:text-primary transition-colors duration-300">
                                            {title}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="pt-0">
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
