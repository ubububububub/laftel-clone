import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { router } from "@/routers/router";
import { store } from "@/store";
import { GlobalStyle } from "@/style/globalStyle";
import theme from "@/style/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider {...{ theme }}>
    <GlobalStyle />
    <Provider {...{ store }}>
      <RouterProvider {...{ router }} />
    </Provider>
  </ThemeProvider>,
);
