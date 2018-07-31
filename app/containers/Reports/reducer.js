/*
 *
 * Reports reducer
 *
 */

import { fromJS } from 'immutable';
import { handle } from 'redux-pack';

import {
  FETCH_DASH,
} from './constants';

const initialState = fromJS({
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
    default:
      return state;
  }
}

export default reportsReducer;
