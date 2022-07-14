import './Header.scss'

function Header() {
    return (
		<div className="dashboard-toolbar">
			<form action="">
				<div className="p-2 bg-light search">
					<div className="input-group">
						<div className="input-group-prepend">
							<button id="btnSearch" type="submit" className="btn btn-link text-dark">
								<i className="fas fa-search"></i>
							</button>
						</div>
						<input
							type="search"
							placeholder="Search or type"
							aria-describedby="button-addon2"
							className="txtSearch form-control border-0 bg-light pr-1"
							style={{ width: '25rem' }}
						/>
					</div>
				</div>
			</form>
			<div className="right-nav">
				<a href="#" className="notification">
					<img src={`${process.env.PUBLIC_URL}/assets/icons/notification.png`} alt="notification" />
				</a>
				<a href="#" className="avatar">
					<img src={`${process.env.PUBLIC_URL}/assets/icons/avatar.png`} alt="avatar" />
				</a>
			</div>
		</div>
	);
}

export default Header;