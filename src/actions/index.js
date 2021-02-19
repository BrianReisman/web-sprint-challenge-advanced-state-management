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
      dispatch(fetchSuccess(res.data));
    })
    .catch((err) => {
      dispatch(fetchFail());
    });
};

export const addSmurf = (newSmurfObj) => {
  return { type: ADD_SMURF, payload: newSmurfObj };
};

export const error = (message) => {
  return { type: ERROR, payload: message };
};
