"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock } from "lucide-react";

interface EventProps {
    time: string;
    title: string;
    description: string;
    type: "atelier" | "job-dating" | "decouverte" | "rencontre";
}

interface CityEventProps {
    city: string;
    date: string;
    location: string;
    events: EventProps[];
}

const getEventBadgeColor = (type: string) => {
    switch (type) {
        case "atelier":
            return "bg-pink-100 text-pink-700 hover:bg-pink-200";
        case "job-dating":
            return "bg-yellow-100 text-yellow-700 hover:bg-yellow-200";
        case "decouverte":
            return "bg-purple-100 text-purple-700 hover:bg-purple-200";
        case "rencontre":
            return "bg-orange-100 text-orange-700 hover:bg-orange-200";
        default:
            return "bg-blue-100 text-blue-700 hover:bg-blue-200";
    }
};

const nextEvent: CityEventProps = {
    city: "Marseille",
    date: "24 janvier 2026",
    location: "Palais du Pharo",
    events: [
        {
            time: "09h30 - 10h00",
            title: "Fais bouger tes lignes et propulse ton avenir",
            description: "Industrie et transport au féminin",
            type: "atelier",
        },
        {
            time: "09h30 - 12h30",
            title: "Découverte de centres de formation",
            description: "Découvrez de façon originale les centres de formation",
            type: "decouverte",
        },
        {
            time: "09h30 - 13h00",
            title: "Job dating",
            description: "Forum emploi, rencontre du Réseau pour l'emploi",
            type: "job-dating",
        },
        {
            time: "10h00 - 10h30",
            title: "Les idées reçues sur la reconversion",
            description: "Atelier sur les préjugés de la reconversion professionnelle",
            type: "atelier",
        },
        {
            time: "11h30 - 12h00",
            title: "Les mesures d'adaptation aux postes",
            description: "Comprendre les aménagements possibles",
            type: "atelier",
        },
        {
            time: "11h30 - 12h00",
            title: "Mon métier, ma santé, mon avenir",
            description: "Prendre soin de soi dans sa carrière",
            type: "atelier",
        },
        {
            time: "12h30 - 17h30",
            title: "Découverte de centres de formation",
            description: "Découvrez de façon originale les centres de formation",
            type: "decouverte",
        },
        {
            time: "13h00 - 13h30",
            title: "Construire des réponses pour favoriser votre recherche d'emploi",
            description: "Optimisez votre candidature",
            type: "atelier",
        },
        {
            time: "13h30 - 14h00",
            title: "Construire son profil numérique professionnel",
            description: "Présence en ligne et personal branding",
            type: "atelier",
        },
        {
            time: "13h30 - 17h30",
            title: "Job dating",
            description: "Forum emploi, rencontre, repartez avec votre plan d'action",
            type: "job-dating",
        },
        {
            time: "14h00 - 14h30",
            title: "Attractivité des métiers de l'énergie",
            description: "Découvrir les opportunités du secteur",
            type: "atelier",
        },
        {
            time: "14h00 - 14h30",
            title: "Les idées reçues sur la reconversion",
            description: "Atelier sur les préjugés de la reconversion professionnelle",
            type: "atelier",
        },
        {
            time: "14h30 - 15h00",
            title: "Diversité et inclusion",
            description: "Promouvoir l'égalité en entreprise",
            type: "atelier",
        },
    ],
};

// Fonction pour trier les événements par heure de début
const sortEventsByTime = (events: EventProps[]) => {
    return [...events].sort((a, b) => {
        const timeA = a.time.split(" - ")[0].replace("h", ":");
        const timeB = b.time.split(" - ")[0].replace("h", ":");
        return timeA.localeCompare(timeB);
    });
};

export const AgendaSection = () => {
    const sortedEvents = sortEventsByTime(nextEvent.events);
    // Dupliquer les événements pour un défilement infini
    const duplicatedEvents = [...sortedEvents, ...sortedEvents];

    return (
        <section id="agenda" className="container py-24 sm:py-32">
            {/* En-tête */}
            <div className="text-center mb-12">
                <h2 className="text-lg text-primary mb-2 tracking-wider">Programme</h2>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Prochain rendez-vous
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                    Découvre le programme complet de la journée
                </p>
            </div>

            {/* Card d'informations principales */}
            <Card className="max-w-4xl mx-auto mb-12 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-primary/20">
                                <Calendar className="text-primary" size={24} />
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-muted-foreground">Date</p>
                                <p className="font-semibold">{nextEvent.date}</p>
                            </div>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-border"></div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-primary/20">
                                <MapPin className="text-primary" size={24} />
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-muted-foreground">Lieu</p>
                                <p className="font-semibold">
                                    {nextEvent.city} - {nextEvent.location}
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Carrousel infini des événements */}
            <div className="relative overflow-hidden">
                <div className="flex animate-infinite-scroll hover:[animation-play-state:paused]">
                    {duplicatedEvents.map((event, index) => (
                        <div key={index} className="flex-shrink-0 w-[350px] px-3">
                            <Card className="h-full hover:shadow-lg transition-all">
                                <CardHeader className="pb-3">
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <Badge
                                            variant="secondary"
                                            className={getEventBadgeColor(event.type)}
                                        >
                                            {event.type === "atelier" && "Atelier"}
                                            {event.type === "job-dating" && "Job Dating"}
                                            {event.type === "decouverte" && "Découverte"}
                                            {event.type === "rencontre" && "Rencontre"}
                                        </Badge>
                                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                            <Clock size={12} />
                                            {event.time}
                                        </div>
                                    </div>
                                    <CardTitle className="text-base leading-tight line-clamp-2">
                                        {event.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                        {event.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>


            <style jsx>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 10s linear infinite;
        }
      `}</style>
        </section>
    );
};