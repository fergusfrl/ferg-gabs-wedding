import { Handler, getSecrets, NetlifySecrets } from '@netlify/functions';

const searchSpotify = async (bearerToken, searchString) => {
	const searchStringQuery = searchString;

	console.log('SEARCH_STRING:', searchStringQuery);

	const response = await fetch(
		`https://api.spotify.com/v1/search?limit=20&q=${searchStringQuery}`,
		{
			headers: {
				Authorization: bearerToken,
				'Content-Type': 'application/json'
			}
		}
	);
	const data = await response.json();

	console.log('DATA:', data);

	return data;
};

const handler: Handler = async (event) => {
	const secrets: NetlifySecrets = await getSecrets(event);

	console.log('CONTEXT:', event);
	console.log('SECRETS:', secrets);

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
