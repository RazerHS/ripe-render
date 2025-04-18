<script>
    import Header from '$lib/components/Header.svelte';
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
      
    }

    .btn:hover {
        background-color: var(--color-primary);
    }

    .grid {
        display: grid;
        grid-template: 1fr / 1.1fr 1.5fr;
        column-gap: var(--spacing-s);
        width: 110%;
        padding-bottom: var(--spacing-s);

        .teeko-logo {
            width: 100%;
            max-width: 350px;
        }

        .summary {
            grid-column: 1 / 2;
            grid-row: 1 / 1;

            p {
                font-size: 1.2em;
                text-shadow: 1px 1px 1px var(--color-primary);   
            }

            h2 {
                color: white;
            }
        }

        .cta {
            grid-row: 2/2;

            .download {
                background: var(--gradient-steam-gray);
                border-radius: var(--border-radius);
                width: 300px;
                min-width: 50px;
                padding: var(--spacing-xs);
                border: 3px solid var(--color-lighter-yellow);
                vertical-align: -10px;
                transition: all 0.2s ease-out;
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

        .trailer {
        grid-row: 1 / 1;

        iframe {
            width: 100%;
            height: 420px;
            border: 1px solid var(--color-lighter-yellow);
            border-radius: var(--border-radius);
        }
    }

        .column {
            min-width: 300px;
        }
    }

    .steam-widget {
        display: grid;
        place-items: center;
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
                <div class="spacing-l"></div>
                <div class="column cta">
                        <div class="btn download">
                            <a href="#"><h2><span>Download Demo</span></h2></a>
                    </div>
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


