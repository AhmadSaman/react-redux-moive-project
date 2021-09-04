import React, { useState } from 'react';
import Search from '../components/shared/Search';
import Movie from '../components/Movie';

function Movies() {
	const moviesList = [
		{
			adult: false,
			backdrop_path: '/6SOpmxAsu5IjGNqZVjjtQl83lkd.jpg',
			genre_ids: [18, 35, 10749],
			id: 80271,
			original_language: 'en',
			original_title: 'LOL',
			overview:
				'In a world connected by YouTube, iTunes, and Facebook, Lola and her friends navigate the peer pressures of high school romance and friendship while dodging their sometimes overbearing and confused parents. When Lola\'s mom, Anne, "accidentally" reads her teenage daughter\'s racy journal, she realizes just how wide their communication gap has grown.',
			popularity: 10.419,
			poster_path: '/AlnBUoKzzPnczrzzxuh0SYwDa3Z.jpg',
			release_date: '2012-02-10',
			title: 'LOL',
			video: false,
			vote_average: 6.2,
			vote_count: 2357,
		},
		{
			adult: false,
			backdrop_path: '/2v8did04P7J1tY5k0sjUAga98Z1.jpg',
			genre_ids: [35],
			id: 21861,
			original_language: 'fr',
			original_title: 'LOL (Laughing Out Loud)',
			overview:
				'Lola, a striking teenaged girl who is on the cusp of adulthood, who longs to rush into the adult world of independence, freedom and sexual exploits, but is tenaciously held back by her mother.',
			popularity: 23.712,
			poster_path: '/cqAlMlnCh2pTaM7us9bO2WlODEY.jpg',
			release_date: '2009-02-04',
			title: 'LOL (Laughing Out Loud)',
			video: false,
			vote_average: 6.5,
			vote_count: 1038,
		},
		{
			adult: false,
			backdrop_path: null,
			genre_ids: [18, 35, 10749],
			id: 44434,
			original_language: 'en',
			original_title: 'LOL',
			overview:
				'The relationships of three men are examined through their use of technology.',
			popularity: 2.436,
			poster_path: '/mNlTN77u8XVzXCnxRl8lVpWUdYQ.jpg',
			release_date: '2006-03-13',
			title: 'LOL',
			video: false,
			vote_average: 6,
			vote_count: 24,
		},
		{
			adult: false,
			backdrop_path: null,
			genre_ids: [18],
			id: 416077,
			original_language: 'en',
			original_title: 'LOL',
			overview: 'A story of a boy and his dog named LOL.',
			popularity: 0.6,
			poster_path: null,
			title: 'LOL',
			video: false,
			vote_average: 6,
			vote_count: 2,
		},
		{
			adult: false,
			backdrop_path: null,
			genre_ids: [18, 10770],
			id: 808954,
			original_language: 'bn',
			original_title: 'LOL',
			overview:
				'A Bangla drama featuring Afran Nisho, Tanjin Tisha, Ziaul Haq Polash and many more.',
			popularity: 0.6,
			poster_path: null,
			release_date: '2019-12-25',
			title: 'LOL',
			video: false,
			vote_average: 0,
			vote_count: 0,
		},
	];
	const [movies, setMovies] = useState(moviesList);
	const handleSearch = (query) => {
		setMovies(query);
	};
	return (
		<div>
			<Search onSearch={handleSearch} />
			{movies.map((movie) => (
				<Movie key={movie.id} movie={movie} />
			))}
		</div>
	);
}

export default Movies;
