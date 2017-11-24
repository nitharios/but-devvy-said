import Axios from 'axios';
export const QUERY = 'QUERY';

const queryURL = '/api/query';

// send query to back end 
// expect a parsed response back
export const query = userQuery => {
  return dispatch => {
    console.log(userQuery);
    
    return Axios.post(queryURL, userQuery)
    .then(response => {
      const data = response.data;

      dispatch({
        type : QUERY,
        examplesList : data.Examples,
        notesList : data.Notes,
        resourcesList : data.Resources
      });
    })
    .catch(err => {
      console.log(err);
      return;
    });
  };
};