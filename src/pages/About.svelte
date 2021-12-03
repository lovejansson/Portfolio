<script>	
import {language} from "../stores";
</script>

{#if $language === "se"}
<section>
    <p>
        Jag är en utvecklare och student från
        Linköping. De senaste två åren har jag pluggat på programmet innovativ programmering
        på Linköpings universitet. Under utbildningen har vi lärt oss göra applikationer för webb, mobil och desktop och de projekt vi har gjort hitills finns på denna webbsida.
    </p>

 
    <p>
        När jag utvecklar försöker jag hitta de smidigaste lösningarna och jag älskar att radera kod som inte behövs. Förutom programmering gillar jag mina vänner,
        musik, filmer & serier och art som innehåller mönster av något slag, till exempel pixel art eller doodle art!
    </p>

    
</section>

{:else}

<section>
    <p>
    I'm a developer and student from Linköping. The last two years I've studied programming at Linköpings University and I'll graduate from there with a Bachelor's degree in june 2022. 
    </p>

    <p>
        During the education I've learned how to create applications for web, mobile and desktop. The projects 
    that we've done so far can be seen in this website. 
    </p>

    <p>
        As a developer I'm structured, intrested in finding the easiest and most effective solutions and I love to delete code. 
        Except for programming I like my friends, music, movies & series and art with some kind of pattern like pixel- or doodle art.
    </p>

</section>

{/if}

<style>
    section {
        /* background-color: #000; */
        width: 90%;
        margin: 0 auto;
        padding: 1em;
        margin-bottom: 2em;
        padding-bottom: 0;
        max-width: 600px;
        flex: 1;
        font-size: 3rem;
        /* border: 1px solid hsl(0, 0%, 25%); */
       
    }

    p,
    span {
        margin-bottom: 1.2em;
    }


</style>
