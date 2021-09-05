import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../store/duck/moviesReducer';
import BackgroundSection from '../components/shared/backgroundSection';

function Movie() {
	const params = useParams();
	const dispatch = useDispatch();
	const states = useSelector((state) => state.moviesStore);
	useEffect(() => {
		dispatch(fetchMovie(params.id));
	}, []);

	if (states.loading) {
		return <p>Loading</p>;
	}
	return (
		<>
			<div>
				<BackgroundSection Movie={states.movie} action={false} />
				<Container>
					<div className="poster-image">
						<Row>
							<Col lg={4}>
								<img
									src={`https://image.tmdb.org/t/p/original/${states.movie.poster_path}`}
									alt="background"
								/>
							</Col>
							<Col lg={6}>
								<div className="single-movie-info">
									<h1>{states.movie.title}</h1>
									<h2>{states.movie.media_type}</h2>
									<p>{states.movie.overview}</p>
									<Row>
										<Col>
											<p className="states-vote">
												Realese Date: {states.movie.release_date}
											</p>
										</Col>
										<Col>
											<p className="states.movie-vote">
												Vote:{states.movie.vote_average}
											</p>
										</Col>
									</Row>
								</div>

								<button className="watch-trailer-btn" type="button">
									Add to bookmark
								</button>
							</Col>
						</Row>
					</div>
				</Container>
			</div>
		</>
	);
}

export default Movie;
