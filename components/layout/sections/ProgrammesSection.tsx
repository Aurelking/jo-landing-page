"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Train, UserCheck, Accessibility, Clock } from "lucide-react";
import LogoJo from "@/public/logo-jo";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
    FloatingIcon,
    GraduationCapIcon,
    OpenBookIcon,
    TargetGoalIcon,
} from "@/components/orientation-icons";

interface CityProps {
    image: string;
    title: string;
    date: string;
    fullDate: Date;
    location: string;
    address: string;
    access: string;
}

const cityList: CityProps[] = [
    {
        image: "/cityImages/marseille.png",
        title: "Marseille",
        date: "7 Mars 2026",
        fullDate: new Date("2026-03-07"),
        location: "Faculté Saint-Charles",
        address: "43 rue du 141ème RIA, 13003 Marseille",
        access:
            "Gare Saint-Charles à proximité immédiate, Métro M1/M2 (arrêt Saint-Charles).",
    },
    {
        image: "/cityImages/toulon.png",
        title: "Toulon",
        date: "Date à venir",
        fullDate: new Date("2026-12-31"),
        location: "Palais des Congrès Neptune",
        address: "Place Besagne, 83000 Toulon",
        access:
            "Bus Réseau Mistral (lignes 3, 7, 15, arrêt Mayol), Gare SNCF Toulon à 15 min à pied.",
    },
    {
        image: "/cityImages/martigues.png",
        title: "Martigues",
        date: "Date à venir",
        fullDate: new Date("2026-12-31"),
        location: "Lieu à confirmer",
        address: "Martigues",
        access: "Informations à venir.",
    },
    {
        image: "/cityImages/avignon.png",
        title: "Avignon",
        date: "Date à venir",
        fullDate: new Date("2026-12-31"),
        location: "Lieu à confirmer",
        address: "Avignon",
        access: "Informations à venir.",
    },
];

