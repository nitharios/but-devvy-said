import Axios from 'axios';

const listOfUrls = '/api/urls'; // URL to Get from DB

export const URL = 'LOAD_URL';
export const ERROR = 'ERROR';

//GET all urls
export const loadURLs = () => {
  return (dispatch) => {
    return Axios.get(listOfUrls)
    .then(urlsList => {
      console.log(listOfUrls);
      dispatch({
        type: LOAD_URL,
        urlsList: urlsList.data
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        error: err
      });
    });
  };
};