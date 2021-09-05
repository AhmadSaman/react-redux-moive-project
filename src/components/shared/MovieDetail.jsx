import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

function MovieDetail({ originalLanguage, voteAverage, releaseDate }) {
	return (
		<Container fuild className="p-1">
			<Row>
				<Col sm={12}>
					<small>{releaseDate.slice(0, 4)}</small>
				</Col>
			</Row>
			<Row>
				<Col sm={12}>
					<small>{originalLanguage.toUpperCase()}</small>
				</Col>
				<Col sm={12}>
					<small>votes: {`${voteAverage}/10`}</small>
				</Col>
			</Row>
		</Container>
	);
}

MovieDetail.propTypes = {
	releaseDate: PropTypes.string.isRequired,
	voteAverage: PropTypes.number.isRequired,
	originalLanguage: PropTypes.string.isRequired,
};

export default MovieDetail;
