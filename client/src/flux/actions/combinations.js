import {
  COMBINATIONS_FAIL,
  COMBINATIONS_LOADING,
  COMBINATIONS_SUCCESS,
} from "./types";
import axios from "axios";

export const getCombinations = () => async (dispatch) => {
  try {
    dispatch({
      type: COMBINATIONS_LOADING,
    });

    const res = await axios.get("/combinations?number=22");

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
