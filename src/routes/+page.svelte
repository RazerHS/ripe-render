<script>
    import "$lib/app.scss"
    import Header from "$lib/components/core/Header.svelte";
    import Hero from "$lib/components/core/Hero.svelte";
    import MainContent from "$lib/components/core/MainContent.svelte";
    import Partners from "$lib/components/core/Partners.svelte";
    import Studio from "$lib/components/core/Studio.svelte";
    import Carousel from "$lib/components/functionality/Carousel.svelte";
</script>

<style lang='scss'>
    html {
        background-color: var(--color-background);
    }
</style>

<Header />
<Hero />
<MainContent />
<Studio />
<Partners />
