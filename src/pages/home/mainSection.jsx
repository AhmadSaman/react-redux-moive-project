import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { BsPlayFill } from 'react-icons/bs';
import { IoIosAdd } from 'react-icons/io';

function MainSection({ Movie }) {
	const [test, settest] = useState(false);
	function handlechang() {
		settest(true);
	}
	return (
		<>
			<div
				className="main-sec"
				style={{
					background: ` linear-gradient( rgba(46,47,77, 0.9), rgba(46,47,77, 0.5)),url(${
						test
							? `https://image.tmdb.org/t/p/original/${Movie.backdrop_path}`
							: ''
					})  no-repeat `,
					backgroundSize: '100% 100%',
				}}
			>
				<Fade top>
					<div className="movie-info">
						<h1>{test ? Movie.title : ''}</h1>
						<p>{test ? Movie.media_type : ''}</p>
						<p>Vote Avarage {test ? Movie.vote_average : ''}</p>

						<div>
							<div className="add">
								<button className="play-button" type="submit">
									<BsPlayFill className="icon" />
								</button>

								<button type="submit">
									<IoIosAdd className="icon" />
								</button>
							</div>
						</div>
					</div>
				</Fade>
			</div>
			<button
				type="button"
				onClick={handlechang}
				style={{ display: test ? 'none' : '' }}
			>
				clicMe
			</button>
		</>
	);
}

export default MainSection;
