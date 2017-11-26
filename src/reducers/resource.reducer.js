import { QUERY } from '../actions/query.actions';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case QUERY:
      console.log(action.resourcesList);
      return [ ...action.resourcesList ];

    default:
      return state;
  }
};