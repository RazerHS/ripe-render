<script>
    import Header from '$lib/components/Header.svelte';
    import "$lib/app.scss";
</script>

<style lang='scss'>
    section {
        --bg-color: var(--color-secondary-light-transparent);
        --bg-image: url('bg_texture_1.png');
    }

    p {
        font-size: 1.2em;
    }

    .bg {
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    .grid {
        display: grid;
        grid-template: 1fr / 0.8fr 1fr;
        row-gap: var(--spacing-s);
        column-gap: var(--spacing-xl);
        width: 100%;

        .teeko-logo {
            width: 100%;
            max-width: 350px;
            margin: auto;
        }

        .summary {
            grid-column: 1 / 2;
            grid-row: 1 / 1;
            max-width: 500px;

            h2 {
                color: white;
            }
        }

        .cta {
            grid-row: 2/2;
            display: grid;
            grid-template-columns: 2fr 1fr;
            column-gap: var(--spacing-xl);

            * {
                margin-top: 0;
            }
        
            .get-started {
                border: var(--border-yellow);
                background: linear-gradient(130deg, #3b4351, #282e39)
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
        grid-row: 1 / 1;

        iframe {
            width: 700px;
            height: 400px;
            border: var(--border-yellow);
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
    <img src="splash_24.png" alt="" class="bg">
    <div class="bg-filter"></div>
    <div class="content">
        <div class="spacing-xl"></div>
        <div class="spacing-xl"></div>
        <div class="grid full-bleed">
            <div class="summary column">
                <img src="/teeko_logo.png" alt="" class="teeko-logo">
                <p>A story-rich 2D platformer/tower defense hybrid inspired by the annual Costa Rican <i>Día de Las Mascaradas</i> festival.</p>
                <div class="spacing-l"></div>
                <div class="column cta">
                    <h2 class="btn get-started">Download Demo</h2>
                </div>
            </div>   
            <div class="column trailer">
                <iframe src="https://www.youtube.com/embed/UDEX8hPZDm8" title="Teeko - Reveal Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>    
        </div>
        <div class="spacing-3xl"></div>
        <div class="column steam-widget">
            <iframe src="https://store.steampowered.com/widget/3650150/" frameborder="0" width="620" height="191"></iframe>    
        </div>  
        <div class="spacing-m"></div>
        <div class="spacing-xl"></div>
    </div>
</section>


