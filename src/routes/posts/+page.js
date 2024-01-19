/** @type {import('./$types').PageLoad} */
export async function load({ data }) {
	return {
		slugs: data.slugs,
	};
}