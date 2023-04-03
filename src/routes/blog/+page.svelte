<script>
	export let data;
</script>

<ul>
	{#each data.posts as { slug, title, date }}
		<li><h4><a href="/blog/{slug}">{title}</a></h4></li>
		<i>{date}</i>
	{/each}
</ul>
