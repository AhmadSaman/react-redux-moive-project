import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

function ActorDetail({ actorName }) {
	return (
		<Container fuild className="p-1">
			<Row>
				<Col sm={12}>{actorName}</Col>
			</Row>
		</Container>
	);
}

ActorDetail.propTypes = {
	actorName: PropTypes.string.isRequired,
};

export default ActorDetail;
