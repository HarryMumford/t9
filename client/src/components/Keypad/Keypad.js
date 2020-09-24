import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCombinations } from "../../flux/actions/combinations";

const Keypad = () => {
  let [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const combinationsState = useSelector((state) => state.combinations);
  const combinations = combinationsState.payload.combinations;

  const handleTyping = (event) => {
    const key = event.target.value;
    setNumber((number += key));
    dispatch(getCombinations(number));
  };

  const keys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {combinations &&
        combinations.map((c) => {
          return <div>{c}</div>;
        })}
      {keys.map((key) => {
        return (
          <button onClick={handleTyping} value={key}>
            {key}
          </button>
        );
      })}
    </>
  );
};

export default Keypad;

// <input
// type="text"
// placeholder="Type number here"
// onChange={handleTyping}
// value={number}
// ></input>

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
