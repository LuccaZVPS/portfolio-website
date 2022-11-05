import { Container } from "./styles";

interface EmojiTextProps {
  txt: string;
}

export function EmojiText({ txt }: EmojiTextProps) {
  return <Container>{txt}</Container>;
}
