import React from "react";
import styled from "styled-components";

export const Button = styled.div`
  border-radius: 50%;
  cursor: pointer;
  background-color: gainsboro;
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 80px;
  font-family: "Roboto", sans-serif;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  &:hover {
    background-color: darkgray;
  }
`;

const Text = styled.div`
  color: black;
  text-align: center;
`;

const TopDisplayText = styled(Text)`
  margin-top: 1rem;
  font-size: 1.5rem;
`;

const BottomDisplayText = styled(Text)`
  font-size: 1rem;
`;

const Key = ({ bottomDisplay, topDisplay, onKeyClick, number }) => {
  const handleKeyClick = (e) => {
    onKeyClick(number);
  };

  return (
    <Button onClick={handleKeyClick}>
      <TopDisplayText>{topDisplay}</TopDisplayText>
      <BottomDisplayText>{bottomDisplay}</BottomDisplayText>
    </Button>
  );
};

export default Key;
