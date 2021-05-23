<script>
	import { onMount } from "svelte";

	import { Particle } from "./particle/Particle.js";

	import Card from "./components/Card.svelte";

	import Details from "./components/Details.svelte";

	let showingDetails = false;
	
	 let projects;
     let currentProject;
	

	onMount(async () => {

		addEventListener("popstate", navigationListener);

        let projectsLocal;

		let projectsJson = await fetch("/projects.json")
		projectsLocal = await projectsJson.json();

        projects = projectsLocal;

    console.log("projects")
        console.log(projects);

		
	});


	function showDetails(project){
      
		showingDetails = true;
        currentProject =project;

		handleWebHistory();
	}

	function navigationListener(event){
		if(event.state.page === "details"){
			showingDetails = true;
		}else if(event.state.page === "projects"){
			showingDetails = false;
		}else{
			
		}

	}


	function handleWebHistory(){

		history.pushState({page: "details"}, document.title);
		//navigateBackListener = addEventListener("popstate", navigateBackListener);
}


</script>

   
   {#if projects}

    <section id="projects">
		<ul>	
        {#each projects as project, idx}

    

        <Card mode={ idx % 2 === 0 ? "dark" : "light"} {project}
                on:click={()=>{showDetails(project)}}/>

        {/each}
		
		</ul>

	</section>


    {/if}
	


	{#if showingDetails}

<Details project={currentProject}/>
	{/if}

<style>

	#projects ul {
		margin: 1.6rem;
        margin-top:0rem;
		display: grid;
      	grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
	}

	p{
		color: hsl(0, 0%, 95%);
		font-weight: 300;
	}


</style>