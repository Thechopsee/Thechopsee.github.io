<script>
</script>

<svelte:head>
	<title>404 - Stránka nenalezena</title>
</svelte:head>

<div class="error-container">
	<div class="error-content">
		<a href="/">
			<img src="/logos/logo.svg" alt="Těrlická plachta" class="logo" />
		</a>
		<h1>404</h1>
		<p>Stránka nebyla nalezena</p>
		<a href="/" class="btn">Zpět na úvod</a>
	</div>
</div>

<style>
	.error-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		text-align: center;
		padding: 20px;
	}

	.error-content {
		max-width: 400px;
		width: 100%;
	}

	.logo {
		width: 200px;
		max-width: 100%;
		margin-bottom: 2rem;
	}

	h1 {
		font-size: clamp(4rem, 15vw, 8rem);
		margin: 0;
		color: #45cece;
		line-height: 1;
	}

	p {
		font-size: 1.5rem;
		margin: 1rem 0 2rem;
		color: #dadfe4;
	}

	.btn {
		display: inline-block;
		background: #45cece;
		color: #303b4a;
		padding: 12px 32px;
		border-radius: 999px;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		transition:
			transform 0.2s ease,
			background 0.2s ease,
			box-shadow 0.2s ease;
	}

	.btn:hover {
		transform: translateY(-2px);
		background: #36b5b5;
		box-shadow: 0 4px 15px rgba(69, 206, 206, 0.3);
	}

	.btn:active {
		transform: translateY(0);
	}
</style>
