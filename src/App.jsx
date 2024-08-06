import { useState } from "react";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";

const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
]);

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <RouterProvider router={router} />
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
