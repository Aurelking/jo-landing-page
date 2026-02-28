"use client";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Mail, Phone, ArrowRight, CalendarCheck, MapPin, Clock, CheckCircle2, PartyPopper } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

const formSchema = z.object({
    firstName: z.string().min(2, "Le nom doit contenir au moins 2 caractères").max(255),
    lastName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères").max(255),
    email: z.string().email("Email invalide"),
    phone: z.string().min(10, "Numéro de téléphone invalide").max(20),
});

export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [submittedName, setSubmittedName] = useState("");
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);

        try {
            const response = await fetch("api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

            setSubmittedName(values.lastName);
            setIsSuccess(true);
            form.reset();
        } catch (error) {
            console.error("Erreur:", error);
            toast({
                title: "Erreur",
                description: "Une erreur est survenue. Veuillez réessayer.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    function handleNewInscription() {
        setIsSuccess(false);
        setSubmittedName("");
    }

    return (
        <section id="contact" className="relative overflow-hidden">
            <div className="section-divider" />

            <div className="container py-24 sm:py-32">
                {/* Background */}
                <div className="absolute top-1/3 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10" />
                <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] -z-10" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/8 px-4 py-2 rounded-full border border-primary/12">
                            Inscription
                        </span>

                        <h2 className="text-4xl md:text-5xl font-extrabold mt-6 mb-4">
                            Inscris-
                            <span className="text-gradient">toi</span>
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-md">
                            Réserve ta place gratuitement pour les Journées d'Orientation 2026.
                            L'inscription est gratuite et recommandée pour garantir ta participation.
                        </p>

                        {/* Event recap */}
                        <div className="space-y-4 mb-8">
                            <motion.div
                                className="flex items-start gap-4 p-5 rounded-2xl bg-card/70 border border-border/40 hover:border-primary/20 transition-all duration-300"
                                whileHover={{ x: 4 }}
                            >
                                <div className="p-3 rounded-xl bg-primary/8">
                                    <CalendarCheck className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="font-bold text-foreground mb-1">
                                        Prochain événement
                                    </div>
                                    <div className="text-muted-foreground">
                                        Samedi 7 Mars 2026
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-4 p-5 rounded-2xl bg-card/70 border border-border/40 hover:border-secondary/20 transition-all duration-300"
                                whileHover={{ x: 4 }}
                            >
                                <div className="p-3 rounded-xl bg-secondary/8">
                                    <MapPin className="w-5 h-5 text-secondary" />
                                </div>
                                <div>
                                    <div className="font-bold text-foreground mb-1">Lieu</div>
                                    <div className="text-muted-foreground">
                                        Faculté Saint-Charles, Marseille
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-4 p-5 rounded-2xl bg-card/70 border border-border/40 hover:border-accent/20 transition-all duration-300"
                                whileHover={{ x: 4 }}
                            >
                                <div className="p-3 rounded-xl bg-accent/8">
                                    <Clock className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <div className="font-bold text-foreground mb-1">Horaires</div>
                                    <div className="text-muted-foreground">
                                        13h - 17h
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Contact info */}
                        <div className="space-y-3">
                            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                                Une question ?
                            </p>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Phone className="w-4 h-4 text-primary" />
                                <span>+33 7 51 15 28 20</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Mail className="w-4 h-4 text-secondary" />
                                <span>orientationjdn@gmail.com</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Form / Success */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7 }}
                    >
                        <Card className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl shadow-xl shadow-primary/5 overflow-hidden">
                            <div className="h-[2px] bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50" />

                            <AnimatePresence mode="wait">
                                {isSuccess ? (
                                    /* Success state */
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="px-8 py-16 flex flex-col items-center text-center"
                                    >
                                        {/* Animated check circle */}
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 200,
                                                damping: 15,
                                                delay: 0.1,
                                            }}
                                            className="relative mb-6"
                                        >
                                            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 300,
                                                        damping: 20,
                                                        delay: 0.3,
                                                    }}
                                                >
                                                    <CheckCircle2 className="w-10 h-10 text-accent" />
                                                </motion.div>
                                            </div>
                                            {/* Pulse ring */}
                                            <motion.div
                                                className="absolute inset-0 rounded-full border-2 border-accent/30"
                                                initial={{ scale: 1, opacity: 1 }}
                                                animate={{ scale: 1.8, opacity: 0 }}
                                                transition={{
                                                    duration: 1,
                                                    delay: 0.5,
                                                    repeat: 2,
                                                    ease: "easeOut",
                                                }}
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4, duration: 0.4 }}
                                        >
                                            <div className="flex items-center justify-center gap-2 mb-3">
                                                <PartyPopper className="w-5 h-5 text-primary" />
                                                <h3 className="text-2xl font-extrabold text-foreground">
                                                    Inscription confirmée !
                                                </h3>
                                            </div>
                                        </motion.div>

                                        <motion.p
                                            className="text-muted-foreground leading-relaxed max-w-sm mb-2"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.55, duration: 0.4 }}
                                        >
                                            Merci <span className="font-semibold text-foreground">{submittedName}</span> !
                                            Tu es bien inscrit(e) aux JO 2026.
                                        </motion.p>

                                        <motion.p
                                            className="text-sm text-muted-foreground/70 mb-8"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.65, duration: 0.4 }}
                                        >
                                            On se retrouve le 7 mars à la Faculté Saint-Charles !
                                        </motion.p>

                                        {/* Recap card */}
                                        <motion.div
                                            className="w-full max-w-xs bg-primary/5 border border-primary/10 rounded-xl p-5 mb-8 text-left"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.75, duration: 0.4 }}
                                        >
                                            <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">
                                                Récapitulatif
                                            </p>
                                            <div className="space-y-2.5 text-sm">
                                                <div className="flex items-center gap-2.5 text-foreground">
                                                    <CalendarCheck className="w-4 h-4 text-primary flex-shrink-0" />
                                                    <span>Samedi 7 Mars 2026</span>
                                                </div>
                                                <div className="flex items-center gap-2.5 text-foreground">
                                                    <Clock className="w-4 h-4 text-secondary flex-shrink-0" />
                                                    <span>13h - 17h</span>
                                                </div>
                                                <div className="flex items-center gap-2.5 text-foreground">
                                                    <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                                                    <span>Faculté Saint-Charles, Marseille</span>
                                                </div>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.9, duration: 0.4 }}
                                        >
                                            <Button
                                                variant="outline"
                                                className="rounded-xl border-border/50 hover:border-primary/30 hover:bg-primary/5"
                                                onClick={handleNewInscription}
                                            >
                                                Inscrire une autre personne
                                            </Button>
                                        </motion.div>
                                    </motion.div>
                                ) : (
                                    /* Form state */
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <CardHeader className="pb-2 pt-8 px-8">
                                            <h3 className="text-xl font-bold text-foreground">
                                                Formulaire d'inscription
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                Remplis le formulaire pour réserver ta place
                                            </p>
                                        </CardHeader>
                                        <CardContent className="px-8 pt-4">
                                            <Form {...form}>
                                                <form
                                                    onSubmit={form.handleSubmit(onSubmit)}
                                                    className="grid w-full gap-5"
                                                >
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                        <FormField
                                                            control={form.control}
                                                            name="firstName"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel className="text-sm font-semibold">
                                                                        Nom
                                                                    </FormLabel>
                                                                    <FormControl>
                                                                        <Input
                                                                            placeholder="Dupont"
                                                                            className="h-12 rounded-xl border-border/50 bg-background/50 focus:border-primary/40 transition-colors"
                                                                            {...field}
                                                                        />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                        <FormField
                                                            control={form.control}
                                                            name="lastName"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel className="text-sm font-semibold">
                                                                        Prénom
                                                                    </FormLabel>
                                                                    <FormControl>
                                                                        <Input
                                                                            placeholder="Jean"
                                                                            className="h-12 rounded-xl border-border/50 bg-background/50 focus:border-primary/40 transition-colors"
                                                                            {...field}
                                                                        />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </div>

                                                    <FormField
                                                        control={form.control}
                                                        name="email"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-sm font-semibold">
                                                                    Email
                                                                </FormLabel>
                                                                <FormControl>
                                                                    <Input
                                                                        type="email"
                                                                        placeholder="jean.dupont@exemple.com"
                                                                        className="h-12 rounded-xl border-border/50 bg-background/50 focus:border-primary/40 transition-colors"
                                                                        {...field}
                                                                    />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />

                                                    <FormField
                                                        control={form.control}
                                                        name="phone"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-sm font-semibold">
                                                                    Numéro de téléphone
                                                                </FormLabel>
                                                                <FormControl>
                                                                    <Input
                                                                        type="tel"
                                                                        placeholder="06 12 34 56 78"
                                                                        className="h-12 rounded-xl border-border/50 bg-background/50 focus:border-primary/40 transition-colors"
                                                                        {...field}
                                                                    />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />

                                                    <Button
                                                        type="submit"
                                                        size="lg"
                                                        className="mt-2 font-bold text-base rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 group h-12"
                                                        disabled={isSubmitting}
                                                    >
                                                        {isSubmitting ? (
                                                            <span className="flex items-center gap-2">
                                                                <motion.span
                                                                    animate={{ rotate: 360 }}
                                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                                    className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                                                                />
                                                                Inscription en cours...
                                                            </span>
                                                        ) : (
                                                            <span className="flex items-center gap-2">
                                                                Je m'inscris
                                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                            </span>
                                                        )}
                                                    </Button>
                                                </form>
                                            </Form>
                                        </CardContent>
                                        <CardFooter className="px-8 pb-6">
                                            <p className="text-xs text-muted-foreground/60">
                                                En vous inscrivant, vous acceptez d'être contacté(e) concernant les JO 2026.
                                            </p>
                                        </CardFooter>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
