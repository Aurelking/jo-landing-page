import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import LogoJo from "@/public/logo-jo";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";

export const FooterSection = () => {
    return (
        <footer id="footer" className="w-full relative">
            <div className="section-divider" />

            <div className="container py-16 sm:py-20">
                <div className="bg-card border border-border/40 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                    {/* Subtle gradient accent at top */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30" />

                    <div className="grid md:grid-cols-3 gap-10 items-start">
                        {/* Logo */}
                        <div className="flex flex-col items-start gap-4">
                            <Link href="/" className="flex items-center">
                                <LogoJo className="h-16 w-auto" />
                            </Link>
                            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                                Les Journées d'Orientation, un événement par Jeunesse des Nations
                                pour la jeunesse d'aujourd'hui.
                            </p>
                        </div>

                        {/* Mentions légales */}
                        <div className="flex flex-col gap-3">
                            <h3 className="font-bold text-foreground text-sm uppercase tracking-wider">
                                Mentions légales
                            </h3>
                            <div className="flex flex-col gap-2">
                                {[
                                    "Mentions légales",
                                    "Politique de confidentialité",
                                    "Gestion des cookies",
                                ].map((text) => (
                                    <Link
                                        key={text}
                                        href="#"
                                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                    >
                                        {text}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Réseaux sociaux */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-foreground text-sm uppercase tracking-wider">
                                Suivez-nous
                            </h3>

                            <div className="flex gap-3">
                                {[
                                    { icon: Facebook, href: "#", label: "Facebook" },
                                    {
                                        icon: Instagram,
                                        href: "https://www.instagram.com/j0_jdn",
                                        label: "Instagram",
                                    },
                                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                                ].map(({ icon: IconComponent, href, label }) => (
                                    <Link
                                        key={label}
                                        href={href}
                                        target={href !== "#" ? "_blank" : undefined}
                                        className="w-10 h-10 rounded-xl bg-foreground/5 border border-border/40 flex items-center justify-center
                                                   hover:bg-primary hover:border-primary hover:text-white text-muted-foreground
                                                   transition-all duration-300"
                                        aria-label={label}
                                    >
                                        <IconComponent className="w-4 h-4" />
                                    </Link>
                                ))}
                            </div>

                            <Link
                                href="#"
                                className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors underline underline-offset-4 decoration-border hover:decoration-primary"
                            >
                                Abonnez-vous à notre newsletter
                            </Link>
                        </div>
                    </div>

                    <Separator className="my-8 bg-border/40" />

                    {/* Bottom */}
                    <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground gap-2">
                        <p>
                            © 2026{" "}
                            <span className="font-semibold text-foreground">JO</span> –{" "}
                            <span className="text-primary font-medium">
                                Propulsées par Jeunesse des Nations
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
