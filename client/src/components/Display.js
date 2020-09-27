import React from "react";
import styled from "styled-components";
import { Container } from "../UI/Container";

const DisplayContainer = styled(Container)`
  overflow-x: hidden;
  overflow-y: scroll;
`;

const DisplayText = styled.div`
  color: dodgerblue;
  font-family: "Roboto", sans-serif;
  margin-right: 30px;
  margin-bottom: 10px;
  height: 1rem;
`;

const Display = ({ combinations }) => {
  return (
    <DisplayContainer>
      {combinations &&
        combinations.map((c, index) => {
          return <DisplayText key={index}>{c}</DisplayText>;
        })}
    </DisplayContainer>
  );
};

export default Display;
