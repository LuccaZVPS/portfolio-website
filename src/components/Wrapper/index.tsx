import LandingSection from "../landingSection/landingSection";
import ParticlesBackground from "../particlesBackground/particlesBackground";
import { ProjectsSession } from "../ProjectsSession";
import { SkillsSection } from "../SkillsSection";
import { Container } from "./styles";

export function Wrapper() {
  return (
    <Container>
      <ParticlesBackground/>
      <LandingSection />
      <ProjectsSession />
      <SkillsSection/>
    </Container>
  );
}
