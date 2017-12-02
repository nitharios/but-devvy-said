import { ADD_CODE } from '../actions/code.actions';

const initialState = '';

export default (state = initialState, action) => {

  switch(action.type) {
    case ADD_CODE:
      return action.code;

    default:
      return state;
  }

};