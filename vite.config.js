//vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'src/Modal.jsx'),
			name: 'react-modal-jarod41',

			fileName: 'Modal',
		},
		rollupOptions: {
			output: {
				assetFileNames: (assetInfo) => {
					if (assetInfo.name === 'Modal.css') {
						return 'Modal.css'
					}
					return assetInfo.name
				},
			},
			external: ['react'],
		},
	},
})
