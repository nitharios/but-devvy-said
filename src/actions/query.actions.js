import Axios from 'axios';
export const QUERY = 'QUERY';
export const MISSING_INFO = 'MISSING_INFO';

const queryURL = '/api/query';

// send query to back end 
// expect a parsed response back
export const query = userQuery => {
  return dispatch => {
    return Axios.post(queryURL, userQuery)
    .then(response => {
      const data = response.data; 

      switch(data) {
        case null:        
          dispatch({
            type : MISSING_INFO,
            topicData : { 
              id : 0,
              name : null,
              error : true
            }
          });

          break;

        default:
          console.log(data.Resources);
          
          dispatch({
            type : QUERY,
            topicData : data,
            resourcesList : data.Resources
          });        
      }

    })
    .catch(err => {
      console.log(err);
      dispatch({
        type : MISSING_INFO,
        topicData : { 
          id : 0,
          name : null,
          error : true
        }
      });
    });
  };
};