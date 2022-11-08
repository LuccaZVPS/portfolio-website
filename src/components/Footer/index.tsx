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
        <div>
          <a href="" target={"_blank"}>
            <BsGithub />
          </a>
        </div>
        <div>
          <a href="" target={"_blank"}>
            <TfiLinkedin />
          </a>
        </div>
      </div>
    </Container>
  );
}
