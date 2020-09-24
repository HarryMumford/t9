import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCombinations } from "../../flux/actions/combinations";

const Keypad = () => {
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const combinationsState = useSelector((state) => state.combinations);
  const combinations = combinationsState.payload.combinations;

  const handleTyping = (event) => {
    const userInput = event.target.value;
    setNumber(userInput);
    dispatch(getCombinations(userInput));
  };

  return (
    <>
      {combinations &&
        combinations.map((c) => {
          return <div>{c}</div>;
        })}
      <input
        type="text"
        placeholder="Type number here"
        onChange={handleTyping}
        value={number}
      ></input>
    </>
  );
};

export default Keypad;

// import React from "react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getCombinations } from "../../flux/actions/combinations";

// const Prediction = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getCombinations());
//   }, []);

//   const combinationsState = useSelector((state) => state.combinations);
//   const combinations = combinationsState.payload.combinations;

//   return (
//     <>
//       {combinations &&
//         combinations.map((c) => {
//           return <div>{c}</div>;
//         })}
//     </>
//   );
// };

// export default Prediction;
