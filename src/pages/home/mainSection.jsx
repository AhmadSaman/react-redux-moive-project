import React from 'react';
import Fade from 'react-reveal/Fade';
import { Carousel } from 'react-bootstrap';
import { BsPlayFill } from 'react-icons/bs';
import { IoIosAdd } from 'react-icons/io';
import { Link } from 'react-router-dom';

function MainSection({ Movie }) {
	return (
		<>
			<Carousel>
				{Movie.map(
					(data, index) =>
						index < 3 && (
							<Carousel.Item
								className="slider"
								interval={2000}
								style={{
									background: ` linear-gradient( rgba(46,47,77, 0.9), rgba(46,47,77, 0.5)),url(${`https://image.tmdb.org/t/p/original/${data.backdrop_path}`})  no-repeat `,
									backgroundSize: '100% 100%',
								}}
							>
								<Fade top>
									<div className="movie-info">
										<h1 className="movie-h1">{data.title}</h1>
										<p>{data.media_type}</p>
										<p>Vote Avarage {data.vote_average}</p>

										<div>
											<div className="add">
												<Link to={`/movie/${data.id}`}>
													<button className="play-button" type="submit">
														<BsPlayFill className="icon" />
													</button>
												</Link>

												<button type="submit">
													<IoIosAdd className="icon" />
												</button>
											</div>
										</div>
									</div>
								</Fade>
							</Carousel.Item>
						)
				)}
			</Carousel>
		</>
	);
}

export default MainSection;
