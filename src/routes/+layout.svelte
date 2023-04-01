<script>
	import Footer from '../lib/footer.svelte';
	import Navbar from '../lib/navbar.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>Clive Tran</title>
</svelte:head>

<div class="flex flex-col h-screen max-sm:p-4">
	<Navbar />
	<div class="container mx-auto flex-grow">
		<slot />
	</div>
	<Footer />
</div>
