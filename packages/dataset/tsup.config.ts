import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
	entry: ['src/index.ts', 'src/**/*.ts', 'src/**/*.tsx'],
	format: ['esm', 'cjs'],
	dts: true,
	clean: true,
	target: 'es2020',
	sourcemap: true,
	external: ['react', 'react/jsx-runtime'],
	minify: !options.watch,
	banner: {
		js: '"use client";',
	},
}));
