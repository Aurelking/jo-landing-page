"use client";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Sparkles, Users, Target, Lightbulb } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
    {
        icon: Sparkles,
        text: "Offrir un espace de découverte (stands orientation, CV, entrepreneuriat, sport, emploi)",
    },
    {
        icon: Lightbulb,
        text: "Proposer des plénières inspirantes et des ateliers pratiques pour travailler son projet scolaire ou professionnel",
    },
    {
        icon: Users,
        text: "Créer des rencontres décisives avec des mentors, des entreprises et des recruteurs",
    },
    {
        icon: Target,
        text: "Et donner accès à des opportunités concrètes comme des formations, des accompagnements personnalisés ou des expériences uniques via la tombola",
    },
];

export const AboutSection = () => {
    return (
        <section id="about" className="container py-24 sm:py-32 relative overflow-hidden">
            {/* Effets de fond décoratifs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

            {/* En-tête de section */}
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    À propos des{" "}
                    <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                        JO
                    </span>
                </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                {/* Image à gauche */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/img.png" // Remplacez par votre image
                            alt="Événement JO"
                            width={600}
                            height={400}
                            className="object-cover w-full h-[400px]"
                        />
                        {/* Overlay décoratif */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                    {/* Badge flottant */}
                    <div className="absolute -bottom-6 -right-6 bg-white dark:bg-card p-6 rounded-2xl shadow-xl border-2 border-primary/20">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary">2026</div>
                            <div className="text-sm text-muted-foreground">Édition</div>
                        </div>
                    </div>
                </motion.div>

                {/* Texte à droite */}
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="space-y-4">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Les <span className="font-semibold text-foreground">JO – Journées d'Orientation</span> sont un événement phare
                            proposé par <span className="font-semibold text-foreground">Jeunesse des Nations</span>, une association engagée
                            auprès des jeunes en quête de repères et de perspectives d'avenir.
                        </p>

                        {/* Logo JDN */}
                        <div className="flex items-center">
                            <div className="w-96 h-96 relative ">
                                <img
                                    src="/jdn-logo.png" // Logo Jeunesse des Nations
                                    alt="Jeunesse des Nations"
                                    className="object-contain"
                                />
                            </div>

                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Là où Jeunesse des Nations agit toute l'année à travers des ateliers, des programmes d'accompagnement et des
                            partenariats éducatifs et professionnels, les JO se veulent un temps fort, une plateforme d'expériences et de rencontres qui
                            concentre cette mission en une seule journée.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Section "Un événement pensé pour les jeunes" */}
            <motion.div
                className="mb-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
            >
                <Card className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 border border-border/40">
                    <CardContent className="p-8 md:p-12">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                                <span className="text-2xl">⭐</span>
                                Un événement pensé pour les jeunes
                                <span className="text-2xl">⭐</span>
                            </h3>
                            <p className="text-muted-foreground text-lg">
                                Sous le thème « <span className="italic font-semibold">Trouver sa Force, Révéler son Avenir</span> », les JO ont pour objectif de :
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex gap-4 p-4 bg-background/80 backdrop-blur-sm rounded-lg hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <feature.icon className="w-5 h-5 text-primary" />
                                        </div>
                                    </div>
                                    <p className="text-sm text-foreground leading-relaxed">{feature.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Section "Plus qu'un événement : une impulsion" */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">
                            Plus qu'un événement :{" "}
                            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                                une impulsion
                            </span>
                        </h3>
                    </div>

                    <Card className="bg-card/60 backdrop-blur-sm border border-border/40">
                        <CardContent className="p-8 md:p-10 space-y-6">
                            <p className="text-lg text-muted-foreground leading-relaxed text-center">
                                Les JO ne sont pas seulement une journée de conférences ou d'animations : elles sont conçues comme un{" "}
                                <span className="font-semibold text-foreground">catalyseur</span>. Elles permettent à chaque participant de transformer ses doutes en confiance, ses idées en projets, et ses envies en
                                action.
                            </p>

                            <div className="border-l-4 border-primary pl-6 py-2">
                                <p className="text-lg text-foreground leading-relaxed italic">
                                    En réunissant des jeunes, des professionnels et des partenaires autour d'une même vision, les JO deviennent un véritable
                                    tremplin pour propulser la jeunesse vers un avenir plus ambitieux, réaliste et épanoui.
                                </p>
                            </div>

                            {/* Stats ou chiffres clés */}
                            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/40">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary mb-1">4</div>
                                    <div className="text-sm text-muted-foreground">Villes</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-secondary mb-1">+500</div>
                                    <div className="text-sm text-muted-foreground">Participants</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary mb-1">1</div>
                                    <div className="text-sm text-muted-foreground">Journée</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </motion.div>
        </section>
    );
};