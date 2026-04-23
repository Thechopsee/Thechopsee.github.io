<script>
	import { page } from '$app/state';
</script>

<div id="logo_block">
	<a href="/">
		<img src="/logos/logo.svg" id="logo" alt="Logo" />
		<img src="/logos/logomobile.svg" id="mobile_logo" alt="Logo Mobile" />
	</a>
</div>

<div id="menu_block">
	<nav id="menu_web">
		<a href="/" class:active={page.url.pathname === '/'}>Těrlická plachta 2026</a>
		<span class="sep">|</span>
		<a href="/historie" class:active={page.url.pathname.startsWith('/historie')}>Historie</a>
		<span class="sep">|</span>
		<a href="/registrace" class:active={page.url.pathname === '/registrace'}>Registrace</a>
		<span class="sep">|</span>
		<a href="/kontakty.html">Kontakt</a>
	</nav>
	<nav id="menu_mob">
		<a href="/" class:active={page.url.pathname === '/'}>Těrlická plachta 2026</a>
		<a href="/historie" class:active={page.url.pathname.startsWith('/historie')}>Historie</a>
		<a href="/registrace" class:active={page.url.pathname === '/registrace'}>Registrace</a>
		<a href="/kontakty.html">Kontakt</a>
	</nav>
</div>

<style>
	#logo_block {
		text-align: center;
		padding: 20px 0;
	}
	#logo,
	#mobile_logo {
		width: 100%;
		max-width: 1180px;
		margin: 0 auto;
	}
	#logo {
		filter: invert(83%) sepia(82%) saturate(1620%) hue-rotate(140deg) brightness(86%) contrast(86%);
	}
	#mobile_logo {
		display: none;
		filter: invert(83%) sepia(82%) saturate(1620%) hue-rotate(140deg) brightness(86%) contrast(86%);
	}

	#menu_block {
		text-align: center;
		margin-bottom: 30px;
	}

	#menu_web {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 15px;
		font-size: 1.5rem;
	}

	#menu_mob {
		display: none;
		flex-direction: column;
		gap: 10px;
		font-size: 1.2rem;
	}

	a {
		color: #dadfe4;
		text-decoration: none;
		transition: color 0.2s;
	}

	a:hover {
		color: #45cece;
	}

	a.active {
		color: #45cece;
		font-weight: bold;
	}

	.sep {
		color: #dadfe4;
	}

	@media (max-width: 800px) {
		#logo {
			display: none;
		}
		#mobile_logo {
			display: block;
			max-width: 300px;
		}
		#menu_web {
			display: none;
		}
		#menu_mob {
			display: flex;
		}
	}
</style>
