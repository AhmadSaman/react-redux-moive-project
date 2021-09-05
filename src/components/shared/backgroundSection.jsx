import React from 'react';
import Fade from 'react-reveal/Fade';

function BackgroundSection({ Movie }) {
	return (
		<>
			<div
				className="main-sec"
				style={{
					background: ` linear-gradient( rgba(46,47,77, 0.9), rgba(46,47,77, 0.5)),url(${`https://image.tmdb.org/t/p/original/${Movie.backdrop_path}`})  no-repeat `,
					backgroundSize: '100% 100%',
				}}
			>
				<Fade top>
					<div className="movie-info">
						<h1>{Movie.title}</h1>
						<p>{Movie.media_type}</p>
						<p>Vote Avarage {Movie.vote_average}</p>
					</div>
				</Fade>
			</div>
		</>
	);
}

export default BackgroundSection;
