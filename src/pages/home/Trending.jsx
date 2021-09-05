import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFillStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Trend({ Movies }) {
	return (
		<>
			<h1 className="most-popular-h1">Trending Movies</h1>
			<div className="most-popular-sec">
				<Container>
					<Row>
						{Movies.map(
							(data, index) =>
								index < 6 && (
									<Col lg={2} className="most-popular-image">
										<Link to={`/movie/${data.id}`}>
											<img
												src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
												alt="test"
												className="img"
											/>
										</Link>
										<h6 className="Movie-name">{data.title}</h6>
										<Row>
											<Col>
												<p className="vote">
													<span className="vote-icon">
														<BsFillStarFill />
													</span>
													Vote:{data.vote_average}
												</p>
											</Col>
											<Col>
												<p className="genre">Action</p>
											</Col>
										</Row>
									</Col>
								)
						)}
					</Row>
				</Container>
			</div>
		</>
	);
}

export default Trend;
