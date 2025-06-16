<script>
    import Header from '$lib/components/core/Header.svelte';
    import "$lib/app.scss";
</script>

<style lang='scss'>
    section {
        --bg-color: var(--color-secondary-light-transparent);
    }

    .bg {
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    .btn {
        &:hover {
            background-color: var(--color-primary);
        }
    }

    .full-bleed {
        width: 100vw;
        margin-left: 50%;
        transform: translateX(-50%);

        @media screen and (max-width: 1300px) {
            margin-left: 0;
            transform: translateX(0);
        }
    }
    
    .desktop {
        @media screen and (max-width: 1300px) {
            display: none;
        }
    }

    .mobile {
        @media screen and (min-width: 1300px) {
            display: none;
        }
    }

    .grid {
        display: grid;
        grid-template: 1fr / 1.1fr 1.5fr;
        column-gap: var(--spacing-s);
        width: 110%;
        padding-bottom: var(--spacing-s);

        @media screen and (max-width: 1300px) {
            grid-template: 1fr / 1fr;
            width: 80%;
            margin: auto;
        }

        .column {
            min-width: 300px;

            @media screen and (max-width: 468px) {
                min-width: 150px;
            }
        }

        .teeko-logo {
            width: 100%;
            max-width: min(350px, 90%);
        }

        .summary {
            grid-column: 1 / 2;
            grid-row: 1 / 1;

            @media screen and (max-width: 1300px) {
                grid-column: 1 / 1;
                display: grid;
                place-items: center;
                text-align: center;
            }

            p {
                font-size: 1.2em;
                text-shadow: 1px 1px 1px var(--color-primary);   
            }

            h2 {
                color: white;
            }
        }

        .trailer {
            grid-row: 1 / 1;

            @media screen and (max-width: 1300px) {
                grid-row: 2 / 2;
            }

            iframe {
                width: 100%;
                height: 380px;
                border: 1px solid var(--color-lighter-yellow);
                border-radius: var(--border-radius);
            }
        }
    }

    .cta {
        grid-row: 2 / 2;

        p {
            font-size: 1.2em;
            text-shadow: 1px 1px 1px var(--color-primary);   
        }

        h2 {
            color: white;
        }

        &.mobile {
            @media screen and (max-width: 1300px) {
                grid-row: auto;
                display: flex;
                justify-content: center;
                height: 72px;
                width: 90%;
                margin: auto;
                gap: var(--spacing-s);
            }
        }

        .steam-logo {
            display: grid;
            place-items: center;
            
            img {
                max-width: 50px;
                max-height: 50px;
            }
        }

        .download {
            background: var(--gradient-steam-gray);
            border-radius: var(--border-radius);
            width: 320px;
            min-width: 50px;
            padding: var(--spacing-xs);
            border: 3px solid var(--color-lighter-yellow);
            transition: all 0.2s ease-out;
            display: flex;
            align-items: center;
        }

        .download:hover {
            background: var(--color-secondary);
            border: 3px solid var(--color-gray);
            transform: translateY(-3px);
            transition: all 0.2s ease-out;

            h2 {
                color: var(--color-gray);
            }
        }

        h2 {
            margin: 0;
            padding: 0;
            text-align: center;
        }

        a {
            width: 100%;
            height: 100%;
        }

        span {
            width: 100%;
            height: 100%;
            vertical-align: -10px;
        }
    }

    .lags-badge {
        display: flex;
        justify-content: center;
        height: 200px;
    }

    .steam-widget {
        display: grid;
        place-items: center;

        @media screen and (max-width: 768px) {
            display: none;
        }

        iframe {
            @media screen and (max-width: 768px) {
                width: min(600px, 80%);
            }
        }
    }

</style>

<div class="bg"></div>
<section id='home'>
    <img src="/assets/splash_24.png" alt="" class="bg">
    <div class="bg-filter"></div>
    <div class="content">
        <div class="spacing-xl"></div>
        <div class="spacing-xl"></div>
        <div class="grid full-bleed">
            <div class="summary column">
                <img src="/logos/teeko_logo_outline.png" alt="" class="teeko-logo">
                <p>A story-rich 2D platformer/tower defense hybrid inspired by the annual Costa Rican <i>Día de Las Mascaradas</i> festival.</p>
                <div class="spacing-l desktop"></div>
                <div class="spacing-s mobile"></div>
                {@render downloadButton('desktop')}
            </div>   
            <div class="column trailer">
                <iframe src="https://www.youtube.com/embed/XooBIDYGdEw" title="Teeko - Official Trailer | Latin American Games Showcase 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>            </div>    
            </div>
        <div class="spacing-m mobile"></div>
        {@render downloadButton('mobile')}
        <div class="spacing-xs desktop"></div>
        <div class="spacing-l mobile"></div>
    </div>
    <div class="lags-badge">
        <img src="/assets/lags_badge_2025.png" alt="LAGS Sticker">
    </div>
    <div class="spacing-l"></div>
    <div class="column steam-widget">
            <div class="spacing-s"></div>
            <iframe src="https://store.steampowered.com/widget/3650150/" frameborder="0" width="620" height="191"></iframe>   
        </div>  
    <div class="spacing-2xl"></div>
</section>

{#snippet downloadButton(platform)}
    <div class="column cta {platform}">
        <div class="btn download">
            <a href="https://store.steampowered.com/app/3650150/Teeko/" target="_blank"><h2><span>Wishlist Now!</span></h2></a>
            <div class="steam-logo">
                <img src="/logos/steam_logo.png" alt="Steam Logo">  
            </div>
        </div>
    </div>
{/snippet}