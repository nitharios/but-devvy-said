import Axios from 'axios';
export const LOAD_TOPICS = 'LOAD_TOPICS';

const topicsURL = '/api/topics';

// send query to back end 
// expect a parsed response back
export const loadTopics = () => {
  return dispatch => {
    return Axios.get(topicsURL)
    .then(response => {
      const data = response.data;

      dispatch({
        type : LOAD_TOPICS,
        topicsList : data.topics
      });
    })
    .catch(err => {
      console.log(err);
      return;
    });
  };
};