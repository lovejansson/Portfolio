<script>
	import { onMount } from "svelte";

	import { Particle } from "./particle/Particle.js";

	import Card from "./Card.svelte";

	import Details from "./Details.svelte";


	
	
	let ctx;
	let canvas;
	let starz;
	let trail;

	let showDetails = false;
	
	 let projects;


	let showInfo = false;

	onMount(async () => {
		ctx = canvas.getContext("2d");
		starz = createStars(400);
		updateStars();

		let projectsJson = await fetch("/projects.json")
		projects = await projectsJson.json();

		
	});

	function setCanvasMetrics(){

		let canvasWidth = canvas.getBoundingClientRect().width;
		canvas.width = canvasWidth;
		let canvasHeight = canvas.getBoundingClientRect().height;
		canvas.height = canvasHeight;

	}

	function createStars(num){
		
		setCanvasMetrics();

		let particle;

		let particles = [];

				
		for(let i = 0; i < 1200; ++i){

			let x = Math.random() * canvas.width;
			let y = Math.random() * canvas.height;
			let alpha = Math.random().toFixed(1);
			let radius;
			let tinkle;
			

			if( i % 2 == 0){
				 radius = Math.random();
				 tinkle = radius > 0.5;

			}else{
				radius = Math.random() / 3;
				tinkle = radius > 0.1;

			}

		particle = new Particle(ctx, x, y, radius, `rgba(225, 225, 255, ${alpha}`, tinkle, false);
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

		setTimeout(updateStars, 100);
	
	}

	function toggleShowInfo(){
		showInfo = !showInfo;
	}

	function toggleShowDetails(){
		showDetails = !showDetails;
	}

	function drawStarsTrail(){
		let particles = [];

for(let i = 0; i < 10; ++i){
	let x = Math.random() * canvas.width;
	let y = Math.random() * canvas.height;
	let radius = Math.random() * 0.8;
	let tinkle = false;
	let fade = true;

	let a = Math.random().toFixed(1);


	 particle = new Particle(ctx, x, y, radius, `rgba(225, 225, 255, ${a}`, tinkle, fade);
		particles.push(particle);
	}

	}

</script>

	<div id="content" on:mousemove={drawStarsTrail}>
	<header>
	<h1>

		Love

	</h1>
	<button on:click={toggleShowInfo}><svg class:rotate={showInfo} viewBox="0 0 100 100" ><path d="M 10 30 L 50 70 L 90 30"></path></svg></button></header>

	<main>

		
	<!-- <section class:show-info={showInfo} id="info">
		<div class="info-item">
		<p>
			<span class="label">
				Name
			</span>
		</p>
		<p>Love Jansson</p>
	</div> -->



	<!-- <div class="info-item">

		<p>
			<span class="label">
				Education
			</span>
		</p>
		<p>Programming via Linköping University</p>
	</div>

	<div class="info-item">

		<p>
			<span class="label">
				Interests
			</span>
		</p>
		<ul><li><p>Frontend development</p></li><li><p>Music</p></li><li><p>Movies & series</p></li>
			<li><p>Art with patterns</p></li><li><p>Travel</p></li></ul>

	</div> -->

	

	<!-- <div class="info-item">

		<p>
			<span class="label">
				Contact
			</span>
		</p>
		<p>lovejansson@gmail.com</p>

	</div>
		
	

	</section> -->

	{#if showDetails}
	<Details on:close={toggleShowDetails}/>
	{:else}

	<section id="projects">
		<ul>	
			<Card mode="dark" on:click={toggleShowDetails}/>
			<Card mode="light" on:click={toggleShowDetails}/>
			<Card mode="dark" on:click={toggleShowDetails}/>
			<Card mode="light" on:click={toggleShowDetails}/>
			<Card mode="dark" on:click={toggleShowDetails}/>
			<Card mode="light" on:click={toggleShowDetails}/>
		</ul>

	</section>

	{/if}



</main>

</div>

<canvas bind:this={canvas} on:resize={createStars}>

</canvas>




<style>




@font-face{
	font-family: "Lateef";
	src: url("./fonts/Lateef-Regular.ttf")
}

h1{
	font-family: "Lateef", Arial;
}

	canvas {
	position: fixed;
	top:0;
	width: 100%;
	height: 100%;
	background-color: #000000;
	
	}

	svg {
		fill: transparent;
		stroke: #fff;
		stroke-width: 16;
		width: 32px;
		height: 32px;
	

		
	}

	.rotate{
		transform: rotate(180deg);
	}



	#content{
		display: flex;
		flex-direction: column;
	
		position: fixed;
		top:0;
		left: 0;
		width: 100%;
		height:100%;
		z-index: 1;
		
	}

	main {
	
		background-color: transparent;
		
		
		
	
		
	}
	header{
		background: transparent;
		border: 1px dashed rgba(255, 255, 255, 0.5);
	
		width: 200px;
		
	}


	#info{
		
		position: fixed;
		top: 100px;

		left: 0;
		width: 200px;
		background-color: #000005;
		margin-left: 2.4rem;
		margin-top: 2.4rem;
		border-radius: 4px;
		
		opacity: 0;
	
/* offset-x | offset-y | blur-radius | spread-radius | color */
		/* box-shadow: 2px 2px 10px 10px #000; */
		border: 1px solid rgba(255, 255, 255, 0.5);
		transition: 0.4s;
	
	}

	.show-info {
		opacity: 1 !important;
	}

	.info-item {
		margin: 0.75em 1em;
		margin-right: 0;
		
	}

	#projects{
	
		background: transparent;
		flex: 1;
	}

	#projects ul {
		margin: 2.4rem;
		display: grid;
      	grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
	}

	#info li {
		margin-right: 0.25em;
	}

	#info li:not(:last-child) p::after {
		content: ","
	}

	p{
		color: hsl(0, 0%, 95%);
		font-weight: 300;
	}


	.label{
		font-style: italic;
		color: #fff;
		margin-bottom: 0.25em;
		font-weight:400;
	}


	@media screen and (min-width: 800px){

		main{
			width: 90%;
			margin: 0 auto;
		}
		
	}

	
	@media screen and (min-width: 1200px){

	main{
		width: 75%;
		margin: 0 auto;
	}

}

</style>