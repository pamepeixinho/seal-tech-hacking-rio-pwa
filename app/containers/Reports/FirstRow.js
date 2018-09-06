import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import PaperCard from './PaperCard';
import PieChart from './PieChart';

const calculate = (meanCommitment) => Math.round(meanCommitment * 100.0);

const commitmentPerClassMessage = "Classe's commitment by course";
const committed = 'commited';
const notCommitted = 'not commited';
const classesCommitment = "Classe's commitment";

const FirstRow = ({ meanCommitment }) => (
  <Grid container spacing={24} justify="center" style={{ paddingBottom: '8px' }}>
    <Grid item xs={4}>
      <PaperCard style={{ textAlign: 'center' }}>
        <div style={{ height: '114px', fontSize: 64, paddingTop: 34, color: '#D43F89' }}>{ calculate(meanCommitment) }% </div>
        <h3 style={{ fontSize: 16, textAlign: 'left', padding: 16 }}>{commitmentPerClassMessage}</h3>
      </PaperCard>
    </Grid>
    <Grid item xs={8}>
      <PaperCard>
        <h4 style={{ margin: 0, padding: 16 }}>{classesCommitment}</h4>
        <div style={{ display: 'flex', padding: '8px 8px 32px', marginRight: 8, marginLeft: 8 }} >
          <div>
            <PieChart />
          </div>
          <div style={{ marginLeft: 32 }}>
            <div style={{ color: '#731FB0', fontSize: 72 }}>12</div>
            <div style={{ color: '#731FB0', fontSize: 16 }}>{committed}</div>
          </div>
          <div style={{ marginLeft: 32, marginTop: 48 }}>
            <div style={{ color: '#A4E817', fontSize: 36 }}>36</div>
            <div style={{ color: '#A4E817', fontSize: 12 }}>{notCommitted}</div>
          </div>
        </div>
      </PaperCard>
    </Grid>
  </Grid>
);

export default FirstRow;
