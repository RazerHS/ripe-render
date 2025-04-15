<script>
    let socials = [
        {
            src: "/yt_logo.svg",
            alt: "Youtube",
            href: "https://www.youtube.com/@RipeRender",
        },
        {
            src: "/fb_logo.svg",
            alt: "Facebook",
        },
        {
            src: "/ig_logo.svg",
            alt: "Instagram",
        },
        {
            src: "/x_logo.svg",
            alt: "X",
        },
        {
            src: "/bs_logo.svg",
            alt: "Bluesky",
        }
    ];
</script>

<style lang='scss'>
    section {
        --bg-color: var(--color-background-dark-transparent);
        --bg-image: url('bg_texture_1.png');
    }

    .content {
        display: grid;
        place-items: center;
        width: 100%;
        row-gap: var(--spacing-m);
    }

    .studio-info {
        display: flex;
        max-width: 800px;
        justify-content: center;
        gap: var(--spacing-3xl);

        h3 {
            margin-top: 0;
        }
    }

    .studio-img {
        background-color: hsl(0, 2%, 16%);
        background-size: cover;
        background-position: center;
        aspect-ratio: 1 / 1;
        width: 500px;
        border-radius: var(--border-radius);
    }

    .socials {
        display: flex;
    }

</style>

<section>
    <div class="bg-divider flipped"></div>
    <div class="content">
        <div class="spacing-l"></div>
        <h2>We are Ripe Render.</h2>
        <div class="studio-info">
            <div class="studio-img"></div>
            <div class="studio-text">
                <h3>Studio</h3>
                <p>We are a small team of artists and developers who love to create.</p>
            </div>
        </div>
        <p>Reach out to us!</p>
        <div class="socials">
            {#each socials as social}
                {@render contactButton(social.src, social.alt)}
            {/each}
        </div>
    </div>
</section>

{#snippet contactButton(src, alt)}
    <div class="contact-btn-container">
        <img {src} {alt}>
    </div>
{/snippet} 