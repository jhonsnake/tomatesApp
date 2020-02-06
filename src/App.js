import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Cards from "./components/Cards.jsx";

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Cards />
    </Wrapper>
  );
}

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap');
  body {
    font-family: 'Lato', sans-serif;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  display: block;
  margin: 0 auto;
`;

export default App;
