"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { motion } from "framer-motion";

export const HeroSection = () => {
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
        <section className="w-full relative overflow-hidden">
            {/* Navbar flottante */}
            <div
                className={`fixed top-0 left-0 right-0 z-50 pt-5 transition-transform duration-300 ease-in-out
                ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
            >
                <Navbar />
            </div>

            {/* Background geometric accents */}
            <div className="absolute inset-0 dot-pattern opacity-40 -z-10" />
            <div className="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[100px] -z-10" />
            <div className="absolute -bottom-20 -left-32 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[100px] -z-10" />

            {/* Geometric decorative elements */}
            <motion.div
                className="absolute top-32 right-[15%] w-16 h-16 border-2 border-primary/15 rounded-lg -z-10"
                animate={{ rotate: [0, 90, 180, 270, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute bottom-48 left-[10%] w-8 h-8 bg-secondary/10 rounded-full -z-10"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-[40%] left-[5%] w-3 h-3 bg-accent/20 rounded-full -z-10"
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="container grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-28 pt-44 md:pt-52">
                <div className="text-center space-y-8 max-w-4xl">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-widest bg-primary/8 px-5 py-2.5 rounded-full border border-primary/15">
                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                            Mars 2026
                        </span>
                    </motion.div>

                    {/* Titre principal */}
                    <motion.div
                        className="max-w-screen-md mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tighter">
                            JO 2026
                        </h1>
                        <h2 className="mt-3 text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                            {"Trouver "}
                            <span className="text-gradient">
                                sa force
                            </span>
                            {","}
                            <br className="hidden sm:block" />
                            {" révéler son avenir"}
                        </h2>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        className="max-w-screen-sm mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Une journée pour découvrir ton potentiel, clarifier ton projet et
                        rencontrer ceux qui peuvent t'accompagner vers l'avenir.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 items-center justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                    >
                        <Button
                            asChild
                            size="lg"
                            className="w-full sm:w-auto font-bold text-base px-8 py-6 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
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
                            asChild
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-auto font-bold text-base px-8 py-6 rounded-full border-2 border-foreground/15 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                        >
                            <Link href="#about">
                                En savoir plus
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                {/* Video Section */}
                <motion.div
                    className="relative group mt-10 w-full max-w-5xl"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {/* Glow effect behind video */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 gradient-border">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full rounded-2xl"
                            src="/video.MOV"
                        />
                    </div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="mt-8"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-6 h-6 text-muted-foreground/40" />
                </motion.div>
            </div>
        </section>
    );
};
