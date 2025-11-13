"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {icons, Star} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import {Icon} from "@/components/ui/icon";
import {Marquee} from "@devnomic/marquee";
import {SponsorsSection} from "@/components/layout/sections/sponsors";

interface ReviewProps {
    image: string;
    name: string;
    role: string;
    comment: string;
}

const reviewList: ReviewProps[] = [
    {
        image: "/testimonials/sarah.jpg",
        name: "Sarah",
        role: "Participante",
        comment:
            "Grâce aux JO, j'ai découvert une formation qui correspond vraiment à mes envies. Je repars avec plus de confiance en moi.",
    },
    {
        image: "/testimonials/kevin.jpg",
        name: "Kévin",
        role: "Étudiant en BTS",
        comment:
            "J'ai pu rencontrer des mentors et poser toutes mes questions sur mon orientation. Ça m'a aidé à voir plus clair dans mon avenir.",
    },
    {
        image: "/testimonials/mme-dupont.jpg",
        name: "Mme Dupont",
        role: "Responsable RH",
        comment:
            "En tant que partenaire, j'ai été impressionné par l'énergie des jeunes et la qualité des ateliers. C'est un événement qui a du sens.",
    },
    {
        image: "/testimonials/thomas.jpg",
        name: "Thomas",
        role: "Lycéen",
        comment:
            "J'étais perdu pour mon orientation, mais grâce aux ateliers et aux échanges, j'ai trouvé ma voie. Merci aux JO !",
    },
    {
        image: "/testimonials/marie.jpg",
        name: "Marie",
        role: "En reconversion",
        comment:
            "Une journée inspirante qui m'a permis de rencontrer des professionnels et de découvrir de nouvelles opportunités de carrière.",
    },
    {
        image: "/testimonials/ahmed.jpg",
        name: "Ahmed",
        role: "Entrepreneur",
        comment:
            "Les JO m'ont donné les clés pour lancer mon projet. J'ai rencontré des mentors incroyables et obtenu des conseils précieux.",
    },
];

const experienceImages = [
    {
        src: "/demo-img.jpg",
        alt: "Session de networking",
        label: "ENTREPRENDRE",
    },
    {
        src: "/demo-img.jpg",
        alt: "Session de mentoring",
        label: "ENTREPRENDRE",
    },
    {
        src: "/demo-img.jpg",
        alt: "Conférence",
        label: "ENTREPRENDRE",
    },
    {
        src: "/demo-img.jpg",
        alt: "Conférence",
        label: "ENTREPRENDRE",
    },
    {
        src: "/demo-img.jpg",
        alt: "Conférence",
        label: "ENTREPRENDRE",
    },
    {
        src: "/demo-img.jpg",
        alt: "Conférence",
        label: "ENTREPRENDRE",
    },
];

export const TestimonialSection = () => {
    return (
        <section id="testimonials" className="py-24 sm:py-32 relative overflow-hidden">
            {/* Effets de fond */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

            <div className="container">
                {/* En-tête de section */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full inline-block mb-4">
            Retour d'expérience
          </span>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Ils témoignent
                    </h2>
                </motion.div>

                {/* Carousel de témoignages */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                >
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full max-w-6xl mx-auto mb-20"
                    >
                        <CarouselContent className="-ml-4">
                            {reviewList.map((review, index) => (
                                <CarouselItem
                                    key={review.name}
                                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                                >
                                    <Card className="bg-card/60 backdrop-blur-sm border border-border/40 h-full
                                 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                                        <CardContent className="pt-6">
                                            {/* Étoiles */}
                                            <div className="flex gap-1 mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="size-4 fill-yellow-400 text-yellow-400"
                                                    />
                                                ))}
                                            </div>

                                            {/* Commentaire */}
                                            <p className="text-muted-foreground leading-relaxed mb-6 min-h-[80px]">
                                                "{review.comment}"
                                            </p>

                                            {/* Profil */}
                                            <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                                                <Avatar className="w-12 h-12 border-2 border-primary/20">
                                                    <AvatarImage src={review.image} alt={review.name} />
                                                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                                                        {review.name.charAt(0)}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <CardTitle className="text-base font-semibold">
                                                        {review.name}
                                                    </CardTitle>
                                                    <CardDescription className="text-sm">
                                                        {review.role}
                                                    </CardDescription>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-center gap-2 mt-8">
                            <CarouselPrevious className="relative left-0 translate-y-0" />
                            <CarouselNext className="relative right-0 translate-y-0" />
                        </div>
                    </Carousel>
                </motion.div>

                {/* Section "Vivez de nombreuses expériences" */}
                <div className="mt-32 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                            Vivez de nombreuses expériences et rencontrez{" "}
                            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                              des professionnels
            </span>
                        </h3>
                    </div>

                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full max-w-6xl mx-auto"
                    >
                        <CarouselContent className="-ml-4">
                            {experienceImages.map((image, index) => (
                                <CarouselItem
                                    key={index}
                                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                                >
                                    <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer
                                  transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Boutons de navigation */}
                        <div className="flex justify-center gap-2 mt-8">
                            <CarouselPrevious className="relative left-0 translate-y-0
                                       bg-primary/10 hover:bg-primary hover:text-white
                                       transition-all duration-300 hover:scale-110" />
                            <CarouselNext className="relative right-0 translate-y-0
                                   bg-primary/10 hover:bg-primary hover:text-white
                                   transition-all duration-300 hover:scale-110" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};