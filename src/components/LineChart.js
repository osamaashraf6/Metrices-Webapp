import React from 'react';
// import Chart from 'chart.js/auto';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

const LineChart = ({ result }) => {
  // console.log(Chart);
  const data = {
    labels: [2017, 2018, 2019, 2020, 2021],
    datasets: [
      {
        label: 'Net Income',
        data: result,
        borderColor: ['rgba(104,153,199,1)'],
        backgroundColor: ['rgba(104,153,199,1)'],
        pointBackgroundColor: 'rgba(104,153,199,1)',
        pointBorderColor: 'rgba(104,153,199,1)',
      },
    ],
  };
  return <Line data={data} />;
};

LineChart.propTypes = {
  result: PropTypes.arrayOf(PropTypes.number).isRequired,
};
export default LineChart;
