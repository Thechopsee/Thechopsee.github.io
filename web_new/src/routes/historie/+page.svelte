<script>
	import { historyData } from '$lib/data/history.js';

	/** @type {Record<number, string | null>} */
	let expandedSection = $state({});

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

				<div class="gallery-placeholders">
					<div class="main-images">
						<div class="placeholder large">FOTKA 1 (100%)</div>
						<div class="placeholder large">FOTKA 2 (100%)</div>
					</div>
					<div class="sub-images">
						<div class="placeholder small">FOTKA 3</div>
						<div class="placeholder small">FOTKA 4</div>
						<div class="placeholder small">FOTKA 5</div>
						<div class="placeholder small">FOTKA 6</div>
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
		border-radius: 8px;
		padding: 25px;
		color: #303b4a;
		scroll-margin-top: 20px;
	}

	.year-card h2 {
		margin-top: 0;
		font-size: 2rem;
		border-bottom: 2px solid #303b4a;
		display: inline-block;
		margin-bottom: 20px;
	}

	.gallery-placeholders {
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

	.placeholder {
		background-color: #bdc3c7;
		border: 2px dashed #7f8c8d;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #7f8c8d;
		font-weight: bold;
		border-radius: 4px;
	}

	.placeholder.large {
		aspect-ratio: 16 / 9;
	}

	.placeholder.small {
		aspect-ratio: 4 / 3;
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
		.main-images {
			grid-template-columns: 1fr;
		}
		.sub-images {
			grid-template-columns: 1fr 1fr;
		}
		.card-actions {
			flex-direction: column;
		}
		.action-btn {
			width: 100%;
		}
	}
</style>
