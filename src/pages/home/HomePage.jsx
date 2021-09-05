import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchTrendingAndPopular } from '../../store/duck/moviesReducer';
import MainSection from './mainSection';
import MostPopular from './mostPopular';

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
		<>
			<MainSection Movie={states.moviesStore.popular.results[9]} />

			<MostPopular Movies={states.moviesStore.popular.results} />
		</>
	);
}

export default HomePage;
