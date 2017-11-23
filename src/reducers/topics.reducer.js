import { LOAD_TOPICS } from '../actions/topics.actions';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_TOPICS:
      return [ ...action.topicsList ];

    default:
      return state;
  }
};