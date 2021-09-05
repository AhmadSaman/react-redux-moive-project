import React, { useState } from 'react';
import Actor from '../components/Actor';
import Search from '../components/shared/Search';

function Actors() {
	const actorsList = [];
	const [actors, setActors] = useState(actorsList);
	const handleSearch = (query) => {
		setActors(query);
	};
	return (
		<div>
			<Search onSearch={handleSearch} />
			{actors.map((actor) => (
				<Actor key={actor.id} actor={actor} />
			))}
		</div>
	);
}

export default Actors;
