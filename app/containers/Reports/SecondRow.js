import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import PaperCard from './PaperCard';
import LineChart from './LineChart';

const calculate = (meanCommitment) => Math.round(meanCommitment * 100.0);

const commitmentThroughTheCourse = 'Commitment throught the course';
const dropoutPrediction = 'Course dropout probability prediction';

const SecondRow = ({ dropoutRate, temporalCommitmentModules }) => (
  <Grid container spacing={24} justify="center">
    <Grid item xs={8}>
      <PaperCard >
        <h4 style={{ padding: '8px', margin: 0 }}>{commitmentThroughTheCourse}</h4>
        <LineChart temporalCommitmentModules={temporalCommitmentModules} />
      </PaperCard>
    </Grid>
    <Grid item xs={4}>
      <PaperCard style={{ background: '#1ED0E3', textAlign: 'center' }}>
        <div style={{ height: '114px', fontSize: 64, paddingTop: 34, color: '#731FB0' }}>{ calculate(dropoutRate) }% </div>
        <h3 style={{ fontSize: 16, textAlign: 'left', padding: 16, color: 'white' }}>{dropoutPrediction}</h3>
      </PaperCard>
    </Grid>
  </Grid>
);

/* <PaperCard style={{ textAlign: 'center' }}>
        <div style={{ height: '114px', fontSize: 64, paddingTop: 34, color: '#D43F89' }}>{ calculate(meanCommitment) }% </div>
        <h3 style={{ fontSize: 16, textAlign: 'left', padding: 16 }}>Índice de engajamento da turma nesse curso</h3>
      </PaperCard>
*/

export default SecondRow;
