import * as actionTypes from "../actions/index";

export const initialState = {
  smurfsArr: [],
  isLoading: false,
  errorMessage: "",
};

const reducer = (state = initialState, action) => {
  console.log(">>>>>>>>", action.type);
  console.log(action.payload);

  switch (action.type) {
    case actionTypes.FETCH_SMURF_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: "",
        smurfsArr: action.payload,
      };
    case actionTypes.FETCH_SMURF_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: "Something went wrong!",
      };
    case actionTypes.ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case actionTypes.ADD_SMURF:
      return {
        ...state,
        errorMessage: "",
        smurfsArr: [...state.smurfsArr, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;