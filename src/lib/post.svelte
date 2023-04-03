<script lang="ts">
	import { onMount } from 'svelte';

	export let data: string;
	let html: string = '';
	onMount(() => {
		html = data;
	});
</script>

<div class="post-container">{@html html}</div>

<style lang="postcss">
	.post-container {
		max-width: 768px;
	}
</style>
