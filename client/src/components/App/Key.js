import React from "react";

const Key = ({ onButtonClick, buttonKey }) => {
  let handleClick = (e) => {
    onButtonClick(e.target.textContent);
  };

  return (
    <button
      name={buttonKey}
      className={classNames.join(" ").trim()}
      onClick={handleClick}
    >
      {buttonKey}
    </button>
  );
};

export default Key;
