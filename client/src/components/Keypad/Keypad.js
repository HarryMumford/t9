import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { numberLetterMapping } from "../../utils/constants";
import { getCombinations } from "../../flux/actions/combinations";
import Key from "../Key/Key";
import { Container } from "../../UI/Container";

const Keypad = () => {
  let [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const handleTyping = (key) => {
    setNumber((number += key));
    dispatch(getCombinations(number));
  };

  const keys = numberLetterMapping;

  return (
    <Container>
      {keys.map((key, index) => {
        const { topDisplay, bottomDisplay, number } = key;
        const props = {
          number,
          topDisplay,
          bottomDisplay,
          onKeyClick: handleTyping,
        };
        return <Key key={index} {...props} />;
      })}
    </Container>
  );
};

export default Keypad;
