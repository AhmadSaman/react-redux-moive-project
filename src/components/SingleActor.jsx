import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Poster from './shared/Poster';

function SingleActor({ actorData }) {
	return (
		<Container>
			<Row />
			<Row>
				<Col lg={4}>
					<Poster img={actorData.profile_path} />
				</Col>
				<Col lg={8}> Bio:{actorData.biography}</Col>
			</Row>
			<Row />
		</Container>
	);
}

SingleActor.propTypes = {
	actorData: PropTypes.shape({
		biography: PropTypes.string.isRequired,
		known_for_department: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		popularity: PropTypes.number.isRequired,
		profile_path: PropTypes.string.isRequired,
	}).isRequired,
};

export default SingleActor;
