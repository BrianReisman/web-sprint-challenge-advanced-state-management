import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const ERROR = "ERROR";

const fetchStart = () => {
  return { type: FETCH_SMURF_START };
};
const fetchSuccess = (data) => {
  return { type: FETCH_SMURF_SUCCESS, payload: data };
};
const fetchFail = () => {
  return { type: FETCH_SMURF_FAIL };
};

export const fetchSmurfs = (dispatch) => {
  // !do i need a return in here?
  dispatch(fetchStart());
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      // console.log(res.data)
      dispatch(fetchSuccess(res.data));
    })
    .catch((err) => {
      console.log(err.message);
      dispatch(fetchFail());
    });
};

//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
export const addSmurf = (newSmurfObj) => {
  return { type: ADD_SMURF, newSmurf: newSmurfObj };
};

export const error = (message) => {
  return { type: ERROR, payload: message };
};
//3. Add a standard action that allows us to set the value of the error message slice of state.
