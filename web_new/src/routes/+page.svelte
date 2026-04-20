<svelte:head>
	<title>Těrlická plachta 2026</title>
</svelte:head>

<div class="container">
	<div id="info">
		<div id="info_nahore">
			<div id="info_text_1a">
				<h3>KDY</h3>
				<p>25.-27.9.2026</p>
			</div>
			<div id="info_text_1b">
				<h3>KDE</h3>
				<p>RS Vyhlídka Těrlicko</p>
			</div>
		</div>

		<div class="info_text_2">
			<div>
				<h3>CO</h3>
				<p>Setkání plachetnic třídy NSS - A,B,C,RG-650 a další typy plachetnic bez strojního pohonu</p>
			</div>
		</div>
	</div>

	<div class="propozice-section">
		<h3>PROPOZICE</h3>
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
	.container {
		max-width: 1180px;
		margin: 0 auto;
		padding: 0 20px;
	}

	#info {
		margin-bottom: 60px;
	}

	#info_nahore {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 40px;
		margin-bottom: 30px;
	}

	#info_text_1a h3,
	#info_text_1a p {
		text-align: right;
	}

	#info_text_1b h3,
	#info_text_1b p {
		text-align: left;
	}

	.info_text_2 {
		text-align: center;
		max-width: 600px;
		margin: 0 auto;
	}

	h3 {
		font-size: 2rem;
		margin-bottom: 10px;
		color: #45cece;
	}

	p {
		font-size: 1.2rem;
		color: #dadfe4;
	}

	.propozice-section {
		text-align: center;
		margin-bottom: 60px;
	}

	.status {
		margin-bottom: 30px;
		font-style: italic;
		opacity: 0.8;
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

	@media (max-width: 768px) {
		#info_nahore {
			grid-template-columns: 1fr;
			gap: 20px;
		}
		#info_text_1a h3,
		#info_text_1a p,
		#info_text_1b h3,
		#info_text_1b p {
			text-align: center;
		}
		#propozice {
			grid-template-columns: 1fr;
		}
	}
</style>
