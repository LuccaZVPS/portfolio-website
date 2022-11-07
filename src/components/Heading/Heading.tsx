import { useEffect } from "react";
import { scrollAnimation } from "../../functions/scrollAnimation";
import * as styled from "./styles";
type props = {
  text: string;
};
export default function Heading(props: props): JSX.Element {
  const time = props.text.length > 20 ? "1.4s" : "0.6s";
  useEffect(() => {
    scrollAnimation("hidden", "visible", 20);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <styled.container characters={props.text.length} time={time}>
      <h2 className="hidden" id={props.text}>
        {props.text}
      </h2>
    </styled.container>
  );
}
