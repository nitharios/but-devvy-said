import { QUERY } from '../actions/query.actions';

const initialState = {};

export default (state = initialState, action) => {
  console.log(action);
  
  switch(action.type) {
    case QUERY:
      return Object.assign({}, state, action.topicData);
      
    default:
      return state;
  }
};