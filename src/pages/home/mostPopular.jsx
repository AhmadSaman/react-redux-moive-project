import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFillStarFill } from 'react-icons/bs';

function MostPopular({ Movies }) {
	return (
		<>
			<h1 className="most-popular-h1">Most Popular Movies</h1>
			<div className="most-popular-sec">
				<Container>
					<Row>
						{Movies.map(
							(data, index) =>
								index < 12 && (
									<Col lg={2} className="most-popular-image">
										<img
											src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
											alt="test"
											className="img"
										/>
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
					<a className="seeMore" href="home">
						seeMore...
					</a>
				</Container>
			</div>
		</>
	);
}

export default MostPopular;
