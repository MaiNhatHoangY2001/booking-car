import './ChartCard.scss';
import { Config, cubicBezier, Gauge } from 'gauge-chart-js';
import { useEffect } from 'react';

function ChartCard() {
	function updatePercentNode(query: string, value: number) {
		const element: any = document.querySelector(query);
		element.innerHTML = parseInt(value.toString()) + '%';
	}

	interface ChartCardObject {
		title: string;
		titleColor: string;
		mainColor: string;
		backgroundChartColor: string;
		percent: number;
		backgroundColor: string;
		querySelector: string;
		icon: string;
	}

	const chartCardArray: Array<ChartCardObject> = [
		{
			title: 'Energy',
			titleColor: '#FFFFFF',
			mainColor: '#FFFFFF',
			backgroundChartColor: '#B37EFC',
			percent: 0.45,
			backgroundColor: '#A162F7',
			querySelector: 'energy',
			icon: `${process.env.PUBLIC_URL}/assets/icons/icon-chart-energy.png`,
		},
		{
			title: 'Range',
			titleColor: '#242731',
			mainColor: '#FF7E86',
			backgroundChartColor: '#f5f5f5',
			percent: 0.15,
			backgroundColor: '#FFFFFF',
			querySelector: 'range',
			icon: `${process.env.PUBLIC_URL}/assets/icons/icon-chart-range.png`,
		},
		{
			title: 'Break Fluid',
			titleColor: '#242731',
			mainColor: '#A162F7',
			backgroundChartColor: '#f5f5f5',
			percent: 0.09,
			backgroundColor: '#FFFFFF',
			querySelector: 'break-fluid',
			icon: `${process.env.PUBLIC_URL}/assets/icons/icon-chart-break-fluid.png`,
		},
		{
			title: 'Tier Wear',
			titleColor: '#242731',
			mainColor: '#F6CC0D',
			backgroundChartColor: '#f5f5f5',
			percent: 0.25,
			backgroundColor: '#FFFFFF',
			querySelector: 'tier-wear',
			icon: `${process.env.PUBLIC_URL}/assets/icons/icon-chart-tier-wear.png`,
		},
	];

	const createChart = (percent: number, mainColor: string, backgroundChartColor: string, querySelector: string) => {
		const fromAngle: number = 220;
		const toAngle: number = 500;
		const maxValue: number = toAngle - fromAngle;
		let value: number = maxValue * percent;
		updatePercentNode(`.${querySelector} .label`, (value / maxValue) * 100);
		const container: any = document.querySelector(`.${querySelector}`);

		const sharedConfig: Config = {
			lineWidth: 4,
			container,
			fromAngle,
			toAngle,
			easing: cubicBezier(0.165, 0.84, 0.44, 1),
		};

		const gaugeBackground = new Gauge({
			...sharedConfig,
			color: backgroundChartColor,
		});
		gaugeBackground.setValue(maxValue);

		const gaugeMain = new Gauge({
			...sharedConfig,
			color: mainColor,
		});
		gaugeMain.setValue(value);
	};

	useEffect(() => {
		chartCardArray.forEach((chart) => createChart(chart.percent, chart.mainColor, chart.backgroundChartColor, chart.querySelector));
	}, []);

	return (
		<div className="conical-gauge-wrapper d-flex justify-content-around flex-wrap">
			{chartCardArray.map((chartCard, index) => {
				return (
					<div key={index} className="chart m-1" style={{ backgroundColor: chartCard.backgroundColor }}>
						<img src={chartCard.icon} alt={chartCard.title}></img>
						<div className="title" style={{ color: chartCard.titleColor }}>
							{chartCard.title}
						</div>
						<div className={`${chartCard.querySelector} conical-gauge`} style={{ backgroundColor: chartCard.backgroundColor }}>
							<span className="label" style={{ color: chartCard.titleColor }}></span>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default ChartCard;
