import React from "react";
import styled from "styled-components";

const Button = styled.div`
  border-radius: 50%;
  background-color: gainsboro;
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 80px;
  font-family: "Roboto", sans-serif;
  margin: 5px 10px;
`;

const Text = styled.div`
  color: black;
  text-align: center;
`;

const NumberText = styled(Text)`
  margin-top: 1rem;
  font-size: 1.5rem;
`;

const LetterText = styled(Text)`
  font-size: 1rem;
`;

const Key = ({ letters, number, onKeyClick }) => {
  const handleKeyClick = (e) => {
    onKeyClick(number);
  };

  return (
    <Button onClick={handleKeyClick}>
      <NumberText>{number}</NumberText>
      <LetterText>{letters}</LetterText>
    </Button>
  );
};

export default Key;
