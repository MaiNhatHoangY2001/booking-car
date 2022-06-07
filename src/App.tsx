import React from 'react';
import Content from './components/content/Content';
import Menu from './components/menu/Menu';
import Navbar from './components/navbar/Navbar';

import'./App.css';

function App() {
	return (
		<div className="app">
			<Menu />
			<div className="app-content">
				<Navbar />
				<Content />
			</div>
		</div>
	);
}

export default App;
