<script>
 	import {language} from "../stores";
  export let project = {};

  export let mode = "dark";

</script>

<div tabindex="0" class={mode === "dark" ? "dark" : "light"} on:click on:keypress>
  <h2>{project.title}</h2>
  <p>{$language === "se" ? project.description_short_se : project.description_short_en}</p>

  <ul>
    <li class="tech"><span class="fas fa-code" /></li>

    {#each project.techniques as tech}
      <li><p class="tech">{tech}</p></li>
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

  div:hover{
    cursor: pointer;
  }

  .dark {
    background-color: #1c284f;
    box-shadow: 4px 3px 0 0 hsl(226, 47%, 8%);
  }

  .dark:hover,
  .dark:focus {
    background-color: hsl(226, 47%, 41%);
    box-shadow: 4px 3px 0 0 hsl(226, 47%, 21%);
  }

  .light {
    background-color: hsl(226, 47%, 41%);
    box-shadow: 4px 3px 0 0 hsl(226, 47%, 21%);
  }

  .light:hover,
  .light:focus {
    background-color: hsl(226, 47%, 21%);
    box-shadow: 4px 3px 0 0 hsl(226, 47%, 8%);
  }

  h2{
    font-size: 2.4rem;
  }

  h2 + p {
    margin-bottom: 0.5em;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: auto;
  }

  li:not(:last-child) p::after {
    content: ",";
  }
</style>
