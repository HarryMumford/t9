import React from "react";

const Display = ({ payload }) => {
  const { combinations } = payload;
  return (
    <>
      {combinations &&
        combinations.map((c, index) => {
          return <div key={index}>{c}</div>;
        })}
    </>
  );
};

export default Display;
