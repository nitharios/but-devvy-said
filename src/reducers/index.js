import { combineReducers } from 'redux';

import examplesList from './examples.reducer';
import notesList from './notes.reducer';
import resourcesList from './resources.reducer';

export default combineReducers({
  examplesList,
  notesList,
  resourcesList
});