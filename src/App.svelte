<script>
	import { onMount } from "svelte";

	import { Particle } from "./particle/Particle.js";
	
	let ctx;
	let canvas;
	let starz;

	onMount(() => {
		ctx = canvas.getContext("2d");
		starz = createStars();
		updateStars();
	});

	function setCanvasMetrics(){

		let canvasWidth = canvas.getBoundingClientRect().width;
		canvas.width = canvasWidth;
		let canvasHeight = canvas.getBoundingClientRect().height;
		canvas.height = canvasHeight;

	}

	function createStars(){
		
		setCanvasMetrics();

		let particle;

		let particles = [];

		for(let i = 0; i < 400; ++i){
			let x = Math.random() * canvas.width;
			let y = Math.random() * canvas.height;
			let radius = Math.random() * 0.8;
			let tinkle = radius > 0.7;
			let drift = !tinkle && radius > 0.5;

			let a = Math.random().toFixed(1);


 			particle = new Particle(ctx, x, y, radius, `rgba(225, 225, 255, ${a}`, tinkle, drift);
			particles.push(particle);
		}

		return particles;
	}

	function updateStars(){
	

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		starz.forEach(star => {
			star.update();
			star.draw();
		});

		setTimeout(updateStars, 400);
	
	}


</script>

<div id="container">
	<div id="content">
	<header>
	<h1>

		Love

	</h1></header>

	<main>

	<section id="info">
		<p>

		</p>

	</section>
	<section id="projects">
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>

	</section>
</main>
</div>

<canvas bind:this={canvas} on:resize={createStars}>

</canvas>
</div>

<style>

	#container{
		width: 100%;
		height: 100%;
		background-color: #000005;	
	}

	canvas {
	position: "fixed";
	top:0;
	width: 100%;
	height: 100%;
	background-color: #000005;
	
}


	#content{
		position: "fixed";
		top:0;
		left: 0;

		background: red;
		
	}

	main {
		display:flex;
		
	}
	header{
		
	}


	#info{
		
	
	}

	#projects{
	
		background: transparent;
	}


</style>