export const ProgrammesSection = () => {
    const getNextEvent = () => {
        const now = new Date();
        const upcomingEvents = cityList.filter((city) => city.fullDate >= now);
        return upcomingEvents.length > 0 ? upcomingEvents[0] : cityList[0];
    };

    const nextEvent = getNextEvent();

    return (
        <section id="programmes" className="relative overflow-hidden">
            <div className="section-divider" />

            <div className="container w-full py-24 sm:py-32">
                {/* Background accents */}
                <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/6 rounded-full blur-[100px] -z-10" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/6 rounded-full blur-[100px] -z-10" />

                {/* Orientation floating decorations */}
                <FloatingIcon
                    icon={<OpenBookIcon size={44} className="text-primary/35" />}
                    className="top-20 left-[4%] hidden lg:block"
                    duration={8}
                    delay={0.5}
                    yRange={14}
                    rotateRange={6}
                />
                <FloatingIcon
                    icon={<TargetGoalIcon size={38} className="text-secondary/35" />}
                    className="bottom-28 right-[5%] hidden lg:block"
                    duration={9}
                    delay={2}
                    yRange={12}
                    rotateRange={8}
                />

                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/8 px-4 py-2 rounded-full border border-primary/12">
                            Nos villes
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold mt-6 mb-4">
                            Programmes
                        </h2>
                        <p className="md:w-2/3 mx-auto text-lg text-muted-foreground leading-relaxed">
                            Cette année, les JO voyagent à travers la France ! Rejoins-nous dans
                            l'une des quatre villes participantes et vis une journée qui pourrait
                            changer ta vision de l'avenir.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Floating city images (desktop) */}
                    <div className="relative h-[600px] order-2 lg:order-1 hidden lg:block">
                        {/* Logo watermark */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                            <LogoJo className="w-full h-full" />
                        </div>

                        {/* Marseille - center */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                       w-72 h-80 rounded-2xl overflow-hidden shadow-2xl shadow-primary/15
                                       border-2 border-white/80 z-20 cursor-pointer group"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image src="/cityImages/marseille.png" alt="Marseille" fill className="object-cover" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                                <h3 className="text-white font-bold text-xl">Marseille</h3>
                                <p className="text-white/80 text-sm">7 Mars 2026</p>
                            </div>
                        </motion.div>

                        {/* Martigues - top right */}
                        <motion.div
                            className="absolute top-16 right-16 w-48 h-56 rounded-2xl overflow-hidden
                                       shadow-xl shadow-secondary/10 border-2 border-white/80 z-30 cursor-pointer"
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                                scale: { duration: 0.3 },
                                rotate: { duration: 0.3 },
                            }}
                        >
                            <Image src="/cityImages/martigues.png" alt="Martigues" fill className="object-cover" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3">
                                <h3 className="text-white font-bold text-lg">Martigues</h3>
                                <p className="text-white/80 text-xs">Date à venir</p>
                            </div>
                        </motion.div>

                        {/* Avignon - top left */}
                        <motion.div
                            className="absolute top-12 left-12 w-44 h-52 rounded-2xl overflow-hidden
                                       shadow-xl shadow-primary/10 border-2 border-white/80 z-10 cursor-pointer"
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                                scale: { duration: 0.3 },
                                rotate: { duration: 0.3 },
                            }}
                        >
                            <Image src="/cityImages/avignon.png" alt="Avignon" fill className="object-cover" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3">
                                <h3 className="text-white font-bold text-base">Avignon</h3>
                                <p className="text-white/80 text-xs">Date à venir</p>
                            </div>
                        </motion.div>

                        {/* Toulon - bottom left */}
                        <motion.div
                            className="absolute bottom-16 left-16 w-44 h-52 rounded-2xl overflow-hidden
                                       shadow-xl shadow-secondary/10 border-2 border-white/80 z-10 cursor-pointer"
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                                scale: { duration: 0.3 },
                                rotate: { duration: 0.3 },
                            }}
                        >
                            <Image src="/cityImages/toulon.png" alt="Toulon" fill className="object-cover" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3">
                                <h3 className="text-white font-bold text-base">Toulon</h3>
                                <p className="text-white/80 text-xs">Date à venir</p>
                            </div>
                        </motion.div>

                        {/* Blur decorations */}
                        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-secondary/15 rounded-full blur-[80px] -z-10" />
                        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[80px] -z-10" />
                    </div>

                    {/* Mobile city grid */}
                    <div className="lg:hidden grid grid-cols-2 gap-4 order-1 mb-8">
                        {cityList.map((city) => (
                            <Card
                                key={city.title}
                                className="overflow-hidden bg-card/80 backdrop-blur-sm border border-border/40
                                           hover:border-primary/30 transition-all duration-300 rounded-xl"
                            >
                                <div className="relative h-32 w-full">
                                    <Image src={city.image} alt={city.title} fill className="object-cover" />
                                </div>
                                <CardContent className="p-3">
                                    <h3 className="font-bold text-sm mb-1">{city.title}</h3>
                                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                        <Calendar size={11} />
                                        <span>{city.date}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Right - Practical info */}
                    <motion.div
                        className="space-y-5 order-2"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-3 mb-8">
                            <h2 className="text-3xl md:text-4xl font-extrabold">
                                Infos{" "}
                                <span className="text-gradient">pratiques</span>
                            </h2>
                            <p className="text-muted-foreground">
                                Toutes les informations pour préparer votre visite
                            </p>
                        </div>

                        <div className="space-y-4">
                            {/* Info cards */}
                            {[
                                {
                                    icon: Clock,
                                    title: "Horaires",
                                    color: "text-primary",
                                    bg: "bg-primary/8",
                                    borderHover: "hover:border-primary/30",
                                    content: (
                                        <p className="font-bold text-foreground text-lg">15h - 17h</p>
                                    ),
                                },
                                {
                                    icon: UserCheck,
                                    title: "Entrée",
                                    color: "text-secondary",
                                    bg: "bg-secondary/8",
                                    borderHover: "hover:border-secondary/30",
                                    content: (
                                        <>
                                            <p className="font-bold text-foreground text-lg">Gratuite</p>
                                            <p className="text-muted-foreground text-sm">
                                                Inscription recommandée en ligne
                                            </p>
                                        </>
                                    ),
                                },
                                {
                                    icon: Accessibility,
                                    title: "Accessibilité",
                                    color: "text-primary",
                                    bg: "bg-primary/8",
                                    borderHover: "hover:border-primary/30",
                                    content: (
                                        <>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                Des agents accompagnent les personnes en situation de handicap
                                                pour leur permettre de profiter pleinement de l'expérience.
                                            </p>
                                            <div className="pt-2 border-t border-border/30 mt-2">
                                                <p className="text-foreground text-sm">
                                                    <span className="font-semibold">Stationnement :</span>{" "}
                                                    Places PMR disponibles
                                                </p>
                                            </div>
                                        </>
                                    ),
                                },
                            ].map(({ icon: IconComp, title, color, bg, borderHover, content }) => (
                                <Card
                                    key={title}
                                    className={`bg-card/70 backdrop-blur-sm border border-border/40 rounded-xl
                                               ${borderHover} hover:shadow-lg transition-all duration-300`}
                                >
                                    <CardHeader className="pb-2">
                                        <CardTitle className={`flex items-center gap-3 ${color} text-base`}>
                                            <div className={`p-2.5 ${bg} rounded-xl`}>
                                                <IconComp size={20} />
                                            </div>
                                            {title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>{content}</CardContent>
                                </Card>
                            ))}

                            {/* Next event card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.97 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Card className="bg-gradient-to-br from-primary/8 via-secondary/4 to-accent/4 shadow-xl shadow-primary/5 border border-primary/15 rounded-xl overflow-hidden">
                                    <div className="h-[2px] bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50" />
                                    <CardHeader>
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                                            <span className="text-xs font-bold text-primary uppercase tracking-[0.15em]">
                                                Prochain événement
                                            </span>
                                        </div>
                                        <CardTitle className="text-2xl">{nextEvent.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <Calendar size={18} className="text-primary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-bold text-lg">{nextEvent.date}</p>
                                                <p className="text-sm text-muted-foreground">15h - 17h</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <MapPin size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-bold">{nextEvent.location}</p>
                                                <p className="text-sm text-muted-foreground">
                                                    {nextEvent.address}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Train size={18} className="text-primary mt-0.5 flex-shrink-0" />
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {nextEvent.access}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
