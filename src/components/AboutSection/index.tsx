import { useRequest } from "../../contexts/request";
import { EmojiText } from "../EmojiText";
import Heading from "../Heading/Heading";
import { Container } from "./styles";

export function AboutSection() {
  return (
    <Container id="about">
      <div className="about-img">
        <img src={"https://api-lucca.netlify.app/eu.jpeg"} alt="" />
      </div>
      <div className="about-content">
        <EmojiText txt="🧐 Sobre mim" />
        <Heading text="Lucca Zavarize Pereira Santos" />
        <ul>
          {useRequest().about.map((txt) => (
            <li key={txt}>{txt}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
