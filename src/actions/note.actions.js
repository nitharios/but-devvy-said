import Axios from 'axios';
export const ADD_NOTE = 'ADD_NOTE';

const notesURL = '/api/notes';

// send query to back end 
// expect a parsed response back
export const addNewNote = info => {
  return dispatch => {
    return Axios.post(notesURL)
    .then(response => {
      const data = response.data;

      dispatch({
        type : ADD_NOTE,
        newNote : data.newNote
      });
    });
  };
};