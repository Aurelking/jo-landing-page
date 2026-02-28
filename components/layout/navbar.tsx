"use client";
import { Menu, X } from "lucide-react";
import React from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "../ui/navigation-menu";
import Link from "next/link";
import LogoJo from "@/public/logo-jo";
import { motion, AnimatePresence } from "framer-motion";

interface RouteProps {
    href: string;
    label: string;
}

const routeList: RouteProps[] = [
    {
        href: "#programmes",
        label: "Programmes",
    },
    {
        href: "#about",
        label: "A propos",
    },
    {
        href: "#contact",
        label: "Inscription",
    },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            {/* Navbar bar */}
            <div
                className="px-4 md:px-5 z-50 w-[92%] md:w-[70%] lg:w-[75%] lg:max-w-screen-lg mx-auto
                            flex justify-between items-center
                            rounded-full overflow-hidden
                            bg-card/70 backdrop-blur-xl border border-border/40
                            shadow-lg shadow-black/[0.03]
                            h-14 md:h-auto"
            >
                <Link href="/" className="flex items-center">
                    <LogoJo className="h-16 w-20 md:h-28 md:w-32" />
                </Link>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-foreground/5 transition-colors"
                    aria-label="Menu"
                >
                    {isOpen ? (
                        <X className="w-5 h-5 text-foreground" />
                    ) : (
                        <Menu className="w-5 h-5 text-foreground" />
                    )}
                </button>

                {/* Desktop navigation */}
                <NavigationMenu className="hidden lg:block">
                    <NavigationMenuList className="gap-1">
                        <NavigationMenuItem>
                            {routeList.map(({ href, label }) => (
                                <NavigationMenuLink key={href} asChild>
                                    <Link
                                        href={href}
                                        className="text-sm font-medium px-4 py-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-all duration-200"
                                    >
                                        {label}
                                    </Link>
                                </NavigationMenuLink>
                            ))}
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            {/* Mobile dropdown menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="lg:hidden w-[92%] mx-auto mt-2 z-50
                                   rounded-2xl bg-card/90 backdrop-blur-xl border border-border/40
                                   shadow-lg shadow-black/[0.05] overflow-hidden"
                    >
                        <nav className="flex flex-col py-2">
                            {routeList.map(({ href, label }, index) => (
                                <motion.div
                                    key={href}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05, duration: 0.2 }}
                                >
                                    <Link
                                        href={href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center px-5 py-3.5 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                                    >
                                        {label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
