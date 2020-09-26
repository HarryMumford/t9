import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { numberLetterMapping } from "../utils/constants";
import { getCombinations } from "../flux/actions/combinations";
import Key from "./Key";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  height: 300px;
`;

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
      {keys.map((key) => {
        const { number, letters } = key;
        const props = { number, letters, onKeyClick: handleTyping };
        return <Key key={number} {...props} />;
      })}
    </Container>
  );
};

export default Keypad;
