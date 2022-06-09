import './CardCar.scss';
function CardCar() {
	interface DataRandomCar {
		percent: number;
		img: string;
		title: string;
		share: number;
		price: number;
	}

	const cars: Array<DataRandomCar> = [
		{
			percent: 64,
			img: `${process.env.PUBLIC_URL}/assets/images/cars/mini-cooper.png`,
			title: 'Mini Cooper',
			share: 132,
			price: 32,
		},
		{
			percent: 74,
			img: `${process.env.PUBLIC_URL}/assets/images/cars/maruti-suzuki-suzuki-swift-car-suzuki.png`,
			title: 'Porsche 911 Carrera',
			share: 130,
			price: 28,
		},
		{
			percent: 74,
			img: `${process.env.PUBLIC_URL}/assets/images/cars/mini-countryman-car-bmw-mini-cooper-mini.png`,
			title: 'Porsche 911 Carrera',
			share: 130,
			price: 28,
		},
	];

	return (
		<div className="card-car d-flex justify-content-between">
			{cars.map((car, index) => {
				return (
					<div key={index} className={`card card-` + index}>
						<div className="recommend-percent d-flex align-items-center">
							<img src={`${process.env.PUBLIC_URL}/assets/icons/recommend.png`} alt="recommend" />
							<h5 className='m-lg-2'>{car.percent}% Recommend</h5>
						</div>

						<img src={car.img} alt={car.title} className="img-car" />
						<h3>{car.title}</h3>
						<div className="tools d-flex justify-content-around">
							<div className="share d-flex">
								<a href="#">
									<img src={`${process.env.PUBLIC_URL}/assets/icons/share.png`} alt="share" />
								</a>
								<span>{car.share}K</span>
							</div>

							<a href="#">
								<img src={`${process.env.PUBLIC_URL}/assets/icons/add.png`} alt="add" />
							</a>
							<a href="#">
								<img src={`${process.env.PUBLIC_URL}/assets/icons/thunder.png`} alt="share" />
							</a>

							<span className="price">${car.price}/h</span>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default CardCar;
