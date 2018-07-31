/**
 *
 * Reports
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import injectReducer from 'utils/injectReducer';

import { makeSelectReports, makeSelectMeanCommitmentPerCourse, makeSelectDropoutRate, makeSelectTemporalCommitmentModules, makeSelectCommitmentsPerStudents } from './selectors';
import reducer from './reducer';
import { fetchDash } from './actions';
import FirstRow from './FirstRow';
import SecondRow from './SecondRow';
import Form from './Form';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1032px;
`;

const Header = styled.div`
  height: 100px;
  padding-top: 32px;
`;

export class Reports extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    course: 1,
    module: 1,
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    let temporalCommitmentModules;
    if (this.props.reports && this.props.reports.courses && this.props.reports.courses[0].modules
      && this.props.reports.courses[0].modules[0] && this.props.reports.courses[0].modules[0].temoporalCommitment) {
      temporalCommitmentModules = this.props.reports.courses[0].modules[0].temoporalCommitment;
      temporalCommitmentModules = temporalCommitmentModules.slice(0, 6);
    }

    const compare = (a, b) => {
      if (a.commitment < b.commitment) { return 1; }
      if (a.commitment > b.commitment) { return -1; }
      return 0;
    };

    let objs = this.props.commitmentsPerStudends;
    if (objs) {
      objs.sort(compare);
      objs = objs.slice(0, 16);
    }

    return (
      <Wrapper>
        <Header>
          <Form />
        </Header>
        <Grid container spacing={24} justify="center">
          <Grid item xs={8}>
            <FirstRow meanCommitment={this.props.meanCommitment} />
            <SecondRow
              dropoutRate={this.props.dropoutRate}
              temporalCommitmentModules={temporalCommitmentModules}
            />
          </Grid>
          <Grid item xs={4}>
            <Paper style={{ padding: '16px', height: '472px' }}>
              <h4 style={{ padding: '0', margin: 0 }} >Ranking de alunos por engajamento</h4>
              <br />
              { objs && objs.map((student, index) => (
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                  <span>
                    <span style={{ color: '#A4E817', marginRight: 16 }}>
                      {index + 1}º
                      </span>
                    <span style={{}}>
                      {student.name}
                    </span>
                  </span>
                  <span style={{ textAlign: 'right' }}>
                    {student.commitment}
                  </span>
                </div>
                ))
              }
            </Paper>
          </Grid>
        </Grid>
      </Wrapper>
    );
  }
}

Reports.propTypes = {
  fetch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  reports: makeSelectReports(),
  meanCommitment: makeSelectMeanCommitmentPerCourse(0),
  dropoutRate: makeSelectDropoutRate(0),
  commitmentsPerStudends: makeSelectCommitmentsPerStudents(0),
});

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(fetchDash()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'reports', reducer });

export default compose(
  withReducer,
  withConnect,
)(Reports);
