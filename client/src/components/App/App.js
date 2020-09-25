import React from "react";
import { useSelector } from "react-redux";
import Display from "./Display";
import Keypad from "./Keypad";

const App = () => {
  const { payload } = useSelector((state) => state.combinations);

  return (
    <>
      <Display {...payload} />
      <Keypad />
    </>
  );
};

export default App;
