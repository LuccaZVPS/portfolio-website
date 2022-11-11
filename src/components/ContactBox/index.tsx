import { useEffect } from "react";
import { IconType } from "react-icons";
import { Terminal } from "../Terminal";
import { Container } from "./styles";
import "react-toastify/dist/ReactToastify.css";
import { scrollAnimation } from "../../functions/scrollAnimation";
import { BsArrowRight } from "react-icons/bs";
import { toast } from "react-toastify";

interface ContactboxProps {
  title: string;
  txt: string;
  link: string;
  Icon: IconType;
  copy?: string;
}

export function Contactbox({ link, title, txt, Icon, copy }: ContactboxProps) {
  useEffect(() => {
    scrollAnimation("hidden-box", "visible-box", 250);
  });
  const handleClick = () => {
    if (copy) {
      navigator.clipboard.writeText(txt);

      toast.success(copy, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      window.open(link);
    }
  };
  return (
    <div className="hidden-box">
      <Terminal>
        <Container>
          <Icon />
          <h3>{title}</h3>
          <p>{txt}</p>
          <button onClick={handleClick}>
            Enviar mensagem <BsArrowRight />
          </button>
        </Container>
      </Terminal>
    </div>
  );
}
