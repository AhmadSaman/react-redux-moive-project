import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
// eslint-disable-next-line no-unused-vars
import Search from '../components/shared/Search';
import { fetchActors } from '../store/duck/moviesReducer';
import ActorsDisplay from '../components/ActorsDisplay';

function Actors() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchActors());
	}, []);

	const actorsData = useSelector((state) => ({
		loading: state.moviesStore.loading,
		actors: state.moviesStore.actors?.results,
	}));

	console.log(actorsData.actors);

	if (actorsData.loading) return <div>is loading</div>;
	return (
		<Container>
			<Row>
				{/* <Search onSearch={handleSearch} /> */}
				{actorsData.actors
					? actorsData.actors.map((actor) => (
							<ActorsDisplay key={actor.id} actor={actor} />
					  ))
					: null}
			</Row>
		</Container>
	);
}

export default Actors;
