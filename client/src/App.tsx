import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { Footer, Header } from "@/components";

const Container = styled.div`
  height: 100%;
`;

function App() {
  const [isFooterToggle, setIsFooterToggle] = useState(true);

  return (
    <Container>
      <Header />
      <Outlet context={{ setIsFooterToggle }} />
      {isFooterToggle && <Footer />}
    </Container>
  );
}

export default App;
