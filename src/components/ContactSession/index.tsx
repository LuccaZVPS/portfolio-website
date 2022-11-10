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
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <EmojiText txt="📬 Contato" />
      <Heading text="Vamos conversar!" />
      <div className="slider">
        <div className="contact-container">
          <Contactbox
            Icon={HiOutlineMail}
            title={"E-mail"}
            txt={useRequest().contact.email}
            link=""
          />
          <Contactbox
            Icon={AiOutlineWhatsApp}
            title={"WhatsApp"}
            txt={useRequest().contact.number}
            link=""
          />
          <Contactbox
            Icon={AiFillLinkedin}
            title={"Linkedin"}
            txt={useRequest().contact.linkedin}
            link=""
          />
        </div>
      </div>
    </Container>
  );
}
