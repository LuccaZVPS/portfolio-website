import * as styled from "./styles";
import ParticlesBackground from "../particlesBackground/particlesBackground";
import { BsArrowDown } from "react-icons/bs";
export default function LandingSection(): JSX.Element {
  return (
    <styled.container>
      <styled.content>
        <styled.name>
          <h1>
            <span>
              <i>Lucca</i>
            </span>{" "}
            <i>Zavarize</i>
          </h1>
        </styled.name>
        <styled.description>
          <p>Desenvolvedor web fullstack</p>
        </styled.description>
        <a href="#about">
          Sobre Mim <BsArrowDown />
        </a>
      </styled.content>
    </styled.container>
  );
}
