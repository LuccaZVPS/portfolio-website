import { useEffect } from "react";
import * as styled from "./styles";
import CreateCanvasParticles from "../../functions/createCanvasParticles";
export default function ParticlesBackground() {
  useEffect(() => {
    CreateCanvasParticles();
  }, []);
  return <styled.container id="canvas1"></styled.container>;
}
