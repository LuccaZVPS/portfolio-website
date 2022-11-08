import * as styled from "./styles";
import { BsArrowDown } from "react-icons/bs";
export default function LandingSection(): JSX.Element {
  const scroll = () => {
    const element = document.getElementById("about");
    const elementRect = element?.getBoundingClientRect();
    if (!elementRect) {
      return;
    }
    const absoluteElementTop = elementRect.top + window.pageYOffset;
    const middle = absoluteElementTop - window.innerHeight / 2;
    window.scrollTo(0, middle);
  };
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
        <a href="#abc" onClick={scroll}>
          Sobre Mim <BsArrowDown />
        </a>
      </styled.content>
    </styled.container>
  );
}
