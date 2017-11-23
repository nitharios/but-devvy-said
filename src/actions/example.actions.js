import Axios from 'axios';
export const ADD_EXAMPLE = 'ADD_EXAMPLE';

const examplesURL = '/api/examples';

// send query to back end 
// expect a parsed response back
export const addNewExample = info => {
  return dispatch => {
    return Axios.post(examplesURL)
    .then(response => {
      const data = response.data;

      dispatch({
        type : ADD_EXAMPLE,
        newExample : data.newExample
      });
    });
  };
};