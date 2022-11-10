import { EmojiText } from "../EmojiText";
import Heading from "../Heading/Heading";
import { Container } from "./styles";
import { SkillSlider } from "../Skillslider/index";
import { useRequest } from "../../contexts/request";
export function SkillsSection() {
  return (
    <Container>
      <EmojiText txt="🧑‍💻 Skills" />
      <Heading text="Tecnologias e habilidades" />

      <div className="content">
        <SkillSlider
          skills={useRequest().skills.front}
          direction={true}
          size={useRequest().skills.front.length}
          title="Front End"
        />
        <SkillSlider
          skills={useRequest().skills.back}
          direction={false}
          size={useRequest().skills.back.length}
          title="Back End"
        />
      </div>
    </Container>
  );
}
