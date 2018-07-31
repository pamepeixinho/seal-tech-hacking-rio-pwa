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

const Content = (props) => {
  const { classes } = props;
  return (
    <div style={{ margin: '0 auto', margin: '48px 0 0' }}>
      <Paper className={classes.root} elevation={1}>
        <b>Módulo 1</b>
        <br />
        <div>
          <a href="#"><img width="18" hight="18" src={PDFImg} />Análise exploratória de dados</a>
        </div>
        <div>
          <a href="#"><img width="18" hight="18" src={PDFImg} />Matrizes de contigência</a>
        </div>
        <div>
          <a href="#"><img width="18" hight="18" src={slideImg} />Interpretação de dados</a>
        </div>
        <div>
          <a href="#"><img width="18" hight="18" src={videoImg} />Interpretação de dados(videoaula)</a>
        </div>
        <div style={{ marginTop: '88px', color: 'grey !important' }}>
          <a href="#">++ Editar Módulo 1 do Curso </a>
        </div>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Content);

