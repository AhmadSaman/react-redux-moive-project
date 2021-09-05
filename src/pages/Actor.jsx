import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import SingleActor from '../components/SingleActor';

function Actor() {
	const params = useParams();
	const [actorData, setActorData] = useState({ isLoading: true });
	useEffect(() => {
		axios
			.get(
				`https://api.themoviedb.org/3/person/${params.id}?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&language=en-US`
			)
			.then((data) => {
				setActorData({ data: data.data, isLoading: false });
			});
	}, []);

	console.log(actorData);
	if (actorData.isLoading) return <div>loading</div>;

	return <SingleActor actorData={actorData.data} />;
}

export default Actor;
