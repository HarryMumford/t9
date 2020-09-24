import {
  COMBINATIONS_FAIL,
  COMBINATIONS_LOADING,
  COMBINATIONS_SUCCESS,
} from "./types";
import axios from "axios";

export const getCombinations = (userInput) => async (dispatch) => {
  try {
    dispatch({
      type: COMBINATIONS_LOADING,
    });

    const query = `?number=${userInput}`;
    const res = await axios.get(`/combinations${query}`);

    dispatch({
      type: COMBINATIONS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: COMBINATIONS_FAIL,
    });
  }
};
