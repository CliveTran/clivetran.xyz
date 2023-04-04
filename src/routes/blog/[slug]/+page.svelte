<script lang="ts">
	import Post from '$lib/post.svelte';
	import { onDestroy, onMount } from 'svelte';
	import { title } from './../../../stores/title';

	export let data;

	onMount(() => {
		title.set(data.title);
	});

	onDestroy(() => {
		title.reset();
	});
</script>

<Post data={data.post} />
