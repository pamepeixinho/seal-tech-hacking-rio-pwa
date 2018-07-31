import React from 'react';
import { Pie as PieChart } from 'react-chartjs';

const data = [
  {
    value: 25,
    color: '#731FB0',
    highlight: '#731FB0',
    label: 'Não engajados',
  },
  {
    value: 75,
    color: '#A4E817',
    highlight: '#A4E817',
    label: 'engajados',
  },
];

class PieChartExample extends React.Component {
  render() {
    // const data = chartData(this.props.temporalCommitmentModules);
    return (
      <PieChart
        data={data}
        width="127"
        height="127"
      />
    );
  }
}

export default PieChartExample;
