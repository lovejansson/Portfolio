<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

let colors = ["#4569BD", "#324C8A", "#4D76D6", "#314B89"]
    export let backgroundColor = "#4569BD";
    export let title = "";
    export let description = "";
    export let mode = "dark";

function click(){
    dispatch("click");
}
</script>

<div tabindex="0" class={mode === "dark" ? "dark" : "light"} on:click={click}>
    <h2>Vanilla</h2> 
    <p >Short description of project</p> 
    
    <ul>
            <!-- <li><span class="fab fa-css3-alt"></span></li>
            <li><span class="fab fa-html5"></span></li>
            <li><span class="fab fa-node-js"></span></li>
            <li><span class="fab fa-js-square"></span></li>   
            <li><span class="fab fa-android"></span></li>  -->
            <li><span class="fas fa-code"></span></li> 
            <!-- <li><p>Android</p></li> 
            <li><p>Java</p></li> 
            <li><p>Firebase</p></li> 
            <li><p>Mockito</p></li>
            <li><p>Dagger2</p></li> -->

             <!-- <li><p>Svelte</p></li> 
            <li><p>Express</p></li> 
            <li><p>MongoDB</p></li>  -->

    
             <!-- <li><p>Vanilla JS</p></li> 
            <li><p>HTML</p></li> 
            <li><p>CSS</p></li>
          -->
            <!-- <li><p>C#</p></li> 
            <li><p>.NET</p></li>  -->

            <!-- <li><p>React native</p></li> 
            <li><p>.NET</p></li>  -->


<!--             
             <li><p>C++</p></li> 
            <li><p>SFML</p></li>   -->
    </ul>
</div>


<style>
     
       
        

  div {
      border-radius: 4px;
      margin: 0.5em;
      padding: 0.5em 1em;
      transition:0.2s;
   
  }

  div:focus{
      outline: none;
     
  }

  h2{
      
      font-size: 2.8rem;
      font-weight: 400;
    
  }


  p {
   

      margin-bottom: 0.5em;
      color: hsl(0, 0%, 82%);
      
  }


  .dark{
    background-color: hsl(226, 47%, 21%);
    box-shadow: 4px 3px 0 0 hsl(226, 47%, 8%);
  }

  .dark:hover, .dark:focus{
    background-color: hsl(226, 47%, 41%);
    box-shadow: 4px 3px 0 0 hsl(226, 47%, 21%);
    cursor: pointer;
  }

  .light{
    background-color: hsl(226, 47%, 41%);
    box-shadow: 4px 3px 0 0 hsl(226, 47%, 21%);

  }

  .light:hover, .light:focus{
    background-color: hsl(226, 47%, 21%);
    box-shadow: 4px 3px 0 0 hsl(226, 47%, 8%);
    cursor: pointer;
  }

  .light:hover span, .light:focus span{
    color: hsl(226, 47%, 0%);
  }
  .dark:hover span, .dark:focus span{
 
    color: hsl(226, 48%, 8%);
  }




  .dark span{
      color: hsl(226, 47%, 0%);
  }

  .light span{
      color: hsl(226, 48%, 8%);
  }

  .dark li p{
      color: hsl(226, 47%, 0%);
  }

  .light li p{
      color: hsl(226, 48%, 8%);
  }

    li p {
        font-family:  "Yantramanav-bold";
        font-size: 1.6rem;
        margin-bottom: 0;
    }

li:not(:last-child) p::after{
    content: ","
}

    
  .light:hover li p, .light:focus li p{
    color: hsl(226, 47%, 0%);
  }
  .dark:hover li p, .dark:focus li p{
 
    color: hsl(226, 48%, 8%);
  }




  span{
       
      font-size: 1.4rem;
      font-weight: bold;
  }

  ul{
     display: flex;
     flex-wrap: wrap;
     align-items: center;
      
      
   
  }

  li{
      margin-right: 0.25em;
  }
  



</style>