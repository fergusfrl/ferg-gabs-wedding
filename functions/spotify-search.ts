import { Handler, getSecrets, NetlifySecrets } from '@netlify/functions';
import axios from 'axios';

const searchSpotify = async (bearerToken, searchString) => {
	const { data } = await axios.get(
		`https://api.spotify.com/v1/search?limit=20&type=track&q=${searchString}`,
		{
			headers: {
				Authorization: `Bearer ${bearerToken}`,
				'Content-Type': 'application/json'
			}
		}
	);

	return data.tracks.items.map((song) => ({
		id: song.id,
		title: song.name,
		artist: song.artists.map((artist) => artist.name),
		album: song.album.name
	}));
};

const handler: Handler = async (event) => {
	const secrets: NetlifySecrets = await getSecrets(event);

	// Not Authenticated.
	if (!secrets?.spotify?.isLoggedIn) {
		return { statusCode: 401 };
	}

	// No search string provided.
	if (!event.queryStringParameters.searchString) {
		return { statusCode: 404 };
	}

	const bearerToken = secrets.spotify.bearerToken;
	const songs = await searchSpotify(bearerToken, event.queryStringParameters.searchString);

	return {
		statusCode: 200,
		body: JSON.stringify({ songs })
	};
};

export { handler };
