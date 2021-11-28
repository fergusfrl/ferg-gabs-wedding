import { Handler, getSecrets, NetlifySecrets } from '@netlify/functions';
import axios from 'axios';

// https://open.spotify.com/playlist/78puImPMoPJ4wwP5lFQ1Ny?si=8c57c900f19f4513

const PLAYLIST_ID = '78puImPMoPJ4wwP5lFQ1Ny';

const addSongToPlaylist = async (bearerToken, playlistId, trackId) => {
	const { data } = await axios.post(
		`https://api.spotify.com/v1/playlists/${playlistId}/tracks?uris=spotify:track:${trackId}`,
		{},
		{
			headers: {
				Authorization: `Bearer ${bearerToken}`,
				'Content-Type': 'application/json'
			}
		}
	);

	console.log('DATA:', data);

	return data;
};

const handler: Handler = async (event) => {
	const secrets: NetlifySecrets = await getSecrets(event);

	// Not Authenticated.
	if (!secrets?.spotify?.isLoggedIn) {
		return { statusCode: 401 };
	}

	// No track id provided.
	if (!event.queryStringParameters.id) {
		return { statusCode: 404 };
	}

	const bearerToken = secrets.spotify.bearerToken;
	await addSongToPlaylist(bearerToken, PLAYLIST_ID, event.queryStringParameters.id);

	return { statusCode: 200 };
};

export { handler };
