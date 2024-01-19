<script>
    export let data;
		let posts = data.posts

</script>

{JSON.stringify(posts)}
<ul>
    {#each posts as post}		
        <li><a href={`/posts/${post.slug}`}>{post.slug}</a></li>
    {/each}
</ul>
