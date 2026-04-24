<script>
	import { onMount } from 'svelte';
	import { historyData } from '$lib/data/history.js';

	/** @type {Record<number, string | null>} */
	let expandedSection = $state({});

	let modalImg = $state('');
	let showScrollBtn = $state(false);

	onMount(() => {
		const handleScroll = () => {
			showScrollBtn = window.scrollY > 300;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	/**
	 * @param {number} year
	 * @param {string} section
	 */
	function toggleSection(year, section) {
		if (expandedSection[year] === section) {
			expandedSection[year] = null;
		} else {
			expandedSection[year] = section;
		}
	}

	/**
	 * @param {string} src
	 */
	function openModal(src) {
		modalImg = src;
	}

	function closeModal() {
		modalImg = '';
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

</script>

<svelte:head>
	<title>Historie | Těrlická plachta</title>
</svelte:head>

<div class="container">
	<header class="page-header">
		<h1>Historie</h1>
		<p>Portské, buček, soudek rumu. A tak to všechno začalo...</p>
	</header>

	<nav class="year-nav">
		<div class="nav-inner">
			{#each historyData as data}
				<a href="#{data.year}" class="year-link">{data.year}</a>
			{/each}
		</div>
	</nav>

	<div class="history-list">
		{#each historyData as data}
			<section id={String(data.year)} class="year-card">
				<h2>{data.year}</h2>

				<div class="gallery-grid">
					<div class="main-images">
						<!-- svelte-ignore a11y_click_events_have_key_events -->
						<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
						<img
							src="/galerie/fotky/{data.year}/{data.year}_1.{data.imgExtensions?.[1] || 'jpg'}"
							alt="{data.year} - 1"
							loading="lazy"
							class="gallery-img"
							onclick={() => openModal(`/galerie/fotky/${data.year}/${data.year}_1.${data.imgExtensions?.[1] || 'jpg'}`)}
						/>
						<!-- svelte-ignore a11y_click_events_have_key_events -->
						<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
						<img
							src="/galerie/fotky/{data.year}/{data.year}_2.{data.imgExtensions?.[2] || 'jpg'}"
							alt="{data.year} - 2"
							loading="lazy"
							class="gallery-img"
							onclick={() => openModal(`/galerie/fotky/${data.year}/${data.year}_2.${data.imgExtensions?.[2] || 'jpg'}`)}
						/>
					</div>
					<div class="sub-images">
						{#each [3, 4, 5, 6] as i}
							<!-- svelte-ignore a11y_click_events_have_key_events -->
							<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
							<img
								src="/galerie/fotky/{data.year}/{data.year}_{i}.{data.imgExtensions?.[i] || 'jpg'}"
								alt="{data.year} - {i}"
								loading="lazy"
								class="gallery-img"
								onclick={() => openModal(`/galerie/fotky/${data.year}/${data.year}_${i}.${data.imgExtensions?.[i] || 'jpg'}`)}
							/>
						{/each}
					</div>
				</div>

				<div class="card-actions">
					<button
						class="action-btn"
						class:active={expandedSection[data.year] === 'articles'}
						onclick={() => toggleSection(data.year, 'articles')}
					>
						Články ↧
					</button>
					<button
						class="action-btn"
						class:active={expandedSection[data.year] === 'gallery'}
						onclick={() => toggleSection(data.year, 'gallery')}
					>
						Galerie ↧
					</button>
					{#if data.results.type === 'download'}
						<a
							href="/vysledky/vysledky-{data.year}.xlsx"
							download="vysledky-{data.year}.xlsx"
							class="action-btn link-btn"
						>
							Výsledky ↧
						</a>
					{:else}
						<a href={data.results.url} class="action-btn link-btn">
							Výsledky ↧
						</a>
					{/if}
				</div>

				{#if expandedSection[data.year]}
					<div class="expanded-content">
						{#if expandedSection[data.year] === 'articles'}
							<div class="links-list">
								{#if data.articles.length > 0}
									{#each data.articles as article}
										<a href={article.url} target="_blank" rel="noopener noreferrer" class="external-link">
											{article.label}
										</a>
									{/each}
								{:else}
									<p>Žádné články k dispozici.</p>
								{/if}
							</div>
						{:else if expandedSection[data.year] === 'gallery'}
							<div class="links-list">
								{#if data.gallery.length > 0}
									{#each data.gallery as item}
										<a href={item.url} target="_blank" rel="noopener noreferrer" class="external-link">
											{item.label}
										</a>
									{/each}
								{:else}
									<p>Žádné galerie k dispozici.</p>
								{/if}
							</div>
						{/if}
					</div>
				{/if}
			</section>
		{/each}
	</div>
</div>

{#if showScrollBtn}
	<button class="scroll-top" onclick={scrollToTop} title="Nahoru">
		Nahoru
	</button>
{/if}

{#if modalImg}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="modal" onclick={closeModal}>
		<span class="close">&times;</span>
		<img class="modal-content" src={modalImg} alt="Zvětšený obrázek" onclick={(e) => e.stopPropagation()}/>
	</div>
{/if}

<style>
	.container {
		max-width: 1180px;
		margin: 0 auto;
		padding: 0 20px 60px;
	}

	.page-header {
		text-align: center;
		margin-bottom: 40px;
	}

	h1 {
		font-size: 3rem;
		margin-bottom: 10px;
	}

	.year-nav {
		margin: 30px 0;
		position: relative;
		text-align: center;
	}

	.year-nav::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 0;
		right: 0;
		height: 1px;
		background: rgba(255, 255, 255, 0.3);
		z-index: 0;
	}

	.nav-inner {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 15px;
		z-index: 1;
	}

	.year-link {
		background-color: #45cece;
		color: #303b4a;
		padding: 8px 16px;
		border-radius: 5px;
		font-weight: bold;
		transition: all 0.2s;
	}

	.year-link:hover {
		background-color: white;
		color: #45cece;
	}

	.history-list {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	.year-card {
		background-color: #dadfe4;
		border-radius: 5px;
		padding: 1%;
		margin-left: 10%;
		margin-right: 10%;
		color: #303b4a;
		scroll-margin-top: 20px;
		text-align: center;
	}

	.year-card h2 {
		margin-top: 0;
		font-size: 2rem;
		border-bottom: 2px solid #303b4a;
		display: inline-block;
		margin-bottom: 20px;
		font-family: 'Century Gothic', CenturyGothic, sans-serif;
		font-weight: normal;
	}

	.gallery-grid {
		display: flex;
		flex-direction: column;
		gap: 15px;
		margin-bottom: 20px;
	}

	.main-images {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 15px;
	}

	.sub-images {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 15px;
	}

	.gallery-img {
		width: 100%;
		border-radius: 4px;
		cursor: pointer;
		transition: opacity 0.2s;
		display: block;
	}

	.gallery-img:hover {
		opacity: 0.8;
	}

	/* Modal Styles */
	.modal {
		position: fixed;
		z-index: 1000;
		padding-top: 50px;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: rgba(0, 0, 0, 0.9);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.modal-content {
		margin: auto;
		display: block;
		width: 80%;
		max-width: 900px;
		border-radius: 4px;
		animation: zoom 0.3s;
	}

	@keyframes zoom {
		from {
			transform: scale(0.9);
			opacity: 0;
		}
		to {
			transform: scale(1);
			opacity: 1;
		}
	}

	.close {
		position: absolute;
		top: 15px;
		right: 35px;
		color: #f1f1f1;
		font-size: 40px;
		font-weight: bold;
		cursor: pointer;
		transition: color 0.2s;
	}

	.close:hover {
		color: #45cece;
	}

	@media (max-width: 700px) {
		.modal-content {
			width: 95%;
		}
	}

	.scroll-top {
		position: fixed;
		bottom: 20px;
		right: 30px;
		z-index: 99;
		background-color: #45cece;
		color: white;
		border: none;
		padding: 15px;
		border-radius: 4px;
		cursor: pointer;
		font-weight: bold;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
		transition: all 0.2s;
	}

	.scroll-top:hover {
		background-color: white;
		color: #303b4a;
	}

	.card-actions {
		display: flex;
		justify-content: space-around;
		gap: 15px;
		margin-top: 20px;
	}

	.action-btn {
		flex: 1;
		background-color: #303b4a;
		color: white;
		border: none;
		border-radius: 4px;
		padding: 10px;
		cursor: pointer;
		font-size: 1rem;
		transition: all 0.2s;
	}

	.action-btn:hover {
		background-color: white;
		color: #303b4a;
		outline: 2px solid #303b4a;
		text-decoration: none;
	}

	.link-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
	}

	.action-btn.active {
		background-color: white;
		color: #303b4a;
	}

	.expanded-content {
		margin-top: 20px;
		padding-top: 20px;
		border-top: 1px solid rgba(48, 59, 74, 0.2);
	}

	.links-list {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}

	.external-link {
		background-color: #303b4a;
		color: white;
		padding: 8px 20px;
		border-radius: 4px;
		text-decoration: none;
		min-width: 200px;
		text-align: center;
		transition: all 0.2s;
	}

	.external-link:hover {
		background-color: #45cece;
	}

	@media (max-width: 800px) {
		.year-card {
			margin-left: 0;
			margin-right: 0;
			padding: 15px;
		}

		.main-images {
			grid-template-columns: 1fr;
		}

		.sub-images {
			grid-template-columns: 1fr 1fr;
		}

		.card-actions {
			flex-direction: column;
			align-items: center;
			gap: 10px;
		}

		.action-btn {
			width: 80%;
			padding: 15px;
		}
	}
</style>
