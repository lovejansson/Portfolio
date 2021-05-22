<script>
    import { createEventDispatcher } from "svelte";
       

const dispatch = createEventDispatcher();
export let images = [];

function close(){

history.back();
  
}

</script>




<section>

<button on:click={close}>
<svg viewBox="0 0 100 100">
<path d="M 10 10 L 90 90 M 90 10 L 10 90">
</path></svg></button>

<ul>

{#each images as img}

<li><img src={`/images/${img}`}/> </li>

{/each}

</ul>

</section>

<style>


button{
   
    position: sticky;
    top: 2.4rem;
    
    margin: 2.4rem;
    left: 100vw;
    padding:0.75em;
    border-radius: 2px;
     background-color: hsl(226, 47%, 41%);
    box-shadow: 4px 3px 0 0 hsl(226, 47%, 21%);
  
    line-height: 0.5;
    z-index: 2;
    
}
    svg{
        fill: transparent;
        stroke: hsl(0, 0%, 90%);
        stroke-width: 12;
        width: 2.4rem;
        height: 2.4rem;  
    }


    button:hover{
        cursor: pointer;
    }


  button:hover, button:focus{
    background-color: hsl(226, 47%, 21%);
    box-shadow: 4px 3px 0 0 hsl(226, 47%, 8%);

  }

 



    section {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-Index: 100;
        overflow-y: auto;
        background-color: rgba(0, 0, 0, 0.5);
    }

    ul{
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 1;
      
    }

    img{
        width: 100%;
        height: 100%;
        margin: 0;
    
    }

    li{
        width: 100%;
        margin: 0;
 
    }



    @media screen and (min-width: 600px){
        li {
            width: 75%;
            margin: 0 auto;
        }
    }
</style>
