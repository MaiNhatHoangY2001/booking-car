import CardCar from "./cardCar/CardCar";
import ChartBoard from "./chartBoard/ChartBoard";
import ChartCard from "./chartCard/ChartCard";

function Dashboard() {
	return (
		<div className="dashboard">
			<ChartCard/>
			<ChartBoard/>
			<CardCar/>
		</div> 
	);
}

export default Dashboard;
