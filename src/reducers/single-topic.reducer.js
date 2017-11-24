import { QUERY, MISSING_INFO } from '../actions/query.actions';

const initialState = {};

export default (state = initialState, action) => {  
  switch(action.type) {
    case QUERY:
      return Object.assign({}, state, action.topicData);

    case MISSING_INFO:
      return Object.assign({}, state, action.topicData);      

    default:
      return state;
  }
};