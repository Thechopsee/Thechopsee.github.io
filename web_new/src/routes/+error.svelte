<script>
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>404 - Nenalezeno</title>
</svelte:head>

<div class="error-wrapper">
	<div class="error-container">
		<a href="/">
			<img src="/logos/logo.svg" alt="Těrlická plachta" class="logo" />
		</a>

		<div class="content">
			<h1>404</h1>
			<p>Stránka, kterou hledáte, neexistuje.</p>

			<a href="/" class="home-link">
				Zpět na úvodní stránku
			</a>
		</div>
	</div>
</div>

<style>
	.error-wrapper {
		background:
			radial-gradient(circle at top, rgba(69, 206, 206, 0.12), transparent 32%),
			linear-gradient(180deg, #364355 0%, #303b4a 48%, #2a3442 100%);
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
		box-sizing: border-box;
	}

	.error-container {
		text-align: center;
		max-width: 600px;
		width: 100%;
	}

	.logo {
		width: 100%;
		max-width: 500px;
		margin-bottom: 60px;
		filter: invert(83%) sepia(82%) saturate(1620%) hue-rotate(140deg) brightness(86%) contrast(86%);
		transition: transform 0.3s ease;
	}

	.logo:hover {
		transform: scale(1.02);
	}

	.content {
		padding: 40px;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02));
		border: 1px solid rgba(69, 206, 206, 0.2);
		border-radius: 24px;
		box-shadow: 0 24px 70px rgba(0, 0, 0, 0.2);
	}

	h1 {
		font-size: 4rem;
		margin: 0;
		color: #45cece;
	}

	p {
		font-size: 1.2rem;
		color: #dadfe4;
		margin: 10px 0 40px;
	}

	.home-link {
		display: inline-block;
		padding: 14px 32px;
		background: rgba(69, 206, 206, 0.1);
		border: 1px solid rgba(69, 206, 206, 0.3);
		border-radius: 999px;
		color: #45cece;
		text-decoration: none;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		transition: all 0.3s ease;
	}

	.home-link:hover {
		background: rgba(69, 206, 206, 0.2);
		border-color: #45cece;
		transform: translateY(-2px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	}

	@media (max-width: 600px) {
		.logo {
			max-width: 300px;
		}
		h1 {
			font-size: 3rem;
		}
		.content {
			padding: 30px 20px;
		}
	}
</style>
