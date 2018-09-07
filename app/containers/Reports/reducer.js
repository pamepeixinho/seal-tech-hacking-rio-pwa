/*
 *
 * Reports reducer
 *
 */

import { fromJS } from 'immutable';
import { handle } from 'redux-pack';

import {
  FETCH_DASH,
  CHANGE_COURSE,
  CHANGE_MODULE,
} from './constants';

const initialState = fromJS({
  selectedCourse: '0',
  selectedModule: '0',
  courses: [{
    name: '',
    dropoutRate: 0,
    modules: [],
    temporalCommitmentModules: [],
  }],
});

const handleSuccess = (state, action) => state.merge({ courses: fromJS(action.payload.courses) });

const handleAction = (state, action) =>
 handle(state, action, {
   success: (prevState) => handleSuccess(prevState, action),
 });

function reportsReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case FETCH_DASH:
      return handleAction(state, action);

    case CHANGE_COURSE:
      return state.merge({
        selectedCourse: action.course,
      });

    case CHANGE_MODULE:
      return state.merge({
        selectedModule: action.module,
      });

    default:
      return state;
  }
}

export default reportsReducer;
