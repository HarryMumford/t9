import React from "react";

const Display = ({ combinations }) => {
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
