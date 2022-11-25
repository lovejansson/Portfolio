<script>
	import { onMount } from "svelte";
	import { Router, Route } from "svelte-routing";

	import Projects from "./pages/Projects.svelte";
	import PageNotFound from "./pages/404.svelte";

	import { language } from "./stores";

	export let url = "";

	onMount(() => {
		if (localStorage.language) {
			let lang = localStorage.getItem("language");

			if (lang) {
				language.set(lang);
			}
		}
	});


	function setLanguage() {
		localStorage.setItem("language", $language);
	}

</script>

<Router {url}>
	<div id="content">
		<header>
			<section id="logo">
				<img
					src="/images/Portrait_New 2 - 4x.png"
					width="512"
					height="512"
					alt=""
				/>
				<h1>Love Jansson</h1>
			</section>
	

			<section id="language-selection">
				<img id="language-icon" src={$language === "se" ? "/images/sweden.png" : "images/united-kingdom.png"} height="64" width="64" alt="Change langauge of site"/>
			
					<select bind:value={$language} on:change={setLanguage}>
						<option value="se" selected={$language === "se"}
							>
							 Svenska</option
						>
						<option value="en" selected={$language === "en"}
							>English</option
						>
					</select>
				</section>
	
		</header>
		<main>
			<Route path="/" component={Projects} />
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

	#language-selection {
		display: flex;
		align-items: center;
		border-top: solid 1px hsl(0, 0%,25%);
		padding-top: 2.4rem;
	}

	#language-icon {
		width: 2.8rem;
		height: 2.8rem;
		margin-right: 1em;
		margin-left: 1em;
	}


	select {
		background-color: #000;
		color: #fff;
		padding: 0.3em;
		border-radius: 4px;
		
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
		
		#language-selection{
			position: fixed;
			top: 0;
			right: 0;
			margin-top: 3.2rem;
			margin-right: 3.2rem;
			padding-top: 0;
			border-top: none;
		
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
