<script>	
import {language} from "../stores";
</script>

{#if $language === "se"}
<section>
    <p>
        <span class="fa fa-terminal" /> <br /> Jag är en utvecklare och student från
        Nyköping. De senaste två åren har jag pluggat via programmet innovativ programmering
        på Linköpings universitet. Under utbildningen har vi gjort applikationer
        för olika plattformar; webb, mobil och desktop, vilket har inkluderat både
        frontend- och backendutveckling.
    </p>

    <p>
        Med mer erfarenhet har jag fastnat för frontend utveckling eftersom jag
        då får programmera sådant som den slutliga användaren ska interagera
        med, det är mer visuellt och roligare. Därför vill jag lära mig mer och
        bli bättre inom det området.
    </p>

    <p>
        Som utveckare är jag strukturerad, intresserad av att hitta enkla och
        effektiva lösningar samt fokuserad på hur den slutliga produkten kommer
        upplevas av användaren. Förutom programmering gillar jag mina vänner,
        musik, filmer & serier och art som innehåller mönster av något slag,
        till exempel pixel art eller doodle art!
    </p>

    <p>
        Jag gillar att arbeta tillsammans med andra ambitiösa och taggade
        personer och ser fram emot att få vara med i olika projekt som på något
        sätt kan bidra till nytta för någon annan. 😊
    </p>
</section>

{:else}

<section>
    <p>
        <span class="fa fa-terminal" /> <br /> 
        
        I'm a developer and student from Nyköping. The last two years I've studied programming at Linköpings University. During the education
        we've done applications for different platforms; web, mobile and desktop, which included both frontend and backend.
    </p>

    <p>
        With more experience, I have started to like frontend development more since it gives me the opportunity to
        program what the user interacts with, it's more visual and fun. Because of that I want to learn more and be better within that field.
    </p>

    <p>
        As a developer I'm structured, intrested in finding the most easy and effective solutions and focused on how the application will be experienced 
        by the user. Except for programming I like my friends, music, movies & series and art with some kind of pattern like pixel- or doodle art.
    </p>

    <p>
        I'd like to work with other ambitious people and I'm looking forward to participating in projects that 
        can in some way contribute to the benefit of someone else. 😊
    </p>
</section>

{/if}

<style>
    section {
        background-color: #000;
        width: 90%;
        margin: 0 auto;
        padding: 1em;
        margin-bottom: 2em;
        padding-bottom: 0;
        flex: 1;
        border: 1px solid hsl(0, 0%, 25%);
       
    }

    p,
    span {
        margin-bottom: 1.2em;
    }


</style>
