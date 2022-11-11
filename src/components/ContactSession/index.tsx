import { Contactbox } from "../ContactBox";
import { EmojiText } from "../EmojiText";
import Heading from "../Heading/Heading";
import { Container } from "./styles";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineWhatsApp, AiFillLinkedin } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import { useRequest } from "../../contexts/request";
export function ContactSession() {
  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <EmojiText txt="📬 Contato" />
      <Heading text="Vamos conversar!" />
      <div className="slider">
        <div className="contact-container">
          <Contactbox
            Icon={HiOutlineMail}
            title={"E-mail"}
            txt={useRequest().contact.email[0]}
            link={useRequest().contact.email[1] ?? ""}
            copy={"Email copiado!"}
          />
          <Contactbox
            Icon={AiOutlineWhatsApp}
            title={"WhatsApp"}
            txt={useRequest().contact.number[0]}
            link={useRequest().contact.number[1]}
          />
          <Contactbox
            Icon={AiFillLinkedin}
            title={"Linkedin"}
            txt={useRequest().contact.linkedin[0]}
            link={useRequest().contact.linkedin[1]}
          />
        </div>
      </div>
    </Container>
  );
}
