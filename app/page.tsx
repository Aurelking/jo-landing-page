import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { ProgrammesSection } from "@/components/layout/sections/ProgrammesSection";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";

import {AboutSection} from "@/components/layout/sections/about";

export const metadata = {
  title: "orientation-JDN",
  description: "Site d'information sur les journees d'orientation",
  openGraph: {
    type: "website",
    url: "",
    title: "orientation-JDN",
    description: "Site d'information sur les journees d'orientation",
    images: [
      {
        url: "/img.png",
        width: 1200,
        height: 630,
        alt: "orientation-JDN",
      },
    ],
  },

};

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <ProgrammesSection />
        <AboutSection/>
        {/*<TestimonialSection />*/}
      <ContactSection />
      <FooterSection />
    </>
  );
}
