import { Hero } from "@/components/sections/hero";
import { AboutUs } from "@/components/sections/about-us";
import { RealEstateProposal } from "@/components/sections/real-estate-proposal";
import { MissionVision } from "@/components/sections/mission-vision";
import { CurrentProjects } from "@/components/sections/current-projects";
import { CompletedProjects } from "@/components/sections/completed-projects";
import { Prototypes } from "@/components/sections/prototypes";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <AboutUs />
      <RealEstateProposal />
      <MissionVision />
      <CurrentProjects />
      <CompletedProjects />
      <Prototypes />
      <Contact />
      <Footer />
    </main>
  );
}
