import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { numberLetterMapping } from "../utils/constants";
import { getCombinations } from "../flux/actions/combinations";
import Key from "./Key";

const Keypad = () => {
  let [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const handleTyping = (key) => {
    setNumber((number += key));
    dispatch(getCombinations(number));
  };

  const keys = numberLetterMapping;

  return (
    <>
      {keys.map((key, index) => {
        const props = { number: index, letters: key, onKeyClick: handleTyping };
        return <Key key={index} {...props} />;
      })}
    </>
  );
};

export default Keypad;
