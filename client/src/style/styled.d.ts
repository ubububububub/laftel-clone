import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      body: string;
      footer: string;
      white: string;
      cream: string;
      black: string;
      lightBlack: string;
      gray: string;
      lightGray: string;
      purple: string;
      hoverPurPle: string;
      lightPurple: string;
      hoverLightPurPle: string;
      membership: string;
      inputCursor: string;
      invalid: string;
    };
  }
}
