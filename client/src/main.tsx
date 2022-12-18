import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Routers } from "@/routers";
import { store } from "@/store";
import { GlobalStyle } from "@/style/globalStyle";
import theme from "@/style/theme";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider {...{ theme }}>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider {...{ store }}>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </ThemeProvider>,
);
