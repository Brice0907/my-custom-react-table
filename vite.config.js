//vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'src/tableau.jsx'),
			name: 'my-custom-react-table',

			fileName: 'tableau',
		},
		rollupOptions: {
			output: {
				assetFileNames: (assetInfo) => {
					if (assetInfo.name === 'tableau.css') {
						return 'tableau.css'
					}
					return assetInfo.name
				},
			},
			external: ['react'],
		},
	},
})
