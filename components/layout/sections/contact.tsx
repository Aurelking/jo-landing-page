"use client";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
    firstName: z.string().min(2, "Le nom doit contenir au moins 2 caractères").max(255),
    lastName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères").max(255),
    email: z.string().email("Email invalide"),
    message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);

        try {
            const response = await fetch('api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            toast({
                title: "Message envoyé !",
                description: "Nous vous répondrons dans les plus brefs délais.",
            });

            form.reset();
        } catch (error) {
            console.error('Erreur:', error);
            toast({
                title: "Erreur",
                description: "Une erreur est survenue. Veuillez réessayer.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="contact" className="container py-24 sm:py-32">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <div className="mb-4">
                        <h2 className="text-lg text-primary mb-2 tracking-wider">
                            Contact
                        </h2>

                        <h2 className="text-3xl md:text-4xl font-bold">Contactez-nous</h2>
                    </div>
                    <p className="mb-8 text-muted-foreground lg:w-5/6">
                        Une question sur l'événement ? Une envie de devenir bénévole ou partenaire ? Notre équipe est disponible pour vous répondre.
                    </p>

                    <div className="flex flex-col gap-4">
                        <div>
                            <div className="flex gap-2 mb-1">
                                <Phone />
                                <div className="font-bold">Appelez-nous</div>
                            </div>
                            <div>+33 7 51 15 28 20</div>
                        </div>

                        <div>
                            <div className="flex gap-2 mb-1">
                                <Mail />
                                <div className="font-bold">Email</div>
                            </div>
                            <div>orientationjdn@gmail.com</div>
                        </div>
                    </div>
                </div>

                <Card className="bg-muted/60 dark:bg-card">
                    <CardHeader className="text-primary text-2xl"> </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="grid w-full gap-4"
                            >
                                <div className="flex flex-col md:!flex-row gap-8">
                                    <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel>Nom</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Dupont" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel>Prénom</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Jean" {...field} />
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
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    placeholder="jean.dupont@exemple.com"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    rows={5}
                                                    placeholder="Votre message..."
                                                    className="resize-none"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button type="submit" className="mt-4" disabled={isSubmitting}>
                                    {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                    <CardFooter></CardFooter>
                </Card>
            </section>
        </section>
    );
};