/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
import axios from 'axios';

import types from '../constants';

export const fetchSmurfs = () => dispatch => {
  dispatch(fetchingSmurfs);
  axios.get('/smurfs')
    .then(result => dispatch(smurfs(result.data)));
};

export const addSmurfs = payload => dispatch => {
  dispatch(addingSmurfs);
  axios.post('/smurfs', payload)
    .then(result => dispatch(smurfs(result.data)));
};

export const updateSmurfs = payload => dispatch => {
  console.log(payload)
  dispatch(updatingSmurfs);
  axios.put(`smurfs/${payload.id}`, payload)
    .then(result => dispatch(smurfs(result.data)));
};

export const deleteSmurfs = id => dispatch => {
  dispatch(deletingSmurfs);
  axios.delete(`smurfs/${id}`)
    .then(result => dispatch(smurfs(result.data)));
}

const fetchingSmurfs = {
  type: types.FETCHING_SMURFS,
};

const addingSmurfs = {
  type: types.ADDING_SMURFS
}

const deletingSmurfs = {
  type: types.DELETING_SMURFS,
};

const updatingSmurfs = {
  type: types.UPDATING_SMURFS
}

const smurfs = data => ({
  type: types.SMURFS,
  payload: { data }
});





