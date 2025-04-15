<script>
    import Header from "$lib/components/Header.svelte";
    import "$lib/app.scss";

    let parallax = [
    {
        src: "/parallax/Slash5_01_bush.png",
        alt: "Bush",
        z: 1,
        parallaxSpeed: 0.8, 
        opacity: 0
    },
    {
        src: "/parallax/Slash5_02_tita.png",
        alt: "Tita",
        z: 2,
        parallaxSpeed: 0.2, 

    }, 
    {
        src: "/parallax/Slash5_03_devil.png",
        alt: "Devil",
        z: 3,
        parallaxSpeed: 0.95, 

    },
    {
        src: "/parallax/Slash5_04_foreground.png",
        alt: "Foreground",
        z: 4,
        parallaxSpeed: 1.1, 
        opacity: 0.6,
    }, 
    // {
    //     src: "/parallax/Slash5_05_bull.png",
    //     alt: "Bull",
    //     z: 5,
    //     parallaxSpeed: 0.9, 

    // }, 
    // {
    //     src: "/parallax/Slash5_06_witch.png",
    //     alt: "Witch",
    //     z: 6,
    //     parallaxSpeed: 0.9, 

    // }, 
    {
        src: "/parallax/Slash5_07_midground.png",
        alt: "Midground",
        z: 7,
        parallaxSpeed: 1, 
        opacity: 0.6,
    }, 
    {
        src: "/parallax/Slash5_08_payaso.png",
        alt: "Payaso",
        z: 8,
        parallaxSpeed: 0.95, 

    },
    {
        src: "/parallax/Slash5_09_llorona.png",
        alt: "Llorona",
        z: 9,
        parallaxSpeed: 0.95, 

    },
    {
        src: "/parallax/Slash5_10_background.png",
        alt: "Background",
        z: 10,
        parallaxSpeed: 1, 
        opacity: 0.5,

    }, 
    {
        src: "/parallax/Slash5_11_pirate.png",
        alt: "Pirate",
        z: 11,
        parallaxSpeed: 1, 

    }, 
    {
        src: "/parallax/Slash5_12_fog.png",
        alt: "Fog",
        z: 12,
        parallaxSpeed: 1, 

    },
    {
        src: "/parallax/Slash5_13_mountains.png",
        alt: "Mountains",
        z: 13,
        parallaxSpeed: 1, 

    }, 
    {
        src: "/parallax/Slash5_14_mountain.png",
        alt: "Mountain",
        z: 14,
        parallaxSpeed: 1, 

    }, 
    {
        src: "/parallax/Slash5_14_volcano.png",
        alt: "Volcano",
        z: 14,
        parallaxSpeed: 1, 
        opacity: 0.5,

    }, 
    {
        src: "/parallax/Slash5_15_smoke.png",
        alt: "Smoke",
        z: 15,
        parallaxSpeed: 1, 
        opacity: 0.4,

    },
    {
        src: "/parallax/Slash5_16_cloudA.png",
        alt: "Cloud A",
        z: 16,
        parallaxSpeed: 1, 
        opacity: 0.3,

    }, 
    {
        src: "/parallax/Slash5_16_cloudB.png",
        alt: "Cloud B",
        z: 16,
        parallaxSpeed: 1, 
        opacity: 0.3,
    },
    {
        src: "/parallax/Slash5_16_sky.png",
        alt: "Sky",
        z: 16,
        parallaxSpeed: 0, 
        opacity: 0.1,
    }    
    ];
</script>

<style lang='scss'>
    .grid {
        display: grid;
        grid-template: 1fr auto / 1fr auto 1fr;
        padding: var(--spacing-l);
        row-gap: var(--spacing-l);
        column-gap: var(--spacing-m);
        margin: auto;

        @media (max-width: 1080px) {
            grid-template: 1fr / 1fr;
            place-items: center;
            column-gap: 0;
        }

        .teeko-logo {
            max-width: 450px;
            margin: auto;
        }

        .summary {
            grid-column: 1 / 3;
            grid-row: 1 / 1;
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

    video {
        max-width: 100%;
        width: 100%;
        height: 100%;
        aspect-ratio: 16 / 9;
    }

    .column {
        min-width: 300px;
        
        @media (max-width: 1080px) {
            min-width: 0;
        }
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

    @keyframes parallax {
        to { 
            transform: translateY(calc(var(--parallax-speed) * 500px));
        }
    }

    section {
        z-index: 0;
        aspect-ratio: 16 / 9;
        margin: 0;
    }

    .parallax {
        background-color: var(--color-secondary-light);
        display: grid;
        position: relative;
        width: 100%;
        max-width: 100%;
        height: 160dvh;
        max-height: 160dvh;
        grid-template-areas: 'stack';
        z-index: -1;

        * {
            grid-area: stack;
            animation: parallax linear;
            animation-timeline: scroll();
        }

        img {
            height: 100%;
            object-fit: cover;
        }

        .divider-img {
            position: absolute;
            height: auto;
            bottom: 0;
            --parallax-speed: 0;
        }

        .content {
            z-index: 100;
            --parallax-speed: 0.4;
            display: grid;
            grid-template-columns: repeat(16, 1fr);
            padding-bottom: 50%;

            .steam-widget {
                grid-column: 13 / span 1;
                grid-row: 10 / span 1;
            }
        }
    }

    .steam-widget iframe {
        border-radius: var(--border-radius);
        filter: drop-shadow(0px -16px 32px var(--color-primary-light));
    }
</style>

{#snippet parallaxLayer(src, alt, z, parallaxSpeed, opacity)} 
    <img {src} {alt} style="z-index: {z}; --parallax-speed: {parallaxSpeed}; opacity: {opacity}" class="parallax-img">
{/snippet}

<section>
    <!-- <Header />  -->
    <div class="parallax">
        {#each parallax as layer}
            {@render parallaxLayer(layer.src, layer.alt, Math.abs(16 - layer.z), layer.parallaxSpeed, layer.opacity === undefined ? 1 : layer.opacity)}
        {/each}
        <!-- <img class='divider-img'src="divider.png" alt=""> -->
        <!-- <div class="content">
            <div class="steam-widget">
                <iframe src="https://store.steampowered.com/widget/3650150/" frameborder="0" width="646" height="191"></iframe>    
            </div>            
        </div> -->
    </div>
    <!-- <img src="/splash_3.png" alt="" class="hero-bg"> -->
    <!-- <div class="spacing-xl"></div>
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
    </div> -->
</section>


