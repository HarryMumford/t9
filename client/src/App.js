import React from "react";
import { useSelector } from "react-redux";
import Display from "./components/Display";
import Keypad from "./components/Keypad";

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
