<script>
    import "$lib/app.scss";

    let partners = [
        {
            name: "Frogbyte",
            src: "/logos/frogbyte_logo.png"
        }
    ];
</script>

<style lang='scss'>
    .bg-filter {
        background-color: hsl(341, 21%, 26%, 0.7);
     }

    h1 {
        text-align: center;
    }

    .partners {
        display: flex;
        justify-content: center;
    }

</style>

<section id="partners">
    <div class="bg-filter"></div>
    <div class="bg-divider"></div>
    <div class="spacing-xl"></div>
    <h1>Partners</h1>
    <div class="partners">
        {#each partners as partner}
            {@render displayPartner(partner.name, partner.src)}
        {/each}
    </div>
    <div class="spacing-xl"></div>
</section>

{#snippet displayPartner(name, src)}
    <img {src} alt={name}>
{/snippet}

