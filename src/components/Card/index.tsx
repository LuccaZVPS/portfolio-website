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
            <img
              src={(process.env.REACT_APP_API_DOMAIN as string) + icon}
              key={icon}
              alt=""
            />
          ))}
        </div>
        <img
          className="image"
          src={(process.env.REACT_APP_API_DOMAIN as string) + img}
          alt={title}
        />
      </Container>
    </Terminal>
  );
}
