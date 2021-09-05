import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchTrendingAndPopular } from '../../store/duck/moviesReducer';
import MainSection from './mainSection';
import MostPopular from './mostPopular';
import Trend from './Trending';

function HomePage() {
	const dispatch = useDispatch();
	const states = useSelector((state) => state);
	useEffect(() => {
		dispatch(fetchTrendingAndPopular());
	}, []);

	if (states.moviesStore.loading) {
		return <p>Loading</p>;
	}

	return (
		<div className="App">
			<MainSection Movie={states.moviesStore.popular.results} />

			<MostPopular Movies={states.moviesStore.popular.results} />
			<Trend Movies={states.moviesStore.trending.results} />
		</div>
	);
}

export default HomePage;
