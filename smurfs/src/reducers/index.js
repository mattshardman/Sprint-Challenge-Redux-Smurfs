import types from "../constants";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export default (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case types.FETCHING_SMURFS:
      return { ...state, fetchingSmurfs: true };
    case types.SMURFS:
      return { ...state, fetchingSmurfs: false, smurfs: action.payload.data };
    default:
      return initialState;
  }
};
