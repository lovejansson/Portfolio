<script>
	import { onMount } from "svelte";
	import Card from "../components/Card.svelte";
	import Details from "../components/Details.svelte";

	let showingDetails = false;

	let projects;
	let currentProjectIdx;
	let focusCloseButton;
	let ul;

	onMount(async () => {
		let projectsLocal;

		let projectsJson = await fetch("/projects.json");

		projectsLocal = await projectsJson.json();

		projects = projectsLocal;
	});

	function showDetails(event, projectIdx) {
		showingDetails = true;
		currentProjectIdx = projectIdx;
		focusCloseButton = event.key === "Enter";
	}

	function closeDetails() {
		showingDetails = false;
		if (focusCloseButton) {
			ul.children[currentProjectIdx].focus();
		}
	}
</script>

{#if projects}
	<section>
		<ul bind:this={ul}>
			{#each projects as project, idx}
				<Card
					mode={idx % 2 === 0 ? "dark" : "light"}
					{project}
					on:click={(event) => {
						showDetails(event, idx);
					}}
					on:keypress={(event) => {
						showDetails(event, idx);
					}}
				/>
			{/each}
		</ul>
	</section>
{/if}

{#if showingDetails}
	<Details
		project={projects[currentProjectIdx]}
		on:close={closeDetails}
		{focusCloseButton}
	/>
{/if}

<style>
	ul {
		margin: 1.6rem;
		margin-top: 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
	}
</style>
