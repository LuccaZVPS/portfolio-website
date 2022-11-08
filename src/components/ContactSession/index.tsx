import { EmojiText } from "../EmojiText";
import Heading from "../Heading/Heading";
import { Container } from "./styles";

export function ContactSession() {
  return (
    <Container>
      <EmojiText txt="📬 Contact" />
      <Heading text="Contato" />
    </Container>
  );
}
