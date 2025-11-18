"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {Navbar} from "@/components/layout/navbar";

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
        <section className="w-full">
            {/* Navbar flottante */}
            <div
                className={`fixed top-0 left-0 right-0 z-50 pt-5 transition-transform duration-300 ease-in-out
                ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <Navbar />
            </div>

            <div className="container grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32 pt-52 md:pt-60">
                <div className="text-center space-y-8">
                    <div className="max-w-screen-md mx-auto text-center">
                        <h1 className="mt-2 text-4xl md:text-6xl font-bold leading-tight">
                            JO 2026
                        </h1>
                        <h2 className="mt-2 text-4xl md:text-6xl font-bold leading-tight">
                            {"Trouver "}
                            <span className="text-transparent px-2 bg-gradient-to-r from-primary to-secondary bg-clip-text">
                        sa force
                    </span>
                            {", révéler son avenir"}
                        </h2>
                    </div>

                    <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
                        Une journée pour découvrir ton potentiel, clarifier ton projet et rencontrer ceux qui peuvent t'accompagner vers l'avenir.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                        <Button
                            asChild
                            variant="secondary"
                            className="w-5/6 md:w-auto font-bold text-white group"
                        >
                            <Link
                                href="#contact"
                                className="flex items-center gap-2"
                            >
                                <span>Je m'inscris</span>
                                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>

                        <Button
                            className="w-5/6 md:w-auto font-bold bg-neutral-100 text-black hover:bg-neutral-400 hover:text-white"
                        >
                            Nous soutenir
                        </Button>
                    </div>
                </div>

                <div className="relative group mt-14 w-full">
                    <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-full mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>

                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full md:w-[1200px] mx-auto rounded-lg relative leading-none border border-t-2 border-secondary border-t-primary/30"
                        src="/video2.mp4"
                    />

                    <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
                </div>
            </div>
        </section>
    );
};