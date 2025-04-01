<script>
    import "$lib/app.scss";
</script>

<style lang='scss'>
    section {
        margin: 0 auto;
    }

    .hero-bg {
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        z-index: -1;
    }

    .grid {
        display: grid;
        grid-template: 1fr auto / 1fr auto 1fr;
        row-gap: var(--spacing-l);
        column-gap: var(--spacing-xs);
        margin: auto;
        width: 90%;

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

    video {
        max-width: 100%;
        width: 100%;
        height: 100%;
        aspect-ratio: 16 / 9;
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
</style>

<section>
    <img src="/splash_3.png" alt="" class="hero-bg">
    <div class="spacing-xl"></div>
    <div class="spacing-xl"></div>
    <div class="spacing-xl"></div>
    <div class="grid">
        <div class="summary column">
            <img src="/teeko_logo.png" alt="" class="teeko-logo">
            <p>A story-rich 2D platformer/tower defense hybrid inspired by the annual Costa Rican <i>Día de Las Mascaradas</i> festival.</p>
            <p><b>Website in progress!</b> </p>
        </div>
        <div class="column trailer">
            <video src="" title='Trailer' controls loop='true' autoplay='true'></video>
        </div>
        <div class="column cta">
            <div class="btn get-started">Get Started</div>
            <div class="btn press-kit">Press Kit</div>  
        </div>
    </div>
   
</section>


