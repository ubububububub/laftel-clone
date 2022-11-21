import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import {
  Daily,
  Finder,
  Home,
  Join,
  JoinAgreement,
  EmailLogin,
  Membership,
  NotFound,
  Search,
  Themes,
} from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "daily",
        element: <Daily />,
      },
      {
        path: "finder",
        element: <Finder />,
      },
      {
        index: true,
        element: <Home />,
      },
      {
        path: "auth/process/email",
        element: <Join />,
      },
      {
        path: "auth/process/agreement",
        element: <JoinAgreement />,
      },
      {
        path: "membership",
        element: <Membership />,
      },
      {
        path: "auth/email",
        element: <EmailLogin />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "themes",
        element: <Themes />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
