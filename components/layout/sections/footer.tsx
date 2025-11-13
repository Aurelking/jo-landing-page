import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import LogoJo from "@/public/logo-jo";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";

export const FooterSection = () => {
    return (
        <footer id="footer" className="w-full py-16 sm:py-20">
            <div className="container bg-card border border-border/40 rounded-2xl p-10">
                <div className="grid md:grid-cols-3 gap-10 items-start">
                    {/* --- Logo et texte --- */}
                    <div className="flex flex-col items-start gap-4">
                        <Link href="/" className="flex items-center">
                            <LogoJo className="h-20 w-auto" />
                        </Link>
                    </div>

                    {/* --- Mentions légales --- */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-foreground">Mentions légales</h3>
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                            Mentions légales
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                            Politique de confidentialité
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                            Gestion des cookies
                        </Link>
                    </div>

                    {/* --- Réseaux sociaux --- */}
                    <div className="flex flex-col gap-3">
                        <h3 className="font-semibold text-foreground">
                            Suivez-nous sur les réseaux
                        </h3>

                        <div className="flex gap-4">
                            <Link
                                href="#"
                                className="w-9 h-9 rounded-full bg-foreground flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <Facebook className="w-4 h-4 text-background" />
                            </Link>
                            <Link
                                href="#"
                                className="w-9 h-9 rounded-full bg-foreground flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <Instagram className="w-4 h-4 text-background" />
                            </Link>
                            <Link
                                href="#"
                                className="w-9 h-9 rounded-full bg-foreground flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <Linkedin className="w-4 h-4 text-background" />
                            </Link>
                        </div>

                        <Link
                            href="#"
                            className="font-semibold underline underline-offset-2 text-sm hover:text-primary"
                        >
                            Abonnez-vous à notre newsletter
                        </Link>
                    </div>
                </div>

                <Separator className="my-6" />

                {/* --- Bas de page --- */}
                <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
                    <p>
                        © 2025 <span className="font-semibold text-foreground">JO</span> –{" "}
                        <span className="text-primary font-medium">
              Propulsées par Jeunesse des Nations
            </span>
                    </p>
                </div>
            </div>
        </footer>
    );
};
