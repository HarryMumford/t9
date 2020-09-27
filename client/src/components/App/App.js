import React from "react";
import styled from "styled-components";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15vh;
`;

const App = () => {
  return (
    <AppContainer>
      <Keypad />
      <Display />
    </AppContainer>
  );
};

export default App;
