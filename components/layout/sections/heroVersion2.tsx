"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {Navbar} from "@/components/layout/navbar";
import LogoJo from "@/public/logo-jo";

export const HeroSection = () => {
    const { theme } = useTheme();
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 50) {
                setShowNavbar(true);
            } else if (currentScrollY > lastScrollY) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", controlNavbar);

        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <section className="w-full min-h-screen bg-secondary relative overflow-hidden">
            {/* Navbar flottante avec animation */}
            <div
                className={`fixed top-0 left-0 right-0 z-50 pt-5 transition-transform duration-300 ease-in-out
                    ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <Navbar />
            </div>

            {/* Background avec vidéo */}
            <div className="absolute inset-0 z-0">
                {/* Background avec vidéo */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/video.mp4"
                />
                {/* Overlay pour meilleur contraste */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>
            </div>

            <div className="container relative z-10 lg:max-w-screen-xl mx-auto py-20 md:py-32 pt-32 md:pt-40">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Contenu texte - Gauche */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-2xl">
                                Trouver{" "}
                                <span className="text-transparent bg-gradient-to-r from-secondary via-secondary/80 to-primary bg-clip-text drop-shadow-lg">
                                    sa force
                                </span>
                                , révéler son avenir
                            </h1>

                            <div className="border-l-4 border-secondary pl-4 bg-black/30 backdrop-blur-sm py-3 pr-4 rounded-r-lg">
                                <p className="text-lg md:text-xl text-white/90 font-medium">
                                    Une journée pour découvrir ton potentiel, clarifier ton projet
                                    et rencontrer ceux qui peuvent t'accompagner vers l'avenir.
                                </p>
                            </div>
                        </div>

                        {/* Badge Coming Soon */}
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-secondary/20 to-primary/20
                                      border-2 border-secondary/50 rounded-full px-6 py-3 backdrop-blur-md shadow-lg">
                            <div className="relative">
                                <Play className="size-5 text-secondary" fill="currentColor" />
                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full animate-ping"></div>
                            </div>
                            <div>
                                <p className="text-xs text-white/70 font-medium uppercase tracking-wide">Événement prévu</p>
                                <p className="text-2xl font-bold bg-gradient-to-r from-secondary to-primary
                                           bg-clip-text text-transparent drop-shadow-lg">
                                    JANVIER 2026
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Images flottantes - Droite */}
                    <div className="relative h-[500px] lg:h-[600px] hidden lg:block">
                        {/* Logo en filigrane derrière les images */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-10 blur-sm">
                            <LogoJo className="w-full h-full" />
                        </div>

                        {/* Image principale centrale */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                      w-64 h-80 rounded-2xl overflow-hidden shadow-2xl
                                      border-4 border-secondary z-20
                                      hover:scale-105 hover:rotate-2 transition-all duration-300">
                            <Image
                                src="/cityimages/marseille.png"
                                alt="Main"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Image flottante top-right */}
                        <div className="absolute top-12 right-8 w-48 h-56 rounded-2xl overflow-hidden
                                      shadow-xl border-4 border-secondary/70 z-10
                                      hover:scale-105 hover:-rotate-2 transition-all duration-300
                                      animate-float">
                            <Image
                                src="/cityimages/nice.png"
                                alt="Float 1"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Cercle flottant top */}
                        <div className="absolute -top-4 right-1/3 w-32 h-32 rounded-full overflow-hidden
                                      shadow-xl border-4 border-white z-30
                                      hover:scale-110 transition-all duration-300
                                      animate-float-delayed">
                            <Image
                                src="/cityimages/avignon.png"
                                alt="Circle 1"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Cercle flottant bottom */}
                        <div className="absolute bottom-8 right-12 w-40 h-40 rounded-full overflow-hidden
                                      shadow-xl border-4 border-primary z-15
                                      hover:scale-110 transition-all duration-300
                                      animate-float">
                            <Image
                                src="/cityimages/toulon.png"
                                alt="Circle 2"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Effets de blur décoratifs avec secondary */}
                        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-secondary/40 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/30 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>

            {/* Animation CSS personnalisée */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }

                @keyframes float-delayed {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-15px);
                    }
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float-delayed 4s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};