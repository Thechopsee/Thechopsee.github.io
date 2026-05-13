import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/api/tableendpoint': {
				target: 'https://dataspracovavac.tode.cz',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api\/tableendpoint/, '/tableendpoint.php')
			}
		}
	}
});
