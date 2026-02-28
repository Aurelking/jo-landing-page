"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Users, Target, Lightbulb } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
    {
        icon: Sparkles,
        text: "Offrir un espace de découverte (stands orientation, CV, entrepreneuriat, sport, emploi)",
        color: "text-primary",
        bg: "bg-primary/8",
    },
    {
        icon: Lightbulb,
        text: "Proposer des plénières inspirantes et des ateliers pratiques pour travailler son projet scolaire ou professionnel",
        color: "text-secondary",
        bg: "bg-secondary/8",
    },
    {
        icon: Users,
        text: "Créer des rencontres décisives avec des mentors, des entreprises et des recruteurs",
        color: "text-accent",
        bg: "bg-accent/8",
    },
    {
        icon: Target,
        text: "Et donner accès à des opportunités concrètes comme des formations, des accompagnements personnalisés ou des expériences uniques via la tombola",
        color: "text-primary",
        bg: "bg-primary/8",
    },
];

export const AboutSection = () => {
    return (
        <section id="about" className="relative overflow-hidden">
            <div className="section-divider" />

            <div className="container py-24 sm:py-32 relative">
                {/* Background effects */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/4 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/4 rounded-full blur-[120px] -z-10" />

                {/* Section header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/8 px-4 py-2 rounded-full border border-primary/12">
                        Notre mission
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mt-6 mb-4">
                        À propos des{" "}
                        <span className="text-gradient">JO</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    {/* Flyer image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 h-[500px] lg:h-[700px]">
                            <Image
                                src="/flyers.png"
                                alt="Flyer JO 2026"
                                fill
                                className="object-fill"
                            />
                        </div>
                        {/* Decorative frame */}
                        <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-primary/15 -z-10" />
                    </motion.div>

                    {/* Text content */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-5">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Les{" "}
                                <span className="font-semibold text-foreground">
                                    JO – Journées d'Orientation
                                </span>{" "}
                                sont un événement phare proposé par{" "}
                                <span className="font-semibold text-foreground">
                                    Jeunesse des Nations
                                </span>
                                , une association engagée auprès des jeunes en quête de repères
                                et de perspectives d'avenir.
                            </p>

                            {/* Logo JDN */}
                            <div className="flex items-center py-4">
                                <div className="w-56 h-auto relative">
                                    <img
                                        src="/jdn-logo.png"
                                        alt="Jeunesse des Nations"
                                        className="object-contain w-full"
                                    />
                                </div>
                            </div>

                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Là où Jeunesse des Nations agit toute l'année à travers des
                                ateliers, des programmes d'accompagnement et des partenariats
                                éducatifs et professionnels, les JO se veulent un temps fort, une
                                plateforme d'expériences et de rencontres qui concentre cette
                                mission en une seule journée.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Feature card section */}
                <motion.div
                    className="mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                >
                    <Card className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/40 via-secondary/40 to-accent/40" />
                        <CardContent className="p-8 md:p-12">
                            <div className="text-center mb-10">
                                <h3 className="text-3xl md:text-4xl font-extrabold mb-3">
                                    Un événement pensé pour les jeunes
                                </h3>
                                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                    Sous le thème «{" "}
                                    <span className="italic font-semibold text-foreground">
                                        Trouver sa Force, Révéler son Avenir
                                    </span>{" "}
                                    », les JO ont pour objectif de :
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                        }}
                                        className="flex gap-4 p-5 bg-background/80 backdrop-blur-sm rounded-xl border border-border/30 hover:border-primary/20 hover:shadow-md transition-all duration-300"
                                    >
                                        <div className="flex-shrink-0">
                                            <div
                                                className={`w-11 h-11 rounded-xl ${feature.bg} flex items-center justify-center`}
                                            >
                                                <feature.icon
                                                    className={`w-5 h-5 ${feature.color}`}
                                                />
                                            </div>
                                        </div>
                                        <p className="text-sm text-foreground/80 leading-relaxed">
                                            {feature.text}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Impulsion section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl md:text-4xl font-extrabold mb-6">
                                Plus qu'un événement :{" "}
                                <span className="text-gradient">une impulsion</span>
                            </h3>
                        </div>

                        <Card className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl overflow-hidden">
                            <CardContent className="p-8 md:p-10 space-y-6">
                                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                                    Les JO ne sont pas seulement une journée de conférences ou
                                    d'animations : elles sont conçues comme un{" "}
                                    <span className="font-semibold text-foreground">
                                        catalyseur
                                    </span>
                                    . Elles permettent à chaque participant de transformer ses
                                    doutes en confiance, ses idées en projets, et ses envies en
                                    action.
                                </p>

                                <div className="border-l-[3px] border-primary/40 pl-6 py-2">
                                    <p className="text-lg text-foreground leading-relaxed italic">
                                        En réunissant des jeunes, des professionnels et des
                                        partenaires autour d'une même vision, les JO deviennent un
                                        véritable tremplin pour propulser la jeunesse vers un
                                        avenir plus ambitieux, réaliste et épanoui.
                                    </p>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/40">
                                    {[
                                        { value: "4", label: "Villes", color: "text-primary" },
                                        { value: "+500", label: "Participants", color: "text-secondary" },
                                        { value: "1", label: "Journée", color: "text-accent" },
                                    ].map((stat) => (
                                        <motion.div
                                            key={stat.label}
                                            className="text-center"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <div className={`text-3xl font-extrabold ${stat.color} mb-1`}>
                                                {stat.value}
                                            </div>
                                            <div className="text-sm text-muted-foreground font-medium">
                                                {stat.label}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
