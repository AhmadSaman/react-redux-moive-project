import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchTrendingAndPopular } from '../../store/duck/moviesReducer';
import MainSection from './mainSection';
import MostPopular from './mostPopular';

function HomePage() {
	const dispatch = useDispatch();
	const states = useSelector((state) => ({
		loading: state.moviestore?.loading,
		popular: state.moviestore?.popular.results,
	}));

	useEffect(() => {
		dispatch(fetchTrendingAndPopular());
	}, []);
	return (
		<>
			<MainSection />
			{states.loading ? <MostPopular Movies={states.popular} /> : ''}
		</>
	);
}

export default HomePage;
