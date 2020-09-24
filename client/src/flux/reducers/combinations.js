import {
  COMBINATIONS_FAIL,
  COMBINATIONS_LOADING,
  COMBINATIONS_SUCCESS,
} from "../actions/types";

const defaultState = {
  loading: false,
  payload: {},
};

const combinations = (state = defaultState, action) => {
  switch (action.type) {
    case COMBINATIONS_FAIL:
      return {
        ...state,
      };
    case COMBINATIONS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case COMBINATIONS_SUCCESS:
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return state;
  }
};

export default combinations;
