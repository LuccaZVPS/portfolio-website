import { AboutSection } from "../AboutSection";
import { ContactSession } from "../ContactSession";
import { Footer } from "../Footer";
import LandingSection from "../landingSection/landingSection";
import ParticlesBackground from "../particlesBackground/particlesBackground";
import { ProjectsSession } from "../ProjectsSession";
import { SkillsSection } from "../SkillsSection";
import { Container } from "./styles";

export function Wrapper() {
  return (
    <Container>
      <ParticlesBackground />
      <LandingSection />
      <AboutSection />
      <ProjectsSession />
      <SkillsSection />
      <ContactSession />
      <Footer />
    </Container>
  );
}
