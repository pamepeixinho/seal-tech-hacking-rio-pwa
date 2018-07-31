/*
 *
 * Reports actions
 *
 */

import { fetchDashboard } from '../../api/backend';

import {
  FETCH_DASH,
} from './constants';

export function fetchDash() {
  return {
    type: FETCH_DASH,
    promise: fetchDashboard(),
  };
}
