import { LOAD_TOPICS } from '../actions/topic.actions';

const initialState = [];
const placeHolder = 'Choose your Topic';

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_TOPICS:
      console.log("LOAD");                 
      return [ placeHolder, ...action.topicsList ];

    default:
      return state;
  }
};