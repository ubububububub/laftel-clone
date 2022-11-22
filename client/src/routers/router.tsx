import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import {
  AuthLogin,
  AuthLoginRedirect,
  Daily,
  Finder,
  Home,
  Join,
  JoinAgreement,
  Membership,
  NotFound,
  Search,
  Themes,
  Auth,
  AuthSelect,
} from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "daily",
        element: <Daily />,
      },
      {
        path: "finder",
        element: <Finder />,
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
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        index: true,
        element: <AuthLoginRedirect />,
      },
      {
        path: "login",
        element: <AuthLogin />,
      },
      {
        path: "select",
        element: <AuthSelect />,
      },
    ],
  },
]);
