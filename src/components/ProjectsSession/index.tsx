import { useEffect, useRef } from "react";
import { Card } from "../Card";
import { EmojiText } from "../EmojiText";
import Heading from "../Heading/Heading";
import { BsArrowRight } from "react-icons/bs";
import { Container, CardsContainer } from "./styles";
import { useRequest } from "../../contexts/request";

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
            // eslint-disable-next-line
            setTimeout(() => {
              const card = childs[index] as HTMLDivElement;
              card.classList.add("show");
              card.classList.remove("reverse-show");
            }, 100 * index);
          }
        }
      } else {
        if (div.current.className) {
          div.current.classList.add("finished");
          childs = div.current.childNodes;
          for (let index = 0; index < childs.length; index++) {
            setTimeout(() => {
              const card = childs[index] as HTMLDivElement;
              card.classList.remove("show");
              card.classList.add("reverse-show");
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
          {useRequest().projects.map((project) => (
            <Card
              img={project.img}
              link={project.link}
              title={project.title}
              txt={project.txt}
              key={project.title}
              icons={project.icons}
            />
          ))}
        </CardsContainer>
      </div>
      <div className="git">
        <a
          href="https://github.com/LuccaZVPS"
          target={"_blank"}
          rel={"noreferrer"}
        >
          Acessar GitHub <BsArrowRight />
        </a>
      </div>
    </Container>
  );
}
