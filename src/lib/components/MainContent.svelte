<script>
    import Glide from '@glidejs/glide';
    import { onMount } from 'svelte';
    import '@glidejs/glide/dist/css/glide.core.min.css';

    onMount(() => {
        let glide = new Glide('.glide', {
            type: 'carousel',
            startAt: 0,
            perView: 3,
            focusAt: 'center',
            gap: 20,
            breakpoints: {
                768: {
                    perView: 1
                }
            }
        }).mount();

        return () => {
            glide.destroy();
        };
    });
</script>

<style lang='scss'>
    section {
        --bg-color: var(--color-accent-dark-transparent);
    }

    .bg-filter {
        background-color: hsl(341, 21%, 26%, 0.5);
     }

     a {
        color: var(--color-white);
        text-underline-offset: 7px;
        text-decoration: underline 2px currentColor;
        text-decoration-thickness: 0px;
        transition: all 0.15s ease-out;
     }

     a:hover {
        text-underline-offset: 4px;
        text-decoration-thickness: 1px;
        transition: all 0.15s ease-out;
    }      

    .content {
        position: relative;
    }

    .header {
        margin: auto;
        gap: var(--spacing-l);
        padding: var(--spacing-l);
        text-align: center;
    }

    .teeko-logo {
        max-width: 300px;
    }

    .footer {
        display: grid;
        place-items: center;
        margin: auto;
    }

    .carousel-container {
        padding: --var(--spacing-l);
        max-width: 1080px;

        h2 {
            text-align: center;
            margin: 0;
        }
    }

    .glide {
        width: 100%;
    }

    .glide__track {
        overflow: hidden;
    }

    .glide__slides {
        align-items: center;
        justify-content: center;
    }

    .glide__slide:not(.glide__slide--active)
    {
        transition: all 0.3s ease;
        border-radius: var(--border-radius);
        overflow: hidden;
        scale: 0.7;
        transition: all 1s linear;
    }
   
    .glide__slide {
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .glide__arrows {
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        z-index: 20;
    }

    .img-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .glide__arrow {
        position: absolute;
        background-color: var(--color-lighter-yellow);
        color: #333;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        transition: all 0.2s ease;
    }

    .glide__arrow:hover {
        background-color: #fcd34d;
        transform: scale(1.05);
    }

    .glide__arrow--left {
        left: 20px;
    }

    .glide__arrow--right {
        right: 20px;
    }
</style>

<section id='main-content'>
    <img src="/assets/splash_2.png" alt="" class="bg">
    <div class="bg-filter"></div>
    <div class="bg-divider"></div>
    <div class="content">
        <div class="spacing-xl"></div>
        <div class="header">
            <img src="/logos/teeko_logo_outline.png" alt="Teeko Logo" class="teeko-logo">
        </div>    
        <div class="carousel-container full-bleed">
            <h2>Screenshots</h2>
            <div class="spacing-xl"></div>
            <div class="glide">
                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides">
                        {#each { length: 5 }, index}
                            {@render carouselImage(index + 1)}
                        {/each}
                    </ul>
                </div>
                <div class="glide__arrows" data-glide-el="controls">
                    <button class="glide__arrow glide__arrow--left" data-glide-dir="<">←</button>
                    <button class="glide__arrow glide__arrow--right" data-glide-dir=">">→</button>
                </div>
            </div>
        </div>
        <div class="spacing-xl"></div>
            <div class="footer">
            <h2>Download <a href='https://drive.google.com/drive/folders/1Qj7aqEayrbyJJMpOLCH-inZYItY74FdI'>Press Kit.</a> Work in progress!</h2>
        </div>
        <div class="spacing-xl"></div>
        <div class="spacing-xl"></div>
    </div>
</section>

{#snippet carouselImage(index)}
    <li class="glide__slide">
        <div class="img-container">
            <img src="screenshots/screenshot_{index}.jpg" alt="Screenshot {index}">
        </div>
    </li>
{/snippet} 