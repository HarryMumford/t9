import React from "react";

const Key = ({ letters, number, onKeyClick }) => {
  const handleKeyClick = (e) => {
    onKeyClick(number);
  };

  return (
    <button onClick={handleKeyClick}>
      {number}
      {letters}
    </button>
  );
};

export default Key;
