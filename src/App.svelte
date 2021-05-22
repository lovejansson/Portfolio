<script>
	import { onMount } from "svelte";

	import { Particle } from "./particle/Particle.js";

	import Projects from "./Projects.svelte";

	import About from "./About.svelte";

	let ctx;
	let canvas;
	let starz;
	let trail;

	let currentPage = "projects";

	onMount(async () => {
		history.replaceState({page: "projects"}, document.title);

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

		let num = window.innerWidth;
		for(let i = 0; i < num; ++i){

			let x = Math.random() * canvas.width;
			let y = Math.random() * canvas.height;
			let alpha = Math.random().toFixed(1);
			let radius;
			let tinkle;
			

			if( i % 2 == 0){
				 radius = Math.random() * 1.2;
				 tinkle = radius > 0.4;

			}else{
				radius = Math.random() / 2;
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


// 	function drawStarsTrail(){
// 		let particles = [];

// for(let i = 0; i < 10; ++i){
// 	let x = Math.random() * canvas.width;
// 	let y = Math.random() * canvas.height;
// 	let radius = Math.random() * 0.8;
// 	let tinkle = false;
// 	let fade = true;

// 	let a = Math.random().toFixed(1);


// 	 particle = new Particle(ctx, x, y, radius, `rgba(225, 225, 255, ${a}`, tinkle, fade);
// 		particles.push(particle);
// 	}

// 	}

	function changePage(page){
		currentPage = page;
	
	}

	function changePageToProjects(){
		changePage("projects");
	}

	function changePageToAbout(){
		changePage("about");
	}

</script>

	<div  on:resize={createStars} id="content">
	<header>
	<h1>

		Love

	</h1>
	<nav>
	
	<button class:current-page={currentPage === "projects"} on:click={changePageToProjects}>Projects</button>
	<button class:current-page={currentPage === "about"} on:click={changePageToAbout}>About</button>
	</nav>
</header>
	<main>

	{#if currentPage === "projects"}

	<Projects/>

	{:else}

	<About/>

	{/if}

</main>

</div>

<canvas bind:this={canvas}>

</canvas>




<style>


	canvas {
	position: fixed;
	top:0;
	width: 100%;
	height: 100%;
	background-color: #000000;
	z-index: 0;
	
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
		overflow-y: auto;
		
	}

	header{
		padding: 0 1em;
	}
	header > * {
		margin-right: 1em;
	}



	nav button{
		
		color: #fff;
		margin: 0.5em;
		padding: 0;
		
	}



	button:hover, button:focus{
		color: hsl(0, 0%, 75%);

	}

	.current-page{
		position: relative;
	}

	.current-page::before{
		content: "";
		width: 0.4em;
		height: 0.4em;
		position: absolute;
		top: 0.4em;
		left: -0.6em;
		border-radius: 2px;
		background-color: hsl(226, 47%, 51%);
		  box-shadow: 3px 2px 0 0 hsl(226, 47%, 21%);
		animation-name: scale;
		animation-duration: 0.2s;
		animation-iteration: 1;

	}

	@keyframes scale{
		from {transform: scale(0);}
		to {transform: scale(1);}
	}


	p{
		color: hsl(0, 0%, 95%);
		font-weight: 300;
	}

	@media screen and (min-width: 400px){
		header{
			display: flex;
			align-items: center;
			margin-bottom: 2rem;
	
		
	}
	}

	@media screen and (min-width: 800px){

		main{
			width: 80%;
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