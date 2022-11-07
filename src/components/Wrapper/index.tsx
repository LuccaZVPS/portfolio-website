import { AboutSection } from "../AboutSection";
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
    </Container>
  );
}
