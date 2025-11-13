"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Train, UserCheck, Accessibility, Clock } from "lucide-react";
import LogoJo from "@/public/logo-jo";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

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
        image: "/cityimages/marseille.png",
        title: "Marseille",
        date: "Samedi 15 mars 2025",
        fullDate: new Date("2025-03-15"),
        location: "Maison de la Jeunesse et de la Culture",
        address: "16 Rue Bernard du Bois, 13001 Marseille",
        access:
            "Métro M2 (arrêt Noailles), Tram T1 (arrêt Réformés Canebière), Gare Saint-Charles à 10 min à pied.",
    },
    {
        image: "/cityimages/toulon.png",
        title: "Toulon",
        date: "Samedi 22 mars 2025",
        fullDate: new Date("2025-03-22"),
        location: "Palais des Congrès Neptune",
        address: "Place Besagne, 83000 Toulon",
        access:
            "Bus Réseau Mistral (lignes 3, 7, 15, arrêt Mayol), Gare SNCF Toulon à 15 min à pied.",
    },
    {
        image: "/cityimages/nice.png",
        title: "Nice",
        date: "Samedi 29 mars 2025",
        fullDate: new Date("2025-03-29"),
        location: "Centre Universitaire Méditerranéen (CUM)",
        address: "65 Promenade des Anglais, 06000 Nice",
        access:
            "Tramway Ligne 2 (arrêt Alsace-Lorraine), bus lignes 12/32, Gare Nice-Ville à 10 min.",
    },
    {
        image: "/cityimages/avignon.png",
        title: "Avignon",
        date: "Samedi 5 avril 2025",
        fullDate: new Date("2025-04-05"),
        location: "Palais des Papes – Centre de Congrès",
        address: "Place du Palais, 84000 Avignon",
        access:
            "Gare Avignon Centre à 15 min à pied, bus ligne C3 (arrêt Palais des Papes), parking Palais des Papes à proximité.",
    },
];

