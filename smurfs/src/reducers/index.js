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
  switch (action.type) {
    case types.FETCHING_SMURFS:
      return { ...state, fetchingSmurfs: true };
    case types.ADDING_SMURFS:
      return { ...state, addingSmurf: true };
    case types.DELETING_SMURFS:
      return { ...state, deletingSmurf: true };
    case types.SMURFS:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        deletingSmurf: false,
        smurfs: action.payload.data
      };
    default:
      return initialState;
  }
};
