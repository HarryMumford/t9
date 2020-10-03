import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Container } from "../../UI/Container";

export const DisplayContainer = styled(Container)`
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const DisplayText = styled.div`
  color: dodgerblue;
  font-family: "Roboto", sans-serif;
  margin-right: 30px;
  margin-bottom: 10px;
  height: 1rem;
`;

const Display = () => {
  const { payload } = useSelector((state) => state.predictions);
  const { predictions } = payload;

  return (
    <DisplayContainer>
      {predictions &&
        predictions.map((c, index) => {
          return <DisplayText key={index}>{c}</DisplayText>;
        })}
    </DisplayContainer>
  );
};

export default Display;
