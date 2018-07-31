import { createSelector } from 'reselect';

/**
 * Direct selector to the reports state domain
 */
export const selectReportsDomain = (state) => state.get('reports');
export const selectCourses = (state) => selectReportsDomain(state).get('courses');

export const makeSelectMeanCommitmentPerCourse = (idx) => createSelector(
  makeSelectModulesByCourse(idx),
  (modules) => {
    if (!modules) {
      return 0;
    }

    let meanCommitment = 0;
    modules.forEach((module) => {
      meanCommitment += module.meanCommitment;
    });

    return meanCommitment / modules.length;
  }
);

export const makeSelectCourses = (idx) => createSelector(
  selectCourses, (state) => {
    const value = state.toJS()[idx];
    return value;
  }
);

export const makeSelectDropoutRate = (idx) => createSelector(
  makeSelectCourses(idx), (state) => state.dropoutRate
);

export const makeSelectModulesByCourse = (idx) => createSelector(
  makeSelectCourses(idx), (state) => state.modules
);

export const makeSelectCommitmentsPerStudents = (idx) => createSelector(
  makeSelectModulesByCourse(idx), (state) => {
    if (state.length === 0) {
      return null;
    }

    return state[0].commitmentPerStudent;
  }
);

export const makeSelectTemporalCommitmentModules = (idx) => createSelector(
  makeSelectCourses(idx), (state) => state.temoporalCommitment
);

export const makeTemporalCommitmentModules = (idx) => createSelector(
  makeSelectModulesByCourse(idx), (state) => {
    if (state.length === 0) {
      return null;
    }

    return state[0].temoporalCommitment;
  }
);

export const makeSelectReports = () => createSelector(
  selectReportsDomain, (state) => state.toJS()
);
