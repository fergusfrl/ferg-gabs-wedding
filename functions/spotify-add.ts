import { Handler, getSecrets, NetlifySecrets } from '@netlify/functions';
import axios from 'axios';

const PLAYLIST_ID = '78puImPMoPJ4wwP5lFQ1Ny';

const addSongToPlaylist = async (bearerToken, playlistId, trackId) => {
	await axios.post(
		`https://api.spotify.com/v1/playlists/${playlistId}/tracks?uris=spotify:track:${trackId}`,
		{},
		{
			headers: {
				Authorization: `Bearer ${bearerToken}`,
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'Content-Type',
				'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
			}
		}
	);
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
