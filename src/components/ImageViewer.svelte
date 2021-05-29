<script>
    import { createEventDispatcher, onMount } from "svelte";

    const dispatch = createEventDispatcher();

    export let images = [];
    let closeButton;

    export let focusCloseButton = false;

    onMount(() => {
        if (focusCloseButton) {
            closeButton.focus();
        }
    });

    function close(event) {
        dispatch("close");
    }
</script>

<section>
    <button bind:this={closeButton} on:click={close}>
        <svg viewBox="0 0 100 100">
            <path d="M 10 10 L 90 90 M 90 10 L 10 90" />
        </svg>
    </button>
    <ul>
        {#each images as img}
            <li tabindex="0">
                <img
                    src={`/images/${img.file_name}`}
                    alt=""
                    width={img.width}
                    height={img.height}
                />
            </li>
        {/each}
    </ul>
</section>

<style>
    section {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
        overflow-y: auto;
        -webkit-overflow-scrolling: auto;
        background-color: rgba(0, 0, 0, 0.5);
    }

    button {
        position: fixed;
        top: 0;
        right: 0;
        margin-top: 2.4rem;
        margin-right: 2.4rem;
        padding: 0.75em;
        border-radius: 2px;
      
        line-height: 0.5;
    }

    svg {
        fill: transparent;
        stroke: hsl(0, 0%, 100%);
        stroke-width: 16;
        width: 2.4rem;
        height: 2.4rem;
    }

    button:hover {
        cursor: pointer;
    }

    button:hover svg,button:focus svg{
        stroke: hsl(0, 0%, 50%);

    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 1;
    }

    img {
        width: 100%;
        height: auto;
        margin: 0 auto;
    }

    li {
        width: 100%;
        margin: 0;
    }

    @media screen and (min-width: 600px) {
        li {
            width: 65%;
            margin: 0 auto;
        }
    }

    @media screen and (min-width: 1200px) {
        button {
            margin-right: 4.8rem;
        }
    }
</style>
