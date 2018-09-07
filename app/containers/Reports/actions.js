/*
 *
 * Reports actions
 *
 */

import { fetchDashboard } from '../../api/backend';

import {
  FETCH_DASH,
  CHANGE_COURSE,
  CHANGE_MODULE,
} from './constants';

export function fetchDash() {
  return {
    type: FETCH_DASH,
    promise: fetchDashboard(),
  };
}

export const changeCourse = (course) => ({
  type: CHANGE_COURSE,
  course,
});

export const changeModule = (module) => ({
  type: CHANGE_MODULE,
  module,
});