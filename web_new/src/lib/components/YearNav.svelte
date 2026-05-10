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
		gap: 10px;
		padding: 12px;
		background: rgba(255, 255, 255, 0.03);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 50px;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
	}

	.year-link {
		color: white;
		padding: 10px 20px;
		border-radius: 30px;
		font-weight: 600;
		font-size: 0.95rem;
		transition: all 0.2s ease-in-out;
		text-decoration: none;
		background: rgba(255, 255, 255, 0.08);
		border: 1px solid rgba(69, 206, 206, 0.3);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 60px;
	}

	.year-link:hover {
		background-color: #45cece;
		color: #303b4a;
		border-color: #45cece;
		box-shadow: 0 0 20px rgba(69, 206, 206, 0.4);
		transform: translateY(-2px);
	}

	.year-link:active {
		transform: translateY(0);
	}

	@media (max-width: 800px) {
		.year-nav-pill {
			border-radius: 24px;
			padding: 10px;
			gap: 8px;
		}

		.year-link {
			padding: 8px 14px;
			font-size: 0.85rem;
			min-width: auto;
		}
	}
</style>
