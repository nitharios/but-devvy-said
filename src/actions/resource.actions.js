import Axios from 'axios';
export const ADD_RESOURCE = 'ADD_RESOURCE';

const resourcesURL = '/api/resources';

// send query to back end 
// expect a parsed response back
export const addNewResource = (newResource) => {
  return dispatch => {
    return Axios.post(resourcesURL, info)
    .then(response => {
      const data = response.data;
      dispatch({
        type : ADD_RESOURCE,
        newResource : data.newResource
      });
    })
    .catch(err => {
      console.log(err);
    });

  };

};