<script>
	import { onDestroy, onMount } from "svelte";

	import { Router, Link, Route } from "svelte-routing";

	import { Particle } from "./particle/Particle.js";

	import Projects from "./pages/Projects.svelte";

	import About from "./pages/About.svelte";

	let ctx;
	let canvas;
	let stars;
	let starsTimeout;

	export let url = "";

	onMount(async () => {
		ctx = canvas.getContext("2d");
		updateCanvas();
		addEventListener("resize", updateCanvas);
	});

	onDestroy(()=>{
		removeEventListener("resize", updateCanvas);
	})

	function setCanvasMetrics() {
		let canvasWidth = canvas.getBoundingClientRect().width;
		canvas.width = canvasWidth;
		let canvasHeight = canvas.getBoundingClientRect().height;
		canvas.height = canvasHeight;
	}

	function createStars() {

		let particle;

		let particles = [];

		for (let i = 0; i < window.innerWidth; ++i) {
			let x = Math.random() * canvas.width;
			let y = Math.random() * canvas.height;
			let alpha = Math.random().toFixed(1);
			let radius;
			let tinkle;


			if (i % 2 == 0) {
				radius = Math.random() * 1;
				tinkle = radius > 0.4;
			} else {
				radius = Math.random() / 2;
				tinkle = radius > 0.2;
			}

			particle = new Particle(
				ctx,
				x,
				y,
				radius,
				`rgba(225, 225, 255, ${alpha}`,
				tinkle
			);
			particles.push(particle);
		}

		return particles;
	}

	function updateStars() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		stars.forEach((star) => {
			star.update();
			star.draw();
		});

		starsTimeout = setTimeout(updateStars, 100);
	}

	function updateCanvas(){
		setCanvasMetrics();
		clearTimeout(starsTimeout);
		stars = createStars();
		updateStars();
	}

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
		event.detail.target.blur();
	}
</script>

<Router {url}>
	<div  id="content">
		<header>
			<h1>Love</h1>
			<nav>
				<Link to="/" {getProps} on:click={removeFocus}>Projekt</Link>
				<Link to="/about" {getProps} on:click={removeFocus}>Om mig</Link>
			</nav>
		</header>
		<main>
			<Route path="/" component={Projects} />
			<Route path="/about" component={About} />
		</main>
	</div>

	<canvas bind:this={canvas} />
</Router>

<style>
	canvas {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: #000000;
		z-index: 0;
	}

	#content {
		display: flex;
		flex-direction: column;

		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		overflow-y: auto;
	}

	header {
		margin: 0 1em;
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
	}

	@media screen and (min-width: 800px) {
		main {
			width: 80%;
			margin: 0 auto;
		}
	}

	@media screen and (min-width: 1200px) {
		main {
			width: 75%;
			margin: 0 auto;
		}
	}
</style>
