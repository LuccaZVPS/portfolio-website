import { useEffect } from "react";
import * as styled from "./styles";
type props = {
  text: string;
};
export default function Heading(props: props): JSX.Element {
  const time = props.text.length > 20 ? "1s" : "0.6s"
  useEffect(() => {
    window.addEventListener("scroll", () => {
      var hiddenHeadings = document.querySelectorAll(".hidden");
      for (let index = 0; index < hiddenHeadings.length; index++) {
        var windowHeight = window.innerHeight;
        var revealTop = hiddenHeadings[index].getBoundingClientRect().top;
        var reavealPoint = 100;

        if (revealTop < windowHeight - reavealPoint) {
          hiddenHeadings[index].className = "visible";
        } else {
          hiddenHeadings[index].className = "hidden";
        }
      }
    });
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
