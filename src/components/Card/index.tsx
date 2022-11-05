import { Terminal } from "../Terminal";
import { Container } from "./styles";
import { SiSocketdotio, SiReact, SiTypescript } from "react-icons/si";
export function Card() {
  return (
    <Terminal>
      <Container>
        <h3>Pomodoro </h3>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem ipsam
          at, assumenda esse inventore error quidem harum! Necessitatibus harum
          ipsum eos?
        </div>
        <div className="tags">
          <SiSocketdotio />
          <SiReact />
          <SiTypescript />
        </div>
        <div className="image"></div>
      </Container>
    </Terminal>
  );
}
