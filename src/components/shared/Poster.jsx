import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function Poster({ img }) {
	return <Card.Img src={`https://image.tmdb.org/t/p/w200/${img}`} alt="" />;
}

Poster.propTypes = {
	img: PropTypes.string,
};

Poster.defaultProps = {
	img: 'https://allmovies.tube/assets/img/no-poster.png',
};
export default Poster;
