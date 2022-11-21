import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Container = styled.div`
  height: 100%;
`;

function App() {
  const [isToggle, setIsToggle] = useState(true);

  return (
    <Container>
      <Header />
      <Outlet context={{ setIsToggle }} />
      {isToggle && <Footer />}
    </Container>
  );
}

export default App;
