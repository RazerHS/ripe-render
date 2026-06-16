import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		{
			name: 'static-index',
			configureServer(server) {
				server.middlewares.use((req, _res, next) => {
					if (req.url?.endsWith('/') && !req.url.startsWith('/@')) {
						req.url = req.url + 'index.html';
					}
					next();
				});
			}
		}
	]
});
