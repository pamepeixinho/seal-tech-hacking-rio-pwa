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

export const selectMeanCommitmentPerCourse = (state) => {
  const selectedCourse = Number(makeSelectSelectedCourse()(state));
  const modules = makeSelectModulesByCourse(selectedCourse)(state);

  if (!modules) {
    return 0;
  }

  let meanCommitment = 0;
  modules.forEach((module) => {
    meanCommitment += module.meanCommitment;
  });

  return meanCommitment / modules.length;
};

export const makeSelectCourses = (idx) => createSelector(
  selectCourses, (state) => {
    const value = state.toJS()[idx];
    return value;
  }
);

export const makeSelectDropoutRate = (idx) => createSelector(
  makeSelectCourses(idx), (state) => state.dropoutRate
);

export const selectDropoutRate = (state) => {
  const selectedCourse = Number(makeSelectSelectedCourse()(state));
  const course = makeSelectCourses(selectedCourse)(state);
  return course.dropoutRate;
};

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

export const selectCommitmentsPerStudents = (state) => {
  const selectedCourse = Number(makeSelectSelectedCourse()(state));
  const modules = makeSelectModulesByCourse(selectedCourse)(state);

  if (modules.length === 0) {
    return null;
  }

  return modules[0].commitmentPerStudent;
};

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

export const makeSelectSelectedCourse = () => createSelector(
  selectReportsDomain,
  (state) => state.get('selectedCourse')
);

export const makeSelectSelectedModule = () => createSelector(
  selectReportsDomain,
  (state) => state.get('selectedModule')
);
