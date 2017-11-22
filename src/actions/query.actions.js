import Axios from 'axios';
export const QUERY = 'QUERY';

const queryURL = '/api/query';

// send query to back end 
// expect a parsed response back
export const query = (input) => {
  return dispatch => {
    return Axios.get(queryURL)
    .then(response => {
      dispatch({
        type : QUERY,
        response : response
      });
    });
  };
};