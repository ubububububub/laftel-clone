import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { useAppSelector } from "./hooks/useApp";

import { Footer, Header } from "@/components";

const Container = styled.div`
  height: 100%;
`;

function App() {
  const { isFooterToggle } = useAppSelector(({ footer }) => ({
    isFooterToggle: footer.isToggle,
  }));

  return (
    <Container>
      <Header />
      <Outlet />
      {isFooterToggle && <Footer />}
    </Container>
  );
}

export default App;
