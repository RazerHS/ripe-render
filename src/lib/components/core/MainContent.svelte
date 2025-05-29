<script>
    import Carousel from '$lib/components/functionality/Carousel.svelte';   
    import "$lib/app.scss";
</script>

<style lang='scss'>
    section {
        --bg-color: var(--color-accent-dark-transparent);
    }

    .bg-filter {
        background-color: hsl(341, 21%, 26%, 0.7);
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

    .carousel-container {
        margin: auto;
        text-align: center;
        
        h2 {
            margin: 0;
        }
    }

    .header {
        margin: auto;
        gap: var(--spacing-l);
        padding: var(--spacing-l);
        text-align: center;
    }

    .teeko-logo {
        max-width: min(300px, 90%);
    }

    .footer {
        display: grid;
        place-items: center;
        margin: auto;
        text-align: center;
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
        <div class="carousel-container">
            <h2>Screenshots</h2>
            <div class="spacing-m"></div>
            <Carousel />
        </div>
        <div class="spacing-xl"></div>
            <div class="footer">
            <h2>Find our <a href='https://riperender.com/press/'>Press Kit!</a></h2>
        </div>
        <div class="spacing-xl desktop"></div>
        <div class="spacing-l mobile"></div>
    </div>
</section>

