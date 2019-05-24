/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import {
  FINDING_SMURFS,
  FOUND_SMURFS,
  ADDING_SMURF,
  ADDED_SMURF
  // UPDATE_SMURF,
  // UPDATED_SMURF,
  // DELETE_SMURF,
  // DELETED_SMURF
} from "../actions";

const initialState = {
  smurfs: [],
  loadingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

function smurfReducer(state = initialState, action) {
  switch (action.type) {
    case FINDING_SMURFS:
      return {
        ...state,
        loadingSmurfs: true
      };
    case FOUND_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        loadingSmurfs: false
      };
    case ADDING_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };
    case ADDED_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };
    // case UPDATE_SMURF:
    //   return {
    //     ...state,
    //     smurfs: action.payload
    //   };
    //   case UPDATED_SMURF:
    //     return {
    //       ...state,
    //       smurfs: action.payload
    //     };
    // case DELETE_SMURF:
    //   return {
    //     ...state,
    //     smurfs: action.payload
    //   };
    //   case DELETED_SMURF:
    //     return {
    //       ...state,
    //       smurfs: action.payload
    //     };
    default:
      return state;
  }
}

export default smurfReducer;
