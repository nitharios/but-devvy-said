import { LOAD_TOPICS } from '../actions/topic.actions';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_TOPICS:
      console.log("LOAD");                 
      return [ ...action.topicsList ];

    default:
      return state;
  }
};