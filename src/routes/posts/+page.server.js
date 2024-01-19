import fs from 'fs/promises';
import path from 'path';

import fetchPosts from '$lib/js/fetchPosts.js';

export async function load({ params }) {
	const posts = await fetchPosts();
	const projectsDirectory = path.resolve('src/posts');
	const fileNames = await fs.readdir(projectsDirectory);

	const slugs = fileNames
		.filter(fileName => fileName.endsWith('.md'))
		.map(fileName => fileName.replace(/\.md$/, ''));

	return {  posts }
}