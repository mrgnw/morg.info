import fs from 'fs/promises';
import path from 'path';

export async function load({ params }) {
	const projectsDirectory = path.resolve('src/posts');
	const fileNames = await fs.readdir(projectsDirectory);

	const slugs = fileNames
		.filter(fileName => fileName.endsWith('.md'))
		.map(fileName => fileName.replace(/\.md$/, ''));

	console.log(slugs)

	return { slugs }
}