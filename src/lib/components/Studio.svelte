<script>
    import "$lib/app.scss";

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

    let team = [
        {
            src: "team/teeko_antonio.png",
            title: 'Antonio Ercolani',
            description: 'Founder, Meow',
            linkedIn: 'https://www.linkedin.com/in/igikovacevic/',
        },
        {
            src: "team/diablo_igor.png",
            title: 'Igor Kovacevic',
            description: 'Founder',
            linkedIn: 'https://www.linkedin.com/in/igikovacevic/',
        },
        {
            src: "team/toro_benji.png",
            title: 'Benji Savage',
            description: 'Designer',
            linkedIn: 'https://www.linkedin.com/in/igikovacevic/',
        },
        {
            src: "team/llorona_lex.png",
            title: 'Lex Fezler',
            description: 'Narrative Designer',
            linkedIn: 'https://www.linkedin.com/in/igikovacevic/',
        },
        {
            src: "team/bruja_carla.png",
            title: 'Carla Cerutti',
            description: 'Narrative Designer',
            linkedIn: 'https://www.linkedin.com/in/igikovacevic/',
        },
        {
            src: "team/abuela_lara.png",
            title: 'Lara Carrasco',
            description: '2D Art',
            linkedIn: 'https://www.linkedin.com/in/igikovacevic/',
        },
        {
            src: "team/politico_ari.png",
            title: 'Ari Phillips',
            description: '2D Art',
            linkedIn: 'https://www.linkedin.com/in/igikovacevic/',
        }
    ];
</script>

<style lang='scss'>
    section {
        --bg-image: url('splash_5_test.png');
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

    h1, h2 {
        margin: 0; 
    }

    p {
        color: white;
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
        gap: var(--spacing-s);
        
        img {
            max-width: 80%;
        }
    }

    .team {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: var(--spacing-2xl);
        row-gap: var(--spacing-l);
    }

    .svg-icon {
            filter: var(--icon-filter-bright-yellow);
            transition: var(--transition-idle);
        }

        .svg-icon:hover {
            filter: var(--icon-filter-yellow);
            transition: var(--transition-idle);
            scale: 1.05;
        }

    .team-member {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-m);
        margin: auto;

        .frame {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            color: white;
            background-color: var(--color-secondary);
        }

       .member-img {
            border-radius: 50%;
            max-width: 300px;
            max-height: 300px;
        }

        a {
            margin: auto;
        }

        .ln-icon {
            max-width: 72px;
            max-height: 72px;
        }

        h2 {
            margin: 0
        }

        p {
            margin: 0;
        }

        .heading {
            text-align: center;
        }
    }

    .contact {
        display: grid;
        place-items: center;
        text-align: center;
    }

</style>


<section>
    <img src="splash_5_test.png" alt="" class="bg">
    <div class="bg-filter"></div>
    <div class="bg-divider flipped"></div>
    <div class="content">
        <div class="spacing-3xl"></div>
        <h1>We are Ripe Render.</h1>
        <div class="studio-info">
            <div class="team">
                {#each team as member}
                    {@render teamMember(member.src, 'Meow', member.linkedIn, member.title, member.description)}
                {/each}
            </div>
        </div>
        <div class="spacing-m"></div>
        <div class="contact">
            <h2>Reach out to us!</h2>
            <p>Are you a contact creator or streamer who wants to try Teeko? Or a publisher and are interested in our games? Contact us - we'd love to chat!</p>
            <div class="socials">
                {#each socials as social}
                    {@render contactButton(social.src, social.alt)}
                {/each}
            </div>
        </div>
    </div>
    <div class="spacing-xl"></div>
</section>

{#snippet contactButton(src, alt)}
    <div class="contact-btn-container">
        <img {src} {alt} class='svg-icon'>
    </div>
{/snippet} 

{#snippet teamMember(src, alt, href, title, description)}
    <div class="team-member">
        <div class="image">
            <div class="frame">
                <img {src} {alt} class='member-img '>
            </div>
        </div>
        <div class="heading">
            <h2> {title} </h2>
            <p> {description} </p>
        </div>
        <a href={href}><img src='ln_logo.svg' alt='LinkedIn' class='ln-icon svg-icon'></a>
    </div>
{/snippet} 