export const ProgrammesSection = () => {
    // Trouver le prochain événement
    const getNextEvent = () => {
        const now = new Date();
        const upcomingEvents = cityList.filter(city => city.fullDate >= now);
        return upcomingEvents.length > 0 ? upcomingEvents[0] : cityList[0];
    };

    const nextEvent = getNextEvent();

    return (
        <section id="programmes" className="container w-full py-24 sm:py-32 relative overflow-hidden">
            {/* Effets de fond décoratifs */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10"></div>

            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Programmes
                    </h2>
                    <p className="md:w-2/3 mx-auto text-xl text-muted-foreground">
                        Cette année, les JO voyagent à travers la France ! Rejoins-nous dans
                        l'une des quatre villes participantes et vis une journée qui pourrait
                        changer ta vision de l'avenir.
                    </p>
                </motion.div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Section gauche - Images flottantes des villes (cachées sur mobile) */}
                <div className="relative h-[600px] order-2 lg:order-1 hidden lg:block">
                    {/* Logo en filigrane */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-5">
                        <LogoJo className="w-full h-full" />
                    </div>

                    {/* Marseille - Image principale centrale (sans animation) */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-72 h-80 rounded-2xl overflow-hidden shadow-2xl
                      border-4 border-secondary z-20 cursor-pointer group"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src="/cityimages/marseille.png"
                            alt="Marseille"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                            <h3 className="text-white font-bold text-xl">Marseille</h3>
                            <p className="text-white/80 text-sm">15 mars 2025</p>
                        </div>
                    </motion.div>

                    {/* Nice - Carte rectangulaire top-right */}
                    <motion.div
                        className="absolute top-16 right-16 w-48 h-56 rounded-2xl overflow-hidden
                      shadow-xl border-4 border-primary z-30 cursor-pointer group"
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                            scale: { duration: 0.3 },
                            rotate: { duration: 0.3 }
                        }}
                    >
                        <Image
                            src="/cityimages/nice.png"
                            alt="Nice"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                            <h3 className="text-white font-bold text-lg">Nice</h3>
                            <p className="text-white/80 text-xs">29 mars 2025</p>
                        </div>
                    </motion.div>

                    {/* Avignon - Carte rectangulaire top-left */}
                    <motion.div
                        className="absolute top-12 left-12 w-44 h-52 rounded-2xl overflow-hidden
                      shadow-xl border-4 border-white z-25 cursor-pointer group"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                            scale: { duration: 0.3 },
                            rotate: { duration: 0.3 }
                        }}
                    >
                        <Image
                            src="/cityimages/avignon.png"
                            alt="Avignon"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                            <h3 className="text-white font-bold text-base">Avignon</h3>
                            <p className="text-white/80 text-xs">5 avril 2025</p>
                        </div>
                    </motion.div>

                    {/* Toulon - Carte rectangulaire bottom-left */}
                    <motion.div
                        className="absolute bottom-16 left-16 w-44 h-52 rounded-2xl overflow-hidden
                      shadow-xl border-4 border-secondary/70 z-15 cursor-pointer group"
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                            scale: { duration: 0.3 },
                            rotate: { duration: 0.3 }
                        }}
                    >
                        <Image
                            src="/cityimages/toulon.png"
                            alt="Toulon"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                            <h3 className="text-white font-bold text-base">Toulon</h3>
                            <p className="text-white/80 text-xs">22 mars 2025</p>
                        </div>
                    </motion.div>

                    {/* Effets de blur décoratifs */}
                    <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-secondary/30 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl -z-10"></div>
                </div>

                {/* Grille des villes pour mobile uniquement */}
                <div className="lg:hidden grid grid-cols-2 gap-4 order-1 mb-12">
                    {cityList.map((city) => (
                        <Card
                            key={city.title}
                            className="overflow-hidden bg-card/70 backdrop-blur-sm border-2 border-border/40
                         hover:border-primary/50 transition-all duration-300"
                        >
                            <div className="relative h-32 w-full">
                                <Image
                                    src={city.image}
                                    alt={city.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardContent className="p-3">
                                <h3 className="font-bold text-base mb-1">{city.title}</h3>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Calendar size={12} />
                                    <span>{city.date}</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Section droite - Infos pratiques et prochain événement */}
                <motion.div
                    className="space-y-6 order-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                >
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Infos{" "}
                                <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                                pratiques
                            </span>
                            </h2>
                            <p className="text-muted-foreground">
                                Toutes les informations pour préparer votre visite
                            </p>
                        </div>

                        <div className="space-y-4">
                            {/* Carte Horaires */}
                            <Card className="bg-card/60 backdrop-blur-sm border-2 border-border/40
                                       hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10
                                       transition-all duration-300">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-primary">
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            <Clock size={22} />
                                        </div>
                                        Horaires
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-semibold text-foreground text-lg">9h - 17h</p>
                                </CardContent>
                            </Card>

                            {/* Carte Entrée */}
                            <Card className="bg-card/60 backdrop-blur-sm border-2 border-border/40
                                       hover:border-secondary/50 hover:shadow-xl hover:shadow-secondary/10
                                       transition-all duration-300">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-secondary">
                                        <div className="p-2 bg-secondary/10 rounded-lg">
                                            <UserCheck size={22} />
                                        </div>
                                        Entrée
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-semibold text-foreground text-lg">Gratuite</p>
                                    <p className="text-muted-foreground text-sm">Inscription recommandée en ligne</p>
                                </CardContent>
                            </Card>

                            {/* Carte Accessibilité */}
                            <Card className="bg-card/60 backdrop-blur-sm border-2 border-border/40
                                       hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10
                                       transition-all duration-300">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-primary">
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            <Accessibility size={22} />
                                        </div>
                                        Accessibilité
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3 text-sm">
                                    <p className="text-muted-foreground leading-relaxed">
                                        Des agents accompagnent les personnes en situation de handicap
                                        pour leur permettre de profiter pleinement de l'expérience.
                                    </p>
                                    <div className="pt-2 border-t border-border/40">
                                        <p className="text-foreground">
                                            <span className="font-semibold">Stationnement :</span>{" "}
                                            Places PMR disponibles
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Prochain événement */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Card className="bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5  shadow-xl border-2 border-border/40">
                                    <CardHeader>
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                            <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                                            Prochain événement
                                        </span>
                                        </div>
                                        <CardTitle className="text-2xl">{nextEvent.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <Calendar size={20} className="text-primary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-lg">{nextEvent.date}</p>
                                                <p className="text-sm text-muted-foreground">9h - 17h</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <MapPin size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold">{nextEvent.location}</p>
                                                <p className="text-sm text-muted-foreground">{nextEvent.address}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Train size={20} className="text-primary mt-0.5 flex-shrink-0" />
                                            <p className="text-sm text-muted-foreground leading-relaxed">{nextEvent.access}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </motion.div>
            </div>
                {/* Section droite - Infos pratiques et prochain événement */}

        </section>
    );
};