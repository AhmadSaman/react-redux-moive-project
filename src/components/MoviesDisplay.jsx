import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import Poster from './shared/Poster';
import MovieDetail from './shared/MovieDetail';

function MoviesDisplay({ movie }) {
	return (
		<Col lg={3} md={4} sm={6} xs={12}>
			<Link to={`/movie/${movie.id}`}>
				<Poster img={movie.poster_path} />
			</Link>
			<MovieDetail
				id={movie.id}
				title={movie.title}
				releaseDate={movie.release_date}
				voteAverage={movie.vote_average}
				originalLanguage={movie.original_language}
			/>
		</Col>
	);
}

MoviesDisplay.propTypes = {
	movie: PropTypes.shape({
		id: PropTypes.number.isRequired,
		poster_path: PropTypes.string,
		release_date: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		vote_average: PropTypes.number.isRequired,
		original_language: PropTypes.string.isRequired,
	}).isRequired,
};

export default MoviesDisplay;
