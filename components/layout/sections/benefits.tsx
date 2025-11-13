"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import {motion} from "framer-motion";
import LogoJo from "@/public/logo-jo";
import React from "react";

interface BenefitsProps {
    icon: string;
    title: string;
    description: string;
}

const benefitList: BenefitsProps[] = [
    {
        icon: "Sparkles",
        title: "Découvrir ton potentiel",
        description:
            "Identifie tes talents, tes forces et ce qui te rend unique grâce aux ateliers et échanges interactifs.",
    },
    {
        icon: "Users",
        title: "Rencontrer & échanger",
        description:
            "Dialogue avec des mentors, des professionnels et des recruteurs qui partagent leur expérience et leurs conseils.",
    },
    {
        icon: "Target",
        title: "Construire ton avenir",
        description:
            "Accède à des ressources pratiques : orientation, création de CV, simulation d'entretien, entrepreneuriat.",
    },
    {
        icon: "Gift",
        title: "Saisir des opportunités",
        description:
            "Participer à une tombola pour remporter des formations gratuites ou un accompagnement personnalisé de plusieurs mois.",
    },
];

export const BenefitsSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1 }
        }
    };

    return (
        <section id="benefits" className="container w-full py-24 sm:py-32 relative overflow-hidden px-6 lg:px-12">
            {/* Effets de fond décoratifs */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
            {/* Logo en filigrane derrière les images */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 blur-sm">
                <LogoJo className="w-full h-full" />
            </div>

            <div className="grid lg:grid-cols-2 place-items-center lg:gap-24 gap-12">
                {/* Section texte avec animation */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={textVariants}
                    className="space-y-6"
                >
                    <div className="inline-block">
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider
                                       bg-primary/10 px-4 py-2 rounded-full">
                            Événement unique
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Pourquoi participer aux{" "}
                        <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                            JO ?
                        </span>
                    </h2>

                    <div className="border-l-4 border-primary pl-6 space-y-4">
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Les JO 2026 sont bien plus qu'un simple événement. Que tu sois étudiant,
                            en recherche d'orientation, en reconversion ou simplement curieux,
                            les JO sont pour toi.
                        </p>
                        <p className="text-lg text-muted-foreground/80">
                            Découvre ce que cette journée peut t'apporter pour ton avenir.
                        </p>
                    </div>

                    {/* Statistiques rapides */}
                    <div className="grid grid-cols-3 gap-6 pt-6">
                        <motion.div
                            className="text-center"
                            whileHover={{ scale: 1.1 }}
                        >
                            <div className="text-3xl font-bold text-primary">4</div>
                            <div className="text-sm text-muted-foreground">Thématiques</div>
                        </motion.div>
                        <motion.div
                            className="text-center"
                            whileHover={{ scale: 1.1 }}
                        >
                            <div className="text-3xl font-bold text-secondary">1</div>
                            <div className="text-sm text-muted-foreground">Journée</div>
                        </motion.div>
                        <motion.div
                            className="text-center"
                            whileHover={{ scale: 1.1 }}
                        >
                            <div className="text-3xl font-bold text-primary">∞</div>
                            <div className="text-sm text-muted-foreground">Opportunités</div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Grille de cartes avec animations échelonnées */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={containerVariants}
                    className="grid sm:grid-cols-2 gap-5 w-full"
                >
                    {benefitList.map(({ icon, title, description }, index) => (
                        <motion.div key={title} variants={itemVariants}>
                            <Card
                                className="relative bg-card/70 backdrop-blur-sm border border-border/40
                           hover:border-primary/40 transition-all duration-300 group cursor-pointer
                           h-full rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.05)]
                           hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)] hover:-translate-y-1"
                            >
                                {/* Lueur subtile sur le dessus */}
                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/50 to-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-xl" />

                                <CardHeader className="pb-2 space-y-2">
                                    <div className="flex justify-between items-center">
                                        {/* Icône avec relief */}
                                        <motion.div
                                            className="relative shadow-inner"
                                            whileHover={{ rotate: 8, scale: 1.08 }}
                                            transition={{ type: "spring", stiffness: 250 }}
                                        >
                                            <div className="relative bg-primary/10 p-2.5 rounded-md shadow-[inset_0_1px_4px_rgba(0,0,0,0.08)]">
                                                <Icon
                                                    name={icon as keyof typeof icons}
                                                    size={22}
                                                    className="text-primary"
                                                color={"#7137A8"}/>
                                            </div>
                                        </motion.div>

                                        {/* Numéro d’ordre subtil */}
                                        <motion.span
                                            className="text-4xl font-bold text-muted-foreground/10 select-none"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            0{index + 1}
                                        </motion.span>
                                    </div>

                                    <CardTitle className="text-base font-semibold group-hover:text-primary transition-colors">
                                        {title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="pt-0">
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {description}
                                    </p>

                                    {/* Ligne d’accent animée */}
                                    <motion.div
                                        className="mt-3 h-[2px] bg-gradient-to-r from-primary to-secondary rounded-full"
                                        initial={{ width: 0 }}
                                        whileHover={{ width: "100%" }}
                                        transition={{ duration: 0.4 }}
                                    />
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};
