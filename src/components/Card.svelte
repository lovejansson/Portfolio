<script>
 
  export let project = {};

  export let mode = "dark";

</script>

<div tabindex="0" class={mode === "dark" ? "dark" : "light"} on:click on:keypress>
  <h2>{project.title}</h2>
  <p>{project.description_short}</p>

  <ul>
    <li><span class="fas fa-code" /></li>

    {#each project.techniques as tech}
      <li><p>{tech}</p></li>
    {/each}
  </ul>
</div>

<style>
  div {
    border-radius: 4px;
    margin: 0.5em;
    padding: 0.5em 1em;
    transition: 0.2s;
    display: flex;
    flex-direction: column;
  }

  div:focus {
    outline: none;
  }

  h2 {
    font-size: 2.8rem;
    font-weight: 400;
  }

  h2 + p {
    margin-bottom: 0.5em;
  }

  p {
    color: hsl(0, 0%, 90%);
    font-size: 1.6rem;
  }

  .dark {
    background-color: hsl(226, 47%, 21%);
    box-shadow: 4px 3px 0 0 hsl(226, 47%, 8%);
  }

  .dark:hover,
  .dark:focus {
    background-color: hsl(226, 47%, 41%);
    box-shadow: 4px 3px 0 0 hsl(226, 47%, 21%);
    cursor: pointer;
  }

  .light {
    background-color: hsl(226, 47%, 41%);
    box-shadow: 4px 3px 0 0 hsl(226, 47%, 21%);
  }

  .light:hover,
  .light:focus {
    background-color: hsl(226, 47%, 21%);
    box-shadow: 4px 3px 0 0 hsl(226, 47%, 8%);
    cursor: pointer;
  }

  ul {
    margin-top: auto;
  }

  li p {
    color: hsl(0, 0%, 100%);
  }

  li p {
    font-family: "Yantramanav-bold";
    font-size: 1.5rem;
  }

  li:not(:last-child) p::after {
    content: ",";
  }

  span {
    font-size: 1.4rem;
    font-weight: bold;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  li {
    margin-right: 0.25em;
  }
</style>
