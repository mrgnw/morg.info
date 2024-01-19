import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],

	kit: {
		alias: {
			$components: "./src/components",
			$posts: "./src/posts/",
			$lib: "./src/lib/",
			"@/*": "./src/*"
		},
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: "index.html",
			precompress: true,
			strict: true,
			routes: {
				include: ["/*"],
				exclude: ["<all>"],
			},
		}),
	},

	preprocess: [
		preprocess({
			postcss: true,
		}),
		mdsvex(mdsvexConfig),
		vitePreprocess({}),
	],

	prerender: {
		entries: [
			'*',
			'/posts/',
			'/posts/*',
		]
	}

};

export default config;
