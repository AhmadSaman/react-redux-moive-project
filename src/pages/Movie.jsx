import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrendingAndPopular } from '../store/duck/moviesReducer';
import BackgroundSection from '../components/shared/backgroundSection';

function Movie() {
	const params = useParams();
	const dispatch = useDispatch();
	const states = useSelector((state) => state);
	useEffect(() => {
		dispatch(fetchTrendingAndPopular());
	}, []);

	if (states.moviesStore.loading) {
		return <p>Loading</p>;
	}
	return states.moviesStore.popular.results.map((data) => (
		<>
			{Number(params.id) === data.id ? (
				<div>
					<BackgroundSection Movie={data} action={false} />
					<Container>
						<div className="poster-image">
							<Row>
								<Col lg={4}>
									<img
										src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
										alt="background"
									/>
								</Col>
								<Col lg={6}>
									<div className="single-movie-info">
										<h1>{data.title}</h1>
										<h2>{data.media_type}</h2>
										<p>{data.overview}</p>
										<Row>
											<Col>
												<p className="data-vote">
													Realese Date: {data.release_date}
												</p>
											</Col>
											<Col>
												<p className="data-vote">Vote:{data.vote_average}</p>
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
			) : (
				''
			)}
		</>
	));
}

export default Movie;
