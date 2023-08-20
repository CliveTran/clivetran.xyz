<script lang="ts">
	import { onMount } from 'svelte';

	export let data: string;
	let html: string = '';
	onMount(() => {
		html = data;
	});
</script>

<div class="post-container">{@html html}</div>

<div class="buy-me-a-coffee">
	<a href="https://www.buymeacoffee.com/clivetran"
		><img
			alt="Buy me a coffee"
			src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=clivetran&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"
		/></a
	>
</div>

<style lang="postcss">
	.post-container {
		max-width: 768px;
	}
	.buy-me-a-coffee {
		@apply my-10;
	}
	:global(.post-container ul li) {
		margin-bottom: 30px;
	}
</style>
