<script>
	import Footer from '../lib/footer.svelte';
	import Navbar from '../lib/navbar.svelte';
	import '../app.css';

	export const prerender = true;
</script>

<div class="flex flex-col h-screen max-sm:p-4">
	<Navbar />
	<div class="container mx-auto flex-grow">
		<slot />
	</div>
	<Footer />
</div>
