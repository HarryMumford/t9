import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCombinations } from "../../flux/actions/combinations";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCombinations());
  }, []);

  const combinationsState = useSelector((state) => state.combinations);
  const combinations = combinationsState.payload.combinations;

  return (
    <>
      {combinations &&
        combinations.map((c) => {
          return <li>{c}</li>;
        })}
    </>
  );
};

export default App;
