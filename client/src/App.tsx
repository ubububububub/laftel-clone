import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { useAppSelector } from "./hooks/useApp";

import { Footer, Header } from "@/components";
import { getFooteSliceState } from "@/store/features/footerSlice";

const Container = styled.div`
  height: 100%;
`;

function App() {
  const { isFooterToggle } = useAppSelector(getFooteSliceState);

  return (
    <Container>
      <Header />
      <Outlet />
      {isFooterToggle && <Footer />}
    </Container>
  );
}

export default App;
