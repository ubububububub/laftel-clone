import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import {
  AuthLogin,
  AuthRedirect,
  Daily,
  Finder,
  Home,
  Membership,
  NotFound,
  Search,
  Themes,
  Auth,
  AuthSelect,
  Process,
  Agreement,
  Join,
  Login,
  Theme,
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
        path: "membership",
        element: <Membership />,
      },
      {
        path: "search/:searchText",
        element: <Search />,
      },
      {
        path: "themes",
        element: <Themes />,
      },
      {
        path: "theme/:id",
        element: <Theme />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/auth/email",
    element: <Login />,
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        index: true,
        element: <AuthRedirect />,
      },
      {
        path: "login",
        element: <AuthLogin />,
      },

      {
        path: "select",
        element: <AuthSelect />,
      },
      {
        path: "*",
        element: <AuthRedirect />,
      },
    ],
  },
  {
    path: "/auth/process",
    element: <Process />,
    children: [
      {
        index: true,
        element: <AuthRedirect />,
      },
      {
        path: "agreement",
        element: <Agreement />,
      },
      {
        path: "join",
        element: <Join />,
      },
      {
        path: "*",
        element: <AuthRedirect />,
      },
    ],
  },
]);
