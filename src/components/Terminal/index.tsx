import { ReactNode } from "react";

import { Container } from "./styles";
interface props {
  children: ReactNode;
}
export function Terminal({ children }: props) {
  return (
    <Container>
      <div className="header">
        <div className="btns">
          <span className="red"></span>
          <span className="orange"></span>
          <span className="green"></span>
        </div>
      </div>

      {children}
    </Container>
  );
}
