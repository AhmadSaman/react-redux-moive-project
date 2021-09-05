import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import Poster from './shared/Poster';
import ActorDetail from './shared/ActorDetail';

function ActorsDisplay({ actor }) {
	return (
		<Col lg={3} md={4} sm={6} xs={12}>
			<Poster img={actor.profile_path} />
			<ActorDetail id={actor.id} actorName={actor.name} />
		</Col>
	);
}

ActorsDisplay.propTypes = {
	actor: PropTypes.shape({
		id: PropTypes.number.isRequired,
		profile_path: PropTypes.string,
		name: PropTypes.string.isRequired,
	}).isRequired,
};

export default ActorsDisplay;
