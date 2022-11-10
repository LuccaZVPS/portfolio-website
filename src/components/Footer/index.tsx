import { TfiLinkedin } from "react-icons/tfi";
import { BsGithub } from "react-icons/bs";
import { Container } from "./styles";
import { BsArrowUp } from "react-icons/bs";
export function Footer() {
  return (
    <Container>
      <div>Copyright © Lucca Zavarize · 2022</div>
      <a href="#canvas1" className="top">
        <BsArrowUp />
      </a>

      <div className="social">
        <div
          onClick={() => {
            window.open("https://github.com/LuccaZVPS");
          }}
        >
          <BsGithub />
        </div>
        <div
          onClick={() => {
            window.open("https://www.linkedin.com/in/lucca-santos-12b21721b/");
          }}
        >
          <TfiLinkedin />
        </div>
      </div>
    </Container>
  );
}
