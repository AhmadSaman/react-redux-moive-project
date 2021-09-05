import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

function MovieDetail({ title, originalLanguage, voteAverage, releaseDate }) {
	return (
		<Container fuild className="p-1">
			<Row>
				<Col sm={9}>
					<h6 className="text-truncate" style={{ fontSize: '0.85rem' }}>
						{title}
					</h6>
				</Col>
				<Col sm={3}>
					<small>{releaseDate.slice(0, 4)}</small>
				</Col>
			</Row>
			<Row>
				<Col sm={3}>
					<small>{originalLanguage.toUpperCase()}</small>
				</Col>
				<Col sm={6}>
					<small>votes: {`${voteAverage}/10`}</small>
				</Col>
			</Row>
		</Container>
	);
}

MovieDetail.propTypes = {
	releaseDate: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	voteAverage: PropTypes.number.isRequired,
	originalLanguage: PropTypes.string.isRequired,
};

export default MovieDetail;
