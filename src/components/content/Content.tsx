import './Content.scss';
import Dashboard from './dashboard/Dashboard';

function Content() {
	return (
		<div className="content">
			{/* <div className="container-fluid">
				<div className="card">
					<div className="card-header">
						<h1>Welcome back Jim</h1>
					</div>
					<div className="card-body">
						<p>Your account type is: Administrator</p>
					</div>
					<div></div>
				</div>
			</div> */}
			<Dashboard />
		</div>
	);
}

export default Content;
