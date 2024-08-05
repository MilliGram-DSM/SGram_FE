import { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Login />
    </Wrapper>
  );
}

export default App;

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
  box-sizing: border-box;
  }
  body {
  background-color: black;
  color: white;
  font-family: 'system-ui', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  `;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
