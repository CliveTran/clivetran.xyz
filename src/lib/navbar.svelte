<script lang="ts">
	let showMenu = false;

	function toggleMenu() {
		showMenu = !showMenu;
	}
</script>

<nav class="flex items-center justify-between flex-wrap relative">
	<code class="p-6"><a class="font-semibold" href="/">/clivetran.xyz</a></code>
	<ul class="p-6 hidden sm:flex">
		<li class="px-6 font-semibold">
			<a class="pb-1" href="/resume">Resume</a>
		</li>
		<li class="px-6 font-semibold">
			<a class="pb-1" href="/blog">Blog</a>
		</li>
		<li class="px-6 font-semibold">
			<a class="pb-1" href="/contact">Contact</a>
		</li>
	</ul>
	<button class="p-6 sm:hidden" on:click={toggleMenu}>
		<svg
			class="menu"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			><path
				d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
				fill="currentColor"
			/><path
				d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
				fill="currentColor"
			/><path
				d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
				fill="currentColor"
			/></svg
		>
	</button>
	<div
		class={showMenu
			? 'absolute top-12 w-full mt-2 shadow-lg bg-white focus:outline-none'
			: 'hidden'}
	>
		<div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
			<a
				on:click={toggleMenu}
				href="/resume"
				class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
				role="menuitem">Resume</a
			>
			<a
				on:click={toggleMenu}
				href="/blog"
				class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
				role="menuitem">Blog</a
			>
			<a
				on:click={toggleMenu}
				href="/contact"
				class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
				role="menuitem">Contact</a
			>
		</div>
	</div>
</nav>

<style lang="postcss">
	svg.menu:hover {
		cursor: pointer;
	}
</style>
