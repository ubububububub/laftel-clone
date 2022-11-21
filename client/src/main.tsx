import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { router } from "@/routers/router";
import { GlobalStyle } from "@/style/globalStyle";
import theme from "@/style/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider {...{ theme }}>
    <GlobalStyle />
    <RouterProvider {...{ router }} />
  </ThemeProvider>,
);
