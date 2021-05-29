<script>
	import { onDestroy, onMount } from "svelte";

	import { Router, Link, Route } from "svelte-routing";

	import Projects from "./pages/Projects.svelte";

	import About from "./pages/About.svelte";

	import PageNotFound from "./pages/404.svelte";

	import { language } from "./stores";

	import { fly } from "svelte/transition";

	export let url = "";

	let showMenu;
	let mobileMenu;

	onMount(() => {
		if (localStorage.language) {
			let lang = localStorage.getItem("language");

			if (lang) {
				language.set(lang);
			}
		}

		changeMenuMode();

		addEventListener("resize", changeMenuMode);
	});

	onDestroy(() => {
		removeEventListener("resize", changeMenuMode);
	});

	function changeMenuMode() {
		console.log("change menu mode");
		console.log(window);
		mobileMenu = window.innerWidth < 700;

		showMenu = !mobileMenu;
	}

	function getProps({ href, isPartiallyCurrent, isCurrent }) {
		const isActive =
			href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

		// The object returned here is spread on the anchor element's attributes
		if (isActive) {
			return { class: "active" };
		}
		return {};
	}

	function removeFocus(event) {
		event.detail.srcElement.blur();
	}

	function setLanguage() {
		localStorage.setItem("language", $language);
	}

	function toggleShowMenu() {
		showMenu = !showMenu;
	}
</script>

<Router {url}>
	<div id="content">
		<header>
			<section id="logo">
				<img
					src="/images/Portrait_Sprite_8x.png"
					width="512"
					height="512"
					alt=""
				/>
				<h1>Love Jansson</h1>
			</section>
			{#if mobileMenu}
				<button id="btn-menu" on:click={toggleShowMenu}
					><svg viewBox="0 0 150 100"
						><path
							d="M 10 10 L 125 10 M 10 50 L 125 50 M 10 90 L 125 90 "
						/></svg
					></button
				>
			{/if}

			{#if showMenu}
				{#if mobileMenu}
					<div on:click={toggleShowMenu} id="overlay" />
				{/if}
				<section id="menu" transition:fly>
					{#if mobileMenu}
					<button
					id="btn-close"
					on:click={toggleShowMenu}
				
					><svg viewBox="0 0 100 100"
						><path d="M 10 10 L 90 90 M 90 10 L 10 90" /></svg
					></button
				>
				{/if}
					<nav>
						<Link to="/" {getProps} on:click={removeFocus}
							>{$language === "se" ? "Projekt" : "Projects"}</Link
						>
						<Link to="/about" {getProps} on:click={removeFocus}
							>{$language === "se" ? "Om mig" : "About"}</Link
						>
					</nav>

					<select bind:value={$language} on:change={setLanguage}>
						<option value="se" selected={$language === "se"}
							>Svenska</option
						>
						<option value="en" selected={$language === "en"}
							>English</option
						>
					</select>
				</section>
			{/if}
		</header>
		<main>
			<Route path="/" component={Projects} />
			<Route path="/about" component={About} />
			<Route path="/*" component={PageNotFound} />
		</main>
	</div>
</Router>

<style>
	img {
		width: 8rem;
		height: 8rem;
	}
	#logo{
		margin-bottom: 1em;
	}
	#btn-menu {
		position: fixed;
		top: 1em;
		left: 1em;
	}

	svg {
		stroke: #fff;
		fill: transparent;
		stroke-width: 1.6rem;
	
	}

	#btn-menu svg {
		width: 4rem;
		height: 2.8rem;
	}

	#overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	#menu {
		background: #000;
		position: fixed;
		top: 0;
		left: 0;

		bottom: 0;
		padding: 2em;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#btn-close{
		align-self: flex-start;
		margin-bottom: 1em;
	}

	#btn-close svg {
		width: 2.4rem;
		height: 2.4rem;
	}

	nav {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}



	select {
		background-color: #000;
		color: #fff;
		padding: 0.5em;
		border-radius: 4px;
		margin-top: 2.4rem;
	}

	#logo {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 1em;
		margin-left: 1em;
	}

	#content {
		display: flex;
		flex-direction: column;

		background: url("/images/background_stars.png");
		height: 100%;
	}

	main {
		overflow-y: auto;
	}

	header {
		margin: 1em;
		margin-bottom: 0.5em;
	}

	@keyframes scale {
		from {
			transform: scale(0);
		}
		to {
			transform: scale(1);
		}
	}

	@media screen and (min-width: 700px) {
		header {
			display: flex;
			align-items: center;
			margin-bottom: 2rem;
		}
		#menu {
			background: inherit;
			position: static;

			padding: 0;

			flex-direction: row;
		}
		nav {
			flex-direction: row;
		}

		select {
			position: fixed;
			top: 0;
			right: 0;
			margin-top: 2.4rem;
			margin-right: 2.4rem;
		}

		img {
			width: 10rem;
			height: 10rem;
		}

		main {
			width: 70%;
			margin: 0 auto;
		}

		#logo {
			margin-right: calc(15vw - 10rem);
			margin-bottom: 0;
		}
	}
</style>
