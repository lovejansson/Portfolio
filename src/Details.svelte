<script>
        import { createEventDispatcher } from "svelte";
        import ImageViewer from "./ImageViewer.svelte";
        import {onMount} from "svelte";

export let project = {};

const dispatch = createEventDispatcher();

let showingScreenshots = false;

let section;
let overlay;

onMount(()=>{
    addEventListener("popstate", navigationListener);
});

function close(){
    section.style.opacity = 0;
    overlay.style.backgroundColor = "transparent";

    setTimeout(()=>{
        history.back();
    }, 200)
  
}

function navigationListener(event){
    if(event.state.page === "screenshots"){
        showingScreenshots = true;
    }else if(event.state.page === "details"){
        showingScreenshots = false;
    }
}


function showScreenshots(){
   showingScreenshots = true;
    handleWebHistory();
}

function handleWebHistory(){

  history.pushState({page: "screenshots"}, document.title);
  //  navigateBackListener = addEventListener("popstate", navigateBackListener);
}


</script>

<div bind:this={overlay} on:click={close} id="overlay"></div>

<section id="content" bind:this={section}>
    <button on:click={close}><svg viewBox="0 0 100 100"><path d="M 10 10 L 90 90 M 90 10 L 10 90"></path></svg></button>
   
<!-- 
    <img src="/images/qfilm2.png" alt="theChat user interface"/> -->
    <h2>{project.title}</h2>
    <section id="links">
    <button on:click={showScreenshots}><span class="fa fa-picture-o"></span>Screenshots</button>
    {#if project.github !== ""}
    <button><span class="fa fa-github"></span><a href={project.github}>Github</a></button>
    {/if}
    </section>
    <p>{project.description_long}</p>
    
           <ul>
 
            <li><span class="fas fa-code"></span></li>  
      

            {#each project.techniques as tech}

                <li><p>{tech}</p></li> 

            {/each}
    </ul>
  

</section>

{#if showingScreenshots}
<ImageViewer images={project.images}/>
{/if}

<style>

 
@font-face{
	font-family: "Yantramanav";
	src: url("./fonts/Yantramanav-Regular.ttf");
}

ul{
    display: flex;
    color: hsl(0, 0%, 85%);
    flex-wrap: wrap;
  
}

ul span{
    color: hsl(0, 0%, 85%);
    margin-right: 0.5em;
    
}

li:not(:last-child) p::after{
    content: ",";
    
}

#content > * {
    margin-bottom: 1.6rem;
}

li p {
    margin-right: 0.25em;

}



button 
{
    font-size: 1.8rem;
}
#links{
    display: flex;
    position: relative;
    padding-bottom: 1em;
    margin-bottom: 1em;
    border-bottom: 1px solid hsl(0, 0%, 18%);

}



    p, button{
        color:hsl(0, 0%, 85%);
    }

   


#links p {
    margin-right: 1em;
   
}

#links button:hover{
    cursor: pointer;
}

#links button:hover, #links button:focus {
    color: hsl(0, 0%, 50%);
}

#links span{
    margin-right: 0.5em;
    font-weight: bold;
}

#overlay{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
}

@keyframes slide-up{
    from {transform: translateY(100%);}
    to {transform: translateY(0);}
}

@keyframes fade-in{
    from {opacity: 0;}
    to {opacity: 1;}
}



    #content{

        padding: 1em;
        animation-name: slide-up;
        animation-duration: 0.4s;
        animation-iteration-count: 1;
        transition: 0.4s;

        border-radius: 4px 4px 0 0;

        position: fixed;
        bottom: 0;
        left: 0;

        display: flex;
        flex-direction: column;

        width: 100%;
        height: 100%;
       
       
        margin: 0 auto;
        background-color: #101011;
    
        box-shadow: 0px 0px 20px 2px #000;
    }

  
button{
   
    align-self: flex-end;
    margin: 1.6rem;
    margin-left: 0;
    margin-bottom: 0;
    
}
    svg{
        fill: transparent;
        stroke: #fff;
        stroke-width: 12;
        width: 2.4rem;
        height: 2.4rem;
      
    }

    

    button:hover{
        cursor: pointer;
    }

    button:hover svg, button:focus svg {
        stroke: hsl(0, 0%, 50%);
    }


@media screen and (min-width: 600px){
    #content{
        animation-name: fade-in;
        width: 75%;
        max-width:600px;
        height: auto;
        top: 0;
        left: 50%;
        margin-top:4rem;
        transform: translateX(-50%);
        /* transform: translateY(-50%); */
        bottom: auto;
    }
}


</style>