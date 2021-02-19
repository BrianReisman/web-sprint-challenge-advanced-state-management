import * as actionTypes from '../actions/index';

export const initialState = {
  smurfsArr: [],
  isLoading: false,
  errorMessage: "",
};

const reducer = (state = initialState, action) => {
  console.log('>>>>>>>>',action.type);
  // console.log(action.payload);

  switch (action.type) {
    case actionTypes.FETCH_SMURF_START:
      return {
        ...state,
        isLoading: true
      }
    case actionTypes.FETCH_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: '',
        smurfsArr: action.payload
      }
    case actionTypes.FETCH_SMURF_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: 'Something went wrong!',
      }
    default:
      return state;
  }
};

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
