<script>
	import Footer from '../lib/footer.svelte';
	import Navbar from '../lib/navbar.svelte';
	import '../app.css';
	import { title } from '../stores/title';
</script>

<svelte:head>
	<title>{$title}</title>
	<meta name="google-site-verification" content="HWuHwIMteyCcPVDMs1CHJC0jXI0kq2i8Qx0_lEr9Gs0" />
	<meta name="Description" content="An ordinary developer who loves sharing and learning about coding, programming, software, and technologies.">
</svelte:head>

<div class="flex flex-col h-screen max-sm:p-4">
	<Navbar />
	<div class="container mx-auto flex-grow">
		<slot />
	</div>
	<Footer />
</div>
