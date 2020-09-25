import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { numberLetterMapping } from "../../constants/numberLetterMapping";
import { getCombinations } from "../../flux/actions/combinations";

const Keypad = () => {
  let [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const handleTyping = (event) => {
    const key = event.target.value;
    setNumber((number += key));
    dispatch(getCombinations(number));
  };

  const keys = numberLetterMapping;

  return (
    <>
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

export default Keypad;
