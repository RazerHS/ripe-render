<script>
    import "$lib/app.scss"
    import Hero from "$lib/components/Hero.svelte";
    import MainContent from "$lib/components/MainContent.svelte";
    import Studio from "$lib/components/Studio.svelte";
</script>

<style lang='scss'>
    html {
        background-color: var(--color-background);
    }
</style>

<Hero />
<MainContent />
<Studio />

