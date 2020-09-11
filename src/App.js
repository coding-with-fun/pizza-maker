import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from './components/Checkout';
import Customize from './components/Customize';
import Header from './components/Header';

function App() {
	const [ingredients, setIngredients] = useState({
		basil: false,
		cheese: false,
		mushroom: false,
		olive: false,
		pineapple: false,
		tomato: false,
	});

	useEffect(() => {
		const data = localStorage.getItem('ingredients');
		if (data) {
			setIngredients(JSON.parse(data));
		}
	}, []);

	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route exact path='/'>
						<Customize
							ingredients={ingredients}
							setIngredients={setIngredients}
						/>
					</Route>
					<Route path='/checkout'>
						<Checkout ingredients={ingredients} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
