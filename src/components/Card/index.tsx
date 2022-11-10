import { Terminal } from "../Terminal";
import { Container } from "./styles";
import { project } from "../../contexts/request";

export function Card({ img, link, title, txt, icons }: project) {
  return (
    <Terminal>
      <Container
        onClick={() => {
          window.open(link);
        }}
      >
        <h3>{title} </h3>
        <div className="desc">{txt}</div>
        <div className="tags">
          {icons.map((icon) => (
            <img src={"http://localhost:3000" + icon} key={icon} alt="" />
          ))}
        </div>
        <img
          className="image"
          src={"http://localhost:3000" + img}
          alt={title}
        />
      </Container>
    </Terminal>
  );
}
