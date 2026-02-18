<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
    <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
</svelte:head>

<script>
    import { onMount } from "svelte";
    import '$lib/app.scss';

    onMount(() => {
        initalizeCarousel();
    })

    function initalizeCarousel() {
        var elem = document.querySelector('.carousel');
        var flkty = new Flickity( elem, {
            cellAlign: 'center',
            wrapAround: true,
            autoPlay: 1500,
            selectedAttraction: 0.01,
            friction: 0.15,
            initialIndex: 7,
        });
    }
</script>

<style lang='scss'>

   .carousel {
        max-width: min(150dvw, 2000px);
    }   

    .carousel-cell {
        aspect-ratio: 16 / 9;
        border-radius: 5px;
        margin-right: 20px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .carousel-cell {
        aspect-ratio: 16 / 9;
        width: clamp(200px, 100dvw, 1000px);
        display: grid;
        place-items: center;

        @media screen and (max-width: 1024px) {
            width: 98dvw;
        }
    }
     
</style>

<div class="carousel full-bleed">
    {#each { length: 5 }, index}
        {@render carouselImage(index + 1)}
    {/each}
</div>

{#snippet carouselImage(index)}
    <div class="carousel-cell">
        <img src="/assets/screenshots/screenshot_{index}.jpg" alt="Screenshot {index}">
    </div>
{/snippet} 
