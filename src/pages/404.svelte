
<script>
 import {language} from "../stores";

</script>
<section>

    {#if $language === "se"}
    <p>
        <span class="fa fa-terminal" /> <br /> <strong>404</strong> Här fanns
        det inget tyvärr ☹️ <br />
    </p>
    {:else}
    <p>
        <span class="fa fa-terminal" /> <br /> <strong>404</strong> Nothing to see here ☹️ <br />
    </p>
    {/if}
</section>

<style>
    section {
        background-color: #000;
        border: 1px solid hsl(0, 0%, 25%);
        width: 90%;
        margin: 0 auto;
        margin-bottom: 1em;
        padding: 1em;
        z-index: 100;
        flex: 1;
    }

    span {
        margin-bottom: 1.2em;
    }
</style>
