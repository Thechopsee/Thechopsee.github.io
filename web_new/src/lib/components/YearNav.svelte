<script>
	let { years = [] } = $props();
</script>

<nav class="year-nav-container">
	<div class="year-nav-pill">
		{#each years as year}
			<a href="#{year}" class="year-link">{year}</a>
		{/each}
	</div>
</nav>

<style>
	.year-nav-container {
		display: flex;
		justify-content: center;
		margin: 40px 0;
		padding: 0 20px;
	}

	.year-nav-pill {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 8px;
		padding: 8px;
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		border: 1px solid rgba(69, 206, 206, 0.2);
		border-radius: 100px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
	}

	.year-link {
		color: white;
		padding: 8px 18px;
		border-radius: 100px;
		font-weight: 600;
		font-size: 0.9rem;
		transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
		text-decoration: none;
	}

	.year-link:hover {
		background-color: #45cece;
		color: #303b4a;
		box-shadow: 0 4px 15px rgba(69, 206, 206, 0.4);
	}

	@media (max-width: 800px) {
		.year-nav-pill {
			border-radius: 20px;
			padding: 12px;
			gap: 6px;
		}

		.year-link {
			padding: 6px 12px;
			font-size: 0.85rem;
		}
	}
</style>
