import { Chart, registerables } from 'chart.js';
import { useEffect } from 'react';
import './ChartBoard.scss';
Chart.register(...registerables);

function ChartBoard() {
	useEffect(() => {
		const ctxBar: any = document.getElementById('chartBar');
		const ctxLine: any = document.getElementById('chartLine');

		const chartBar = new Chart(ctxBar, {
			type: 'bar',
			data: {
				labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
				datasets: [
					{
						label: '# of Votes',
						data: [12, 19, 3, 5, 2, 3],
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)',
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)',
						],
						borderWidth: 1,
					},
				],
			},
			options: {
				scales: {
					y: {
						beginAtZero: true,
					},
				},
			},
		});
		const labels = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		const chartLine = new Chart(ctxLine, {
			type: 'line',
			data: {
				labels: labels,
				datasets: [
					{
						label: 'My First Dataset',
						data: [65, 59, 80, 81, 56, 55, 40],
						fill: false,
						borderColor: 'rgb(75, 192, 192)',
						tension: 0.1,
					},
				],
			},
		});

		return () => {
			chartBar.destroy();
			chartLine.destroy();
		};
	}, []);

	return (
		<div className="chart-board d-flex justify-content-around">
			<div className="chart chart-bar">
				<canvas id="chartBar"></canvas>
			</div>
			<div className="chart chart-line">
				<canvas id="chartLine"></canvas>
			</div>
		</div>
	);
}

export default ChartBoard;
