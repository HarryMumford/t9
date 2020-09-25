import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { numberLetterMapping } from "../../constants/numberLetterMapping";
import { getCombinations } from "../../flux/actions/combinations";
import Display from "./Display";

const App = () => {
  let [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const combinationsState = useSelector((state) => state.combinations);

  const handleTyping = (event) => {
    const key = event.target.value;
    setNumber((number += key));
    dispatch(getCombinations(number));
  };

  const keys = numberLetterMapping;

  return (
    <>
      <Display {...combinationsState} />
      {keys.map((key, index) => {
        return (
          <button key={index} onClick={handleTyping} value={index}>
            {index}
            {key}
          </button>
        );
      })}
    </>
  );
};

export default App;
