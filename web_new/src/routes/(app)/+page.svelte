<svelte:head>
	<title>Těrlická plachta 2026</title>
</svelte:head>

<div class="page-shell">
	<section class="hero">
		<div class="hero-copy">
			<h1>Těrlická plachta 2026</h1>
			<p class="lead">Kdy: 25.–27. 9. 2026 • RS Vyhlídka Těrlicko</p>
			<p class="lead">Kde: RS Vyhlídka Těrlicko</p>
			<p class="lead">
				Co: Setkání plachetnic třídy NSS - A, B, C, RG-650 a další typy plachetnic bez strojního pohonu
			</p>
		</div>
	</section>

	<div class="propozice-section info-card">
			<h3 class="eyebrow-header">PROPOZICE</h3>
			<p class="status">Poslední změna : Doposud nezveřejněno</p>
			<div id="propozice">
				<img src="/propozice/propozice1.png" alt="Propozice 1" class="myImg" />
				<img src="/propozice/propozice2.png" alt="Propozice 2" class="myImg" />
			</div>
		</div>

		<div class="map-section">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5154.750184284669!2d18.491579140758724!3d49.760200904961785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713f8a4faf18b1d%3A0x173c33626a5fee4d!2zUmVrcmVhxI1uw60gU3TFmWVkaXNrbyBOYSBWeWhsw61kY2U!5e0!3m2!1scs!2scz!4v1643894168889!5m2!1scs!2scz"
				width="100%"
				height="400"
				style="border:0;"
				allowfullscreen
				loading="lazy"
				title="Mapa místa konání"
			></iframe>
		</div>
	</div>

<style>
	.page-shell {
		max-width: 1180px;
		margin: 0 auto;
		padding: 32px 20px 64px;
	}

	.hero {
		margin-bottom: 28px;
	}

	.hero-copy {
		border: 1px solid rgba(69, 206, 206, 0.2);
		border-radius: 24px;
		box-shadow: 0 24px 70px rgba(0, 0, 0, 0.2);
		padding: 32px;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02));
		transition:
			transform 0.3s ease,
			border-color 0.3s ease;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.hero-copy:hover {
		transform: translateY(-5px);
		border-color: rgba(69, 206, 206, 0.4);
	}

	h1 {
		margin-bottom: 14px;
		font-size: clamp(2.3rem, 5vw, 4.2rem);
		line-height: 0.96;
		color: #45cece;
	}

	p {
		font-size: 1.2rem;
		color: #dadfe4;
	}

	.info-card p {
		color: #303b4a;
	}

	.propozice-section {
		margin-bottom: 60px;
	}

	.info-card {
		border: 1px solid rgba(69, 206, 206, 0.2);
		border-radius: 24px;
		background: rgba(255, 255, 255, 0.96);
		color: #303b4a;
		padding: 32px;
		box-shadow: 0 24px 70px rgba(0, 0, 0, 0.2);
		transition:
			transform 0.3s ease,
			border-color 0.3s ease;
		height: 100%;
		box-sizing: border-box;
		text-align: center;
	}

	.info-card:hover {
		transform: translateY(-5px);
		border-color: rgba(69, 206, 206, 0.4);
	}

	.eyebrow {
		margin: 0 0 10px;
		text-transform: uppercase;
		letter-spacing: 0.18em;
		font-size: 0.8rem;
		opacity: 0.75;
		color: #45cece;
	}

	.lead {
		margin: 0 0 10px;
		color: rgba(255, 255, 255, 0.86);
		font-size: 1.15rem;
		line-height: 1.5;
		font-weight: 400;
	}

	.eyebrow-header {
		display: inline-block;
		margin: 0 0 16px;
		padding: 4px 12px;
		background: rgba(69, 206, 206, 0.1);
		border: 1px solid rgba(69, 206, 206, 0.2);
		border-radius: 999px;
		text-transform: uppercase;
		letter-spacing: 0.18em;
		font-size: 0.7rem;
		font-weight: 600;
		color: #008080;
	}

	.status {
		margin-bottom: 30px;
		font-style: italic;
		opacity: 1;
		color: #303b4a;
	}

	#propozice {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
	}

	.myImg {
		width: 100%;
		border-radius: 8px;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
		transition: transform 0.3s ease;
	}

	.myImg:hover {
		transform: scale(1.02);
	}

	.map-section {
		margin-bottom: 60px;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
	}

	@media (max-width: 800px) {
		#propozice {
			grid-template-columns: 1fr;
		}
	}
</style>
