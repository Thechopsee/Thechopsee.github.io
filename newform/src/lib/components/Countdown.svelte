<script>
	import { onMount } from 'svelte';

	/** @type {{ deadline: Date, closed: boolean }} */
	let { deadline, closed = $bindable() } = $props();

	let countdown = $state(getCountdown());

	$effect(() => {
		closed = countdown.closed;
	});

	const countdownLabel = $derived(
		closed ? 'Registrace byla ukončena' : 'Registrace končí za'
	);

	onMount(() => {
		const interval = setInterval(() => {
			countdown = getCountdown();
		}, 1000);

		return () => clearInterval(interval);
	});

	function getCountdown() {
		const diff = deadline.getTime() - Date.now();

		if (diff <= 0) {
			return { days: 0, hours: 0, minutes: 0, seconds: 0, closed: true };
		}

		return {
			days: Math.floor(diff / 86_400_000),
			hours: Math.floor((diff / 3_600_000) % 24),
			minutes: Math.floor((diff / 60_000) % 60),
			seconds: Math.floor((diff / 1_000) % 60),
			closed: false
		};
	}

	/** @param {number} value */
	function formatCounter(value) {
		return String(value).padStart(2, '0');
	}
</script>

<div class:closed class="countdown-card">
	<p class="countdown-label">{countdownLabel}</p>
	<div class="countdown-grid" aria-live="polite">
		<div>
			<strong>{formatCounter(countdown.days)}</strong>
			<span>dny</span>
		</div>
		<div>
			<strong>{formatCounter(countdown.hours)}</strong>
			<span>hodiny</span>
		</div>
		<div>
			<strong>{formatCounter(countdown.minutes)}</strong>
			<span>minuty</span>
		</div>
		<div>
			<strong>{formatCounter(countdown.seconds)}</strong>
			<span>sekundy</span>
		</div>
	</div>
	<p class="countdown-note">
		Uzávěrka je nastavena na {deadline.toLocaleDateString('cs-CZ')}, po jejím uplynutí se formulář
		automaticky zamkne.
	</p>
</div>

<style>
	.countdown-card {
		padding: 28px;
		background: rgba(255, 255, 255, 0.94);
		color: #303b4a;
		border-radius: 24px;
	}

	.countdown-card.closed {
		background: rgba(255, 255, 255, 0.82);
	}

	.countdown-label {
		margin-top: 0;
		font-size: 0.95rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.12em;
	}

	.countdown-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 12px;
		margin: 18px 0;
	}

	.countdown-grid div {
		padding: 16px 10px;
		border-radius: 18px;
		text-align: center;
		background: rgba(48, 59, 74, 0.08);
	}

	.countdown-grid strong {
		display: block;
		font-size: 2rem;
		line-height: 1;
		margin-bottom: 8px;
	}

	.countdown-grid span {
		font-size: 0.88rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	.countdown-note {
		margin-bottom: 0;
		font-size: 0.95rem;
		line-height: 1.5;
	}

	@media (max-width: 900px) {
		.countdown-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 640px) {
		.countdown-card {
			padding: 20px;
			border-radius: 20px;
		}
	}
</style>
