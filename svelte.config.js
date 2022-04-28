import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';
import path from 'path';
import { imagetools } from 'vite-imagetools';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter(),
		target: '#svelte',
		vite: () => ({
			plugins: [imagetools({ force: true })],
			resolve: {
				alias: {
					$components: path.resolve('./src/components'),
					$state: path.resolve('./src/state'),
					$assets: path.resolve('./assets'),
					$constants: path.resolve('./src/constants.ts')
				}
			}
		})
	}
};

export default config;
