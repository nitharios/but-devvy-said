// NIgel actions fetch our main db for information retrieval
import Axios from 'axios';

const listOfUrls = '/api/urls'; // URL to Get from DB

export const GET_URL = 'GET_URL';
export const ERROR = 'ERROR';


export const getUrls = () => {
  return (dispatch) => {
    return Axios.get(urls)
    .then(urls => {
      console.log(urls);
      dispatch({
        type: GET_URL,
        urlsList: urls.data
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