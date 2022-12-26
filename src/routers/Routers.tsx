import { Routes, Route, useLocation } from "react-router-dom";

import App from "@/App";
import {
  Agreement,
  Auth,
  AuthLogin,
  AuthRedirect,
  AuthSelect,
  Daily,
  Detail,
  Email,
  Finder,
  Home,
  Join,
  Login,
  Membership,
  NotFound,
  Process,
  Search,
  Theme,
  Themes,
} from "@/pages";

export function Routers() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <Routes location={background || location}>
      <Route path='/' element={<App />}>
        <Route path='/' element={<Home />}>
          <Route path='/:id/detail' element={<Detail />} />
          <Route path='/:id/episode' element={<Detail />} />
          <Route path='/:id/review' element={<Detail />} />
          <Route path='/:id/related' element={<Detail />} />
        </Route>
        <Route path='daily' element={<Daily />}>
          <Route path='/daily/:id/detail' element={<Detail />} />
          <Route path='/daily/:id/episode' element={<Detail />} />
          <Route path='/daily/:id/review' element={<Detail />} />
          <Route path='/daily/:id/related' element={<Detail />} />
        </Route>
        <Route path='finder' element={<Finder />}>
          <Route path='/finder/:id/detail' element={<Detail />} />
          <Route path='/finder/:id/episode' element={<Detail />} />
          <Route path='/finder/:id/review' element={<Detail />} />
          <Route path='/finder/:id/related' element={<Detail />} />
        </Route>
        <Route path='membership' element={<Membership />} />
        <Route path='search/:searchtext' element={<Search />}>
          <Route path='/search/:searchtext/:id/detail' element={<Detail />} />
          <Route path='/search/:searchtext/:id/episode' element={<Detail />} />
          <Route path='/search/:searchtext/:id/review' element={<Detail />} />
          <Route path='/search/:searchtext/:id/related' element={<Detail />} />
        </Route>
        <Route path='themes' element={<Themes />} />
        <Route path='themes/:themeid/:themetitle' element={<Theme />}>
          <Route
            path='/themes/:themeid/:themetitle/:animetitle/:id/detail'
            element={<Detail />}
          />
          <Route
            path='/themes/:themeid/:themetitle/:animetitle/:id/episode'
            element={<Detail />}
          />
          <Route
            path='/themes/:themeid/:themetitle/:animetitle/:id/review'
            element={<Detail />}
          />
          <Route
            path='/themes/:themeid/:themetitle/:animetitle/:id/related'
            element={<Detail />}
          />
        </Route>
        <Route path='*' element={<NotFound />} />
        <Route path='detail' element={<Detail />} />
      </Route>
      <Route path='auth/email' element={<Login />} />
      <Route path='auth' element={<Auth />}>
        <Route index element={<AuthRedirect />} />
        <Route path='login' element={<AuthLogin />} />
        <Route path='select' element={<AuthSelect />} />
        <Route path='*' element={<AuthRedirect />} />
      </Route>
      <Route path='auth/process' element={<Process />}>
        <Route index element={<AuthRedirect />} />
        <Route path='agreement' element={<Agreement />} />
        <Route path='join' element={<Join />} />
        <Route path='email' element={<Email />} />
        <Route path='*' element={<AuthRedirect />} />
      </Route>
    </Routes>
  );
}
