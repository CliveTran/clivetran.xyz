<script>
	import Footer from '../lib/footer.svelte';
	import Navbar from '../lib/navbar.svelte';
	import '../app.css';
</script>

<div class="flex flex-col h-screen">
	<Navbar />
	<div class="container mx-auto flex-grow">
		<slot />
	</div>
	<Footer />
</div>
