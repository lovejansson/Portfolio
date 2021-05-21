<script>
        import { createEventDispatcher } from "svelte";

const dispatch = createEventDispatcher();

function close(){
    dispatch("close");
}


</script>

<div id="overlay"></div>

<section>
    <button on:click={close}><svg viewBox="0 0 100 100"><path d="M 70 10 L 30 50 L 70 90"></path></svg></button>
   

    <img src="/images/comet_raids_1.png" alt="theChat user interface"/>
    <h2>Peer to peer chat app</h2>
    <p>"Denna applikation har jag gjort tillsammans med en klasskamrat under en projektkurs. I och med detta fick vi testa på att använda ett nytt programmeringsspråk C#, skriva ett program för desktops samt implementera socket connections."</p>

    
   
</section>

<style>

 


img{
  
}
    section{

        display: flex;
        flex-direction: column;
       
        max-width: 750px;
        margin: 0 auto;
    
    }
button{
   
    align-self: flex-start;
    margin-bottom: 2.4rem;
    
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
        stroke: hsl(0, 0%, 70%);
    }

    p{
        color:hsl(0, 0%, 90%);
    }


</style>