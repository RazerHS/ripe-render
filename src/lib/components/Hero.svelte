<script>
    import Header from '$lib/components/Header.svelte';
    import "$lib/app.scss";
</script>

<style lang='scss'>
    section {
        --bg-color: var(--color-secondary-light-transparent);
        --bg-image: url('bg_texture_1.png');
    }

    .bg {
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    .grid {
        display: grid;
        grid-template: 1fr auto / 1fr auto 1fr;
        row-gap: var(--spacing-s);
        column-gap: var(--spacing-xs);
        margin: auto;
        width: 100%;

        .teeko-logo {
            width: 100%;
            max-width: 350px;
            margin: auto;
        }

        .summary {
            grid-column: 1 / 3;
            grid-row: 1 / 1;
            max-width: 500px;
        }

        .cta {
            display: grid;
            grid-template-columns: 2fr 1fr;
            column-gap: var(--spacing-xl);
            width: 80%;
            font-family: var(--ff-heading);

            .get-started {
                background-color: var(--color-primary);
                box-shadow: 0 0 8px 0 var(--color-secondary);
            }

            .press-kit {
                background-color: var(--color-accent);
                box-shadow: 0 0 8px 0 var(--color-secondary);
            }
        }

        .btn {
            grid-row: 2 / 2;
        }
    }

    img {
        max-width: 100%;
        object-fit: cover;
    }

    .trailer {

        iframe {
            width: 700px;
            height: 400px;
        }
    }

    .column {
        min-width: 300px;
    }

    .btn {
        width: 100%;
        height: 100%;
        min-width: 50px;
        height: 32px;
        display: grid;
        place-items: center;
        padding: var(--spacing-s);
        border-radius: var(--border-radius);
        background-color: var(--color-primary);
    }

    .steam-widget {
        display: grid;
        place-items: center;
    }
</style>

<div class="bg"></div>
<section>
    <Header />
    <div class="content">
        <div class="spacing-xl"></div>
        <div class="spacing-xl"></div>
        <div class="grid">
            <div class="summary column">
                <img src="/teeko_logo.png" alt="" class="teeko-logo">
                <p>A story-rich 2D platformer/tower defense hybrid inspired by the annual Costa Rican <i>Día de Las Mascaradas</i> festival.</p>
                <div class="spacing-3xs"></div>
                <p><b>Demo coming soon!</b></p>
            </div>
            <div class="column trailer">
                <iframe src="https://www.youtube.com/embed/UDEX8hPZDm8" title="Teeko - Reveal Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="column cta">
                <div class="btn get-started">Get Started</div>
                <div class="btn press-kit">Press Kit</div>  
            </div>     
        </div>
        <div class="spacing-2xl"></div>
        <div class="steam-widget">
            <iframe src="https://store.steampowered.com/widget/3650150/" frameborder="0" width="646" height="191"></iframe>    
        </div>  
        <div class="spacing-2xl"></div>
    </div>
</section>


