import React from 'react';
import store from '../../store';
import { Bar, defaults } from 'react-chartjs-2';
import { getUniqueYearsFromGames } from './chartHelper';

function getBarChartData() {
  const games = store.getState().get('games');
  return {
    labels: getUniqueYearsFromGames(games),
    datasets: [{
      label: 'purchased games per year',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };
}

export function GamesByYear() {
  const data = getBarChartData();
  return (
    <Bar
      data={data}
      width={250}
      height={400}
      options={{
        maintainAspectRatio: false
      }}
    />
  );
}