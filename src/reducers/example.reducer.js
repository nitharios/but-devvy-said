import { QUERY } from '../actions/query.actions';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case QUERY:
      return [ ...action.examplesList ];
      
    default:
      return state;
  }
};