import types from '../constants';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
};

export default (state = initialState, action) => {
  console.log(action)
  switch(action.type) {
    case types.FETCHING_SMURFS:
      return state;
    default:
      return state;
  }
}