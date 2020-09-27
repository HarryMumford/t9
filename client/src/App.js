import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Display from "./components/Display";
import Keypad from "./components/Keypad";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15vh;
`;

const App = () => {
  const { payload } = useSelector((state) => state.combinations);

  return (
    <AppContainer>
      <Keypad />
      <Display {...payload} />
    </AppContainer>
  );
};

export default App;
