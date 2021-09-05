import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
// import Search from '../components/shared/Search';
import { Container, Row } from 'react-bootstrap';
import MoviesDisplay from '../components/MoviesDisplay';
import { fetchMovies } from '../store/duck/moviesReducer';

function Movies() {
	const dispatch = useDispatch();

	const moviesData = useSelector((state) => ({
		loading: state.moviesStore.loading,
		movies: state.moviesStore.movies?.results,
	}));

	useEffect(() => {
		dispatch(fetchMovies());
	}, []);

	if (moviesData.loading) return <div>is loading</div>;
	return (
		<Container>
			<Row>
				{/* <Search onSearch={handleSearch} /> */}
				{moviesData.movies
					? moviesData.movies.map((movie) => (
							<MoviesDisplay key={movie.id} movie={movie} />
					  ))
					: null}
			</Row>
		</Container>
	);
}

export default Movies;
