<script>
    export let data;
		let slugs = data.slugs
		console.log(data)

</script>

<ul>
    {#each slugs as slug}
        <li><a href={`/posts/${slug}`}>{slug}</a></li>
    {/each}
</ul>
