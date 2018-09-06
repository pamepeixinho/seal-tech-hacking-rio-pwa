import React from 'react';
import Paper from '@material-ui/core/Paper';
import PDFImg from './img/pdf.png';
import slideImg from './img/slide.png';
import videoImg from './img/video.png';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    width: 400,
    height: 300,
    margin: '0 auto',
    padding: 24,
  },
});

const dataExploringMessage = 'Exploratory data analysis';
const contingencyMatrixMessage = 'Contingency matrixes';
const dataInterpretationMessage = 'Data interpretation';
const dataInterpretationVideoMessage = 'Data interpretation (video classes)';
const editingMessage = 'Edit module 1';

const Content = (props) => {
  const { classes } = props;
  return (
    <div style={{ margin: '0 auto', margin: '48px 0 0' }}>
      <Paper className={classes.root} elevation={1}>
        <b>Módulo 1</b>
        <br />
        <div>
          <a href="#"><img width="18" hight="18" src={PDFImg} />{dataExploringMessage}</a>
        </div>
        <div>
          <a href="#"><img width="18" hight="18" src={PDFImg} />{contingencyMatrixMessage}</a>
        </div>
        <div>
          <a href="#"><img width="18" hight="18" src={slideImg} />{dataInterpretationMessage}</a>
        </div>
        <div>
          <a href="#"><img width="18" hight="18" src={videoImg} />{dataInterpretationVideoMessage}</a>
        </div>
        <div style={{ marginTop: '88px', color: 'grey !important' }}>
          <a href="#">++ {editingMessage} </a>
        </div>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Content);

