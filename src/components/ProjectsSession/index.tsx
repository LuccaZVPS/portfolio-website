import { useEffect, useRef } from "react";
import { Card } from "../Card";
import { EmojiText } from "../EmojiText";
import Heading from "../Heading/Heading";

import { Container, CardsContainer } from "./styles";

export function ProjectsSession() {
  const div = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!div.current) {
        return;
      }
      var windowHeight = window.innerHeight;
      var revealTop = div.current.getBoundingClientRect().top;
      var reavealPoint = 400;

      if (revealTop < windowHeight - reavealPoint) {
        if (div.current.className) {
          div.current.classList.add("finished");
          var childs = div.current.childNodes;
          for (let index = 0; index < childs.length; index++) {
            setTimeout(() => {
              const card = childs[index] as HTMLDivElement;
              card.classList.add("show");
            }, 100 * index);
          }
        }
      }
    });
  }, []);
  return (
    <Container>
      <EmojiText txt="🔗 Portfólio" />
      <Heading text="Projetos" />
      <div className="slider">
        <CardsContainer ref={div}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardsContainer>
      </div>
    </Container>
  );
}
