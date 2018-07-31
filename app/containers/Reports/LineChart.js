import React from 'react';
import { Line as LineChart } from 'react-chartjs';

const chartData = (temporalCommitmentModules) => {
  let labels = [];
  let data = [];

  debugger;
  if (!temporalCommitmentModules) {
    return ({
      labels,
      datasets: [
        {
          label: 'Índice de engajamento da turma nesse curso',
          fillColor: 'rgba(210,67,127, 0.5)',
          strokeColor: 'rgba(210,67,127,1)',
          pointColor: 'rgba(210,67,127,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(210,67,127,1)',
          data,
        },
      ],
    });
  }

  labels = [];
  data = [];

  temporalCommitmentModules.forEach((commitment, index) => {
    labels.push(`módulo ${index + 1}`);
    data.push(commitment.commitment);
  });

  return ({
    labels,
    datasets: [
      {
        label: 'Índice de engajamento da turma nesse curso',
        fillColor: 'rgba(210,67,127, 0.5)',
        strokeColor: 'rgba(210,67,127,1)',
        pointColor: 'rgba(210,67,127,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(210,67,127,1)',
        data,
      },
    ],
  });
};

// const options = {
//   scaleShowGridLines: true,
//   scaleGridLineColor: 'rgba(0,0,0,.05)',
//   scaleGridLineWidth: 1,
//   scaleShowHorizontalLines: true,
//   scaleShowVerticalLines: true,
//   bezierCurve: true,
//   bezierCurveTension: 0.4,
//   pointDot: true,
//   pointDotRadius: 4,
//   pointDotStrokeWidth: 1,
//   pointHitDetectionRadius: 20,
//   datasetStroke: true,
//   datasetStrokeWidth: 2,
//   datasetFill: true,
// };

class LineChartExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: chartData(this.props.temporalCommitmentModules),
    };
  }

  render() {
    const data = chartData(this.props.temporalCommitmentModules);
    return (
      <div
        style={{ display: 'flex',
          alignContent: 'center',
          justifyContent: 'center' }}
      >
        <LineChart
          data={data}
          width="400"
          height="180"
        />
      </div>
    );
  }
}

export default LineChartExample;
