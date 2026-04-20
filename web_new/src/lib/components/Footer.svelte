<footer id="footer">
	<div class="bottom_lines">
		<div class="bottom_line_nad">Co? Kdy? Kde?</div>
		<div class="bottom_line">💡 Setkání plachetnic třídy NSS - A,B,C,RG-650</div>
		<div class="bottom_line">🕘 25.-27.9.2026</div>
		<div class="bottom_line">🗺 RS Vyhlídka Těrlicko</div>
	</div>
	<div class="bottom_lines">
		<div class="bottom_line_nad">Registrace</div>
		<div class="bottom_line">🗈 <a href="/propozice/propozice.pdf">Propozice</a></div>
		<div class="bottom_line">🗊 <a href="/registrace">Registrační formulář</a></div>
	</div>
	<div class="bottom_lines">
		<div class="bottom_line_nad">Kontakt</div>
		<div class="bottom_line">
			🖃 <a href="mailto:sebastian.walent@gmail.com">sebastian.walent@gmail.com</a>
		</div>
		<div class="bottom_line">
			🖃 <a href="mailto:modelari.slezsko@gmail.com">modelari.slezsko@gmail.com</a>
		</div>
	</div>
</footer>

<style>
	#footer {
		background-color: #363131;
		display: flex;
		justify-content: space-around;
		text-align: left;
		padding: 40px 15%;
		margin-top: 60px;
	}
	.bottom_lines {
		display: flex;
		flex-direction: column;
	}
	.bottom_line_nad {
		color: white;
		margin-bottom: 12px;
		font-weight: bold;
		font-size: 1.1rem;
	}
	.bottom_line {
		font-size: 0.9rem;
		color: #b4a3a3;
		margin-bottom: 6px;
	}
	.bottom_line a {
		color: #b4a3a3;
		text-decoration: none;
		transition: color 0.2s;
	}
	.bottom_line a:hover {
		color: white;
	}
	@media (max-width: 768px) {
		#footer {
			flex-direction: column;
			padding: 30px 10%;
			gap: 30px;
		}
	}
</style>
