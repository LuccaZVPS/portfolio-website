import { useEffect, useRef } from "react";
import { scrollAnimation } from "../../functions/scrollAnimation";

import { Container } from "./styles";
interface props {
  direction: boolean;
  size: number;
  title: string;
  skills: Array<Array<string>>;
}
export const SkillSlider = ({ direction, size, title, skills }: props) => {
  const carrousel = useRef<HTMLDivElement | null>(null);
  const list = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    infiniteSlider();
    scrollAnimation("hidden-about", "visible-skills", 300);
  });

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
      if (direction) {
        list2.style.left = ` ${width}px`;
      } else {
        list2.style.right = ` ${width}px`;
      }
    };

    const moveFirst = () => {
      x -= speed;
      if (width >= Math.abs(x) && list.current) {
        if (direction) {
          list.current.style.left = `${x}px`;
        } else {
          list.current.style.right = `${x}px`;
        }
      } else {
        x = width;
      }
      window.requestAnimationFrame(moveFirst);
    };

    const moveSecond = () => {
      x2 -= speed;
      if (width >= Math.abs(x2) && list2) {
        if (direction) {
          list2.style.left = `${x2}px`;
        } else {
          list2.style.right = `${x2}px`;
        }
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
    <Container className="hidden-about" length={size}>
      <h3>{title}</h3>
      <div className="front" ref={carrousel}>
        <div className="imgs-tech" ref={list}>
          {skills.map((skill) => (
            <div key={skill[0]}>
              <img src={"http://localhost:3000" + skill[1]} alt="" />
              <p>{skill[0]}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
