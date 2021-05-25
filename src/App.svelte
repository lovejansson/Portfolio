<script>

	import { Router, Link, Route } from "svelte-routing";

	import Projects from "./pages/Projects.svelte";

	import About from "./pages/About.svelte";

	import PageNotFound from "./pages/404.svelte";

	export let url = "";

	function getProps({href, isPartiallyCurrent, isCurrent }) {
		const isActive =
			href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

		// The object returned here is spread on the anchor element's attributes
		if (isActive) {
			return { class: "active" };
		}
		return {};
	}

	function removeFocus(event){
		event.detail.srcElement.blur();
	}
</script>

<Router {url}>
	<div  id="content">
		<header>
		
			<section id="logo">
			<img src="/images/Portrait_Sprite_8x.png" width="512" height="512" alt=""/>
			<h1>Love Jansson</h1>
			</section>
			<nav>
				<Link to="/" {getProps} on:click={removeFocus}>Projekt</Link>
				<Link to="/about" {getProps} on:click={removeFocus}>Om mig</Link>
			
			</nav>
		</header>
		<main>
			<Route path="/" component={Projects} />
			<Route path="/about" component={About} />
			<Route path="/*" component={PageNotFound}/>
		</main>
	</div>

</Router>

<style>

	img{
		width: 8rem;
		height: 8rem;
	}

	#logo{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 1em;
		margin-left: 1em;
		
	
	}

	#content {
		display: flex;
		flex-direction: column;
		background-color: #000;
		background: url("/images/background_stars.png");

		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
	
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

	@media screen and (min-width: 400px) {
		header {
			display: flex;
			align-items: center;
			margin-bottom: 2rem;
		}

		#logo {
			margin-right: 3rem;
		}
	

	}

	@media screen and (min-width: 800px) {

		img{
		width: 10rem;
		height: 10rem;
	}

		main {
			width: 70%;
			margin: 0 auto;
		}

		#logo {
			margin-right: calc(15vw - 10rem);
		}
	}

</style>
