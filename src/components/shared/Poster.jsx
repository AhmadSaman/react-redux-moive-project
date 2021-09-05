import React from 'react';
import PropTypes from 'prop-types';

function Poster({ img }) {
	return (
		<div>
			<img src={`https://image.tmdb.org/t/p/w200/${img}`} alt="" />
		</div>
	);
}

Poster.propTypes = {
	img: PropTypes.string,
};

Poster.defaultProps = {
	img: 'https://allmovies.tube/assets/img/no-poster.png',
};
export default Poster;
