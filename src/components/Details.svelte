<script>
    import { createEventDispatcher, onMount } from "svelte";
    import ImageViewer from "./ImageViewer.svelte";
    import {language} from "../stores";

    export let project = {};
    export let focusCloseButton = false;

    const dispatch = createEventDispatcher();

    let showingScreenshots = false;

    let section;
    let overlay;
    let closeButton;
    let screenshotsButton;

    onMount(() => {
        if (focusCloseButton) {
            closeButton.focus();
        }
    });

    function close(event) {
        section.style.opacity = 0;
        overlay.style.backgroundColor = "transparent";

        setTimeout(() => {
            dispatch("close");
        }, 100);
    }

    function showScreenshots() {
        showingScreenshots = true;
    }

    function closeScreenshots() {
        showingScreenshots = false;
        if (focusCloseButton) {
            screenshotsButton.focus();
        }
    }
</script>

<div bind:this={overlay} on:click={close} id="overlay" />

<section id="content" bind:this={section}>
    <button
        id="btn-close"
        on:click={close}
        bind:this={closeButton}
        ><svg viewBox="0 0 100 100"
            ><path d="M 10 10 L 90 90 M 90 10 L 10 90" /></svg
        ></button
    >
    <h2>{project.title}</h2>
    <p>{project.year}</p>
    <section id="links">
        <button bind:this={screenshotsButton} on:click={showScreenshots}
            ><span class="fa fa-picture-o" />Screenshots</button
        >
        {#if project.github !== ""}
            <a href={project.github}> <span class="fa fa-github" />Github</a>
        {/if}
    </section>
    <p>{$language === "se" ? project.description_long_se : project.description_long_en}</p>

    <ul>
        <li class="tech"><span class="fas fa-code" /></li>

        {#each project.techniques as tech}
            <li><p class="tech">{tech}</p></li>
        {/each}
    </ul>
</section>

{#if showingScreenshots}
    <ImageViewer
        images={project.images}
        on:close={closeScreenshots}
        {focusCloseButton}
    />
{/if}

<style>
    #overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
    }

    #content {
        position: fixed;
        bottom: 0;
        left: 0;

        display: flex;
        flex-direction: column;

        width: 100%;
        height: 100%;

        margin: 0 auto;
        padding: 1em;
        border-radius: 4px 4px 0 0;

        background-color: #101011;
        box-shadow: 0px 0px 20px 2px #000;

        animation-name: slide-up;
        animation-duration: 0.4s;
        animation-iteration-count: 1;
        transition: 0.4s;
    }

    #content > * {
        margin-bottom: 1.6rem;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
    }

    li:not(:last-child) p::after {
        content: ",";
    }

    #links {
        display: flex;
        padding-bottom: 1em;
        margin-bottom: 1em;
        border-bottom: 1px solid hsl(0, 0%, 18%);
    }

    #links span {
        margin-right: 0.5em;
    }

    #links button {
        margin-right: 1em;
    }

    #links button:hover,
    #links button:focus,
    #links button:hover span,
    #links button:focus span {
        color: hsl(0, 0%, 50%);
    }

    @keyframes slide-up {
        from {
            transform: translateY(100%);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    #btn-close {
        align-self: flex-end;
        margin-top: 2.4rem;
        margin-right: 2.4rem;
    }
    svg {
        fill: transparent;
        stroke: #fff;
        stroke-width: 16;
        width: 2.4rem;
        height: 2.4rem;
    }

    button:hover svg,
    button:focus svg {
        stroke: hsl(0, 0%, 50%);
    }

    @media screen and (min-width: 600px) {
        #content {
            animation-name: fade-in;
            width: 75%;
            max-width: 600px;
            height: auto;
            top: 0;
            left: 50%;
            margin-top: 4rem;
            transform: translateX(-50%);
            bottom: auto;
        }
    }
</style>
