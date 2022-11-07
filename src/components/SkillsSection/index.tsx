import { EmojiText } from "../EmojiText";
import Heading from "../Heading/Heading";
import { Container } from "./styles";
import { useEffect, useRef } from "react";
export function SkillsSection() {
  const carrousel = useRef<HTMLDivElement | null>(null);
  const list = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    infiniteSlider();
  }, []);

  const infiniteSlider = () => {
    if (!carrousel.current || !list.current) {
      return;
    }

    const speed = 1;
    const width = list.current.offsetWidth;
    let x = 0;
    let x2 = width;
    let list2: HTMLDivElement;
    const clone = () => {
      list2 = list.current?.cloneNode(true) as HTMLDivElement;
      carrousel.current?.appendChild(list2);
      list2.style.right = ` ${width}px`;
    };

    const moveFirst = () => {
      x -= speed;
      if (width >= Math.abs(x) && list.current) {
        list.current.style.right = `${x}px`;
      } else {
        x = width;
      }
      window.requestAnimationFrame(moveFirst);
    };

    const moveSecond = () => {
      x2 -= speed;
      if (width >= Math.abs(x2) && list2) {
        list2.style.right = `${x2}px`;
      } else {
        x2 = width;
      }
      window.requestAnimationFrame(moveSecond);
    };

    clone();
    window.requestAnimationFrame(moveFirst);
    window.requestAnimationFrame(moveSecond);
  };
  return (
    <Container>
      <EmojiText txt="🧑‍💻 Skills" />
      <Heading text="Tecnologias e habilidades" />

      <div className="content">
        <h3>Front End</h3>
        <div className="front">
          <div className="imgs-tech">
            <div>
              <img src="/ts.svg" alt="" />
              <p>TypeScript</p>
            </div>
            <div>
              <img src="/react.svg" alt="" />
              <p>React</p>
            </div>
            <div>
              <img src="/redux.svg" alt="" />
              <p>Redux</p>
            </div>
            <div>
              <img src="/styled.svg" alt="" />
              <p>Styled</p>
            </div>
            <div>
              <img src="/sass.svg" alt="" />

              <p>Sass</p>
            </div>
            <div>
              <img src="/html.svg" alt="" />

              <p>HTML5</p>
            </div>
            <div>
              <img src="/git.svg" alt="" />

              <p>Git</p>
            </div>
          </div>
        </div>
        <h3>Back End</h3>

        <div className="back" ref={carrousel}>
          <div className="imgs-tech" ref={list}>
            <div>
              <img src="/npm.svg" alt="" />

              <p>NPM</p>
            </div>
            <div>
              <img src="/mysql.svg" alt="" />

              <p>MySQL</p>
            </div>
            <div>
              <img src="/node.svg" alt="" />

              <p>Node</p>
            </div>
            <div>
              <img src="/next.svg" alt="" />

              <p>Next</p>
            </div>
            <div>
              <img src="/mongodb.svg" alt="" />

              <p>Mongodb</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
