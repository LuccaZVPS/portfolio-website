import { useEffect } from "react";
import { scrollAnimation } from "../../functions/scrollAnimation";
import { EmojiText } from "../EmojiText";
import Heading from "../Heading/Heading";
import { Container } from "./styles";

export function AboutSection() {
  useEffect(() => {
    scrollAnimation("hidden-about", "visible-about", 350);
  }, []);
  return (
    <Container>
      <div className="about-img">
        <div className="img"></div>
      </div>
      <div className="about-content">
        <EmojiText txt="🧐 Sobre mim" />
        <Heading text="Lucca Zavarize Pereira Santos" />
        <ul className="hidden-about" id="about">
          <li>👋 Hello world, pode me chamar apenas de Henrique. Prazer!</li>
          <li>
            👨‍💻 Há mais de 2 anos desenvolvendo e programando interfaces com
            JavaScript, ReactJS e Typescript.
          </li>
          <li>
            🎓 Graduado em Análise e Desenvolvimento de Sistemas pela Fatec de
            São José dos Campos.
          </li>
          <li>
            💡 Interesses em desenvolvimento Front-end com React JS, React
            Native, Vue JS e UX/UI Design.
          </li>
          <li>🚀 Tentando ser um pouquinho melhor do que ontem todos dias.</li>
        </ul>
      </div>
    </Container>
  );
}
