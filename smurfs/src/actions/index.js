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
import axios from "axios";

export const FINDING_SMURFS = "FINDING_SMURFS";
export const FOUND_SMURFS = "LOADED_SMURFS";
export const ADDING_SMURF = "ADDING_SMURF";
export const ADDED_SMURF = "ADDED_SMURF";
// export const UPDATE_SMURF = "UPDATE_SMURF";
// export const UPDATED_SMURF = "UPDATED_SMURF";
// export const DELETE_SMURF = "DELETE_SMURF";
// export const DELETED_SMURF = "DELETED_SMURF";

const baseURL = "http://localhost:3333";

export const getSmurfs = () => dispatch => {
  dispatch({
    type: FINDING_SMURFS
  });
  axios
    .get("http://localhost:3333/smurfs")
    .then(result => {
      console.log(result.data);
      dispatch({
        type: FOUND_SMURFS,
        payload: result.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const addSmurf = smurf => dispatch => {
  dispatch({
    type: ADDING_SMURF
  });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(result => {
      dispatch({
        type: ADDED_SMURF,
        payload: result.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// export const updateSmurf = id => dispatch => {
//   dispatch({
//     type: UPDATE_SMURF
//   })
//   axios
//     .put(`${baseURL}`)
//     .then()
//     .catch()
// }

// export const deleteSmurf = id => dispatch => {
//   dispatch({
//     type: DELETE_SMURF
//   })
//   axios
//     .delete(`${baseURL}/smurfs/${id}`)
//     .then(result => {
//       dispatch({
//         type: DELETED_SMURF,
//         payload: result.data
//       })
//     })
//     .catch(err)
// }
