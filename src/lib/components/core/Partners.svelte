<script>
    import "$lib/app.scss";

    let partners = [
        {
            name: "Essencial",
            src: "/logos/essencial_logo_white.png",
            href: "https://www.esencialcostarica.com/en/"
        },
        {
            name: "Frogbyte",
            src: "/logos/frogbyte_logo.png",
            href: "https://frogbyte.portfolio.site/"
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
        gap: var(--spacing-m);
        
        img {
            height: 300px;
        }
    }

</style>

<section id="partners">
    <div class="bg-filter"></div>
    <div class="spacing-s"></div>
    <h1>Partners</h1>
    <div class="partners">
        {#each partners as partner}
            {@render displayPartner(partner.name, partner.src, partner.href)}
        {/each}
    </div>
    <div class="spacing-xl"></div>
</section>

{#snippet displayPartner(name, src, href)}
    <a {href} target="_blank"><img {src} alt={name}></a>
{/snippet}

