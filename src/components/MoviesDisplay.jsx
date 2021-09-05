import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Poster from './shared/Poster';
import MovieDetail from './shared/MovieDetail';

function MoviesDisplay({ movie }) {
	return (
		<Card style={{ width: '18rem' }} className="m-1 shadow-sm">
			<Link
				to={`/movie/${movie.id}`}
				className="text-black text-decoration-none"
			>
				<Poster img={movie.poster_path} />
				<Card.Body>
					<Card.Title>{movie.title}</Card.Title>
					<Card.Text>
						<MovieDetail
							id={movie.id}
							releaseDate={movie.release_date}
							voteAverage={movie.vote_average}
							originalLanguage={movie.original_language}
						/>
					</Card.Text>
				</Card.Body>
			</Link>
		</Card>
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
