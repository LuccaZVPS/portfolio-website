import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      secondary: string;
      background: string;
      txt: string;
      txt2: string;
      hover: string;
      hover2: string;
    };
  }
}
