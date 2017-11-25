import Axios from 'axios';
export const LOAD_TOPICS = 'LOAD_TOPICS';
const mockData = {}
const topicsURL = '/api/topics';
// debugger
// send query to back end 
// expect a parsed response back
export const loadTopics = () => {
  return dispatch => {
    return Axios.get(topicsURL)
    .then(response => {
      const data = response.data;
            console.log(data, '<---DATA PROMISE HERE!!!')

      dispatch({
        type : LOAD_TOPICS,
        topicsList : data
      });
    })
    .catch(err => {
      console.log(err);
      return;
    });
  };
};


