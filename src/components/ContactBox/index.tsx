import { useEffect } from "react";
import { IconType } from "react-icons";
import { Terminal } from "../Terminal";
import { MdOutlineContentCopy } from "react-icons/md";
import { Container } from "./styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { scrollAnimation } from "../../functions/scrollAnimation";

interface ContactboxProps {
  title: string;
  txt: string;
  link: string;
  Icon: IconType;
}

export function Contactbox({ link, title, txt, Icon }: ContactboxProps) {
  useEffect(() => {
    scrollAnimation("hidden-box", "visible-box", 300);
  });
  const copy = () => {
    navigator.clipboard.writeText(txt);
    toast.success("Texto copiado", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div className="hidden-box">
      <Terminal>
        <Container>
          <Icon />
          <h3>{title}</h3>
          <p>{txt}</p>
          <button onClick={copy}>
            <MdOutlineContentCopy />
          </button>
        </Container>
      </Terminal>
    </div>
  );
}
