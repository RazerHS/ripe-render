<script>
    import "$lib/app.scss";

    let socials = [
        {
            src: "/logos/ig_logo.svg",
            alt: "Instagram",
            href: "https://www.instagram.com/teekogame/",
        },
        {
            src: "/logos/bs_logo.svg",
            alt: "Bluesky",
            href: "https://bsky.app/profile/teekogame.bsky.social",
        },
        {
            src: "/logos/yt_logo.svg",
            alt: "Youtube",
            href: "https://www.youtube.com/channel/UCMt6NZs9XzGHfiaiDvBfc6g",
        },
        {
            src: "/logos/x_logo.svg",
            alt: "X",
            href: "https://x.com/TeekoGame",
        },
        {
            src: "/logos/fb_logo.svg",
            alt: "Facebook",
            href: "https://www.facebook.com/profile.php?id=61575219172054",
        },
    ];

    let team = [
        {
            src: "team/teeko_antonio.png",
            title: 'Antonio Ercolani',
            description: 'Creator, Founder, Pixel Artist',
            linkedIn: 'https://www.linkedin.com/in/antonioercolanirojas/',
            flagSrc: '/assets/flags/costa_rica.png'
        },
        {
            src: "team/diablo_igor.png",
            title: 'Igor Kovacevic ',
            description: 'Founder, Programmer',
            linkedIn: 'https://www.linkedin.com/in/igikovacevic/',
            flagSrc: '/assets/flags/serbia.png'
        },
        {
            src: "team/bruja_carla.png",
            title: 'Carla Cerutti',
            description: 'Narrative Designer',
            linkedIn: 'https://www.linkedin.com/in/carla-cerutti-4bb6a5256/',
            flagSrc: '/assets/flags/costa_rica.png'
        },
        {
            src: "team/politico_ari.png",
            title: 'Ariana Phillips',
            description: 'Concept Artist',
            linkedIn: 'https://www.linkedin.com/in/ariana-phillips-rojas/',
            flagSrc: '/assets/flags/costa_rica.png'
        },
        {
            src: "team/abuela_lara.png",
            title: 'Lara Carrasco',
            description: 'Concept Artist',
            linkedIn: 'https://www.linkedin.com/in/lara-carrasco-alvarez/',
            flagSrc: '/assets/flags/spain.png'
        },
        {
            src: "team/toro_benji.png",
            title: 'Benji Savage',
            description: 'Level Designer',
            linkedIn: 'https://www.linkedin.com/in/besavage/',
            flagSrc: '/assets/flags/indonesia.png'
        },
        {
            src: "team/llorona_lex.png",
            title: 'Lex Fezler',
            description: 'Narrative Designer',
            linkedIn: 'https://www.linkedin.com/in/lex-fezler/',
            flagSrc: '/assets/flags/norway.svg'
        },
    ];
</script>

<style lang='scss'>
    section {
        --bg-image: url('/assets/splash_5_test.png');
    }

    .content {
        text-align: center;
    }

    h1, h2 {
        margin: 0; 
    }

    p {
        color: white;
    }

    .svg-icon {
        filter: var(--icon-filter-lighter-yellow);
        transition: var(--transition-idle);
    }

    .svg-icon:hover {
        filter: var(--icon-filter-bright-yellow);
        transition: var(--transition-idle);
        transform: translateY(-2px);
    }

    .team-grid {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        gap: var(--spacing-l);
        max-width: 80dvw;
    }

    .team-member-column {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-m);
        margin: auto;
        width: 300px;
        text-align: center;

        @media screen and (max-width: 1024px) {
            width: 200px;
            gap: var(--spacing-s);
        }

        @media screen and (max-width: 768px) {
            width: 150px;
        }

        @media screen and (max-width: 450px) {
            width: 100px;

            .heading {
                h2 {
                    font-size: 1.6rem;
                    margin-bottom: var(--spacing-3xs);
                }

                p {
                    font-size: 1rem;
                }
            }
        }

        .frame {
            width: 100%;
            height: 100%;
            aspect-ratio: 1 / 1;
            border-radius: 50%;
            color: white;
            background-color: var(--color-secondary);
        }

       .member-img {
            border-radius: 50%;
            width: 100%;
            height: 100%;
        }

        .links {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: var(--spacing-m);
        
            @media screen and (max-width: 768px) {
                gap: var(--spacing-s);
            }

            a {
                width: 72px;
                aspect-ratio: 1 / 1;

                @media screen and (max-width: 1230px) {
                    width: 64px;
                }

                @media screen and (max-width: 768px) {
                    width: 44px;
                }

                .ln-icon {
                    max-width: 100%;
                    max-height: 100%;
                }
            }

            .flag {
                height: 40px;
                aspect-ratio: 4 / 3;
                border: 1px solid var(--color-dark-black);

                @media screen and (max-width: 1230px) {
                    height: 32px;
                }

                @media screen and (max-width: 768px) {
                    height: 20px;
                }
            }
        }

        h2 {
            margin-bottom: var(--spacing-2xs);
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

        p {
            padding: 0 var(--spacing-3xs);
        }

        .socials {
            display: flex;
            gap: var(--spacing-s);
            padding: 0 var(--spacing-2xs);
            justify-content: center;
            align-items: center;
        
            img {
                max-width: 80%;
            
            }
        }

        .email::before {

            @media screen and (min-width: 360px) {
                display: inline-block; 
                content: '✉ ';
                font-size: 1.4em;
                padding-right: 12px;
                vertical-align: -5px;
            }
        }

        .email {
            color: var(--color-lighter-yellow);
            font-weight: 700;
            text-decoration: underline;
            text-decoration-skip: '✉ ';
            text-decoration-thickness: 0;
            text-underline-offset: 3px;
            font-size: 1.1em;
            transition: var(--transition-idle);
        }
       
        .email:hover {
            color: var(--color-bright-yellow);
            transition: var(--transition-idle);
            transform: translateY(-2px);
            text-decoration-thickness: 1px;
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
</style>

<section id='studio'>
    <img src="/assets/splash_5_test.png" alt="" class="bg">
    <div class="bg-filter"></div>
    <div class="bg-divider flipped"></div>
    <div class="content">
        <div class="spacing-3xl desktop"></div>
        <div class="spacing-3xl mobile"></div>
        <h1>We are Ripe Render.</h1>
        <div class="spacing-l mobile"></div>
        <div class="spacing-xl desktop"></div>
        <div class="team-grid full-bleed">
            {#each team as member}
                {@render teamMember(member.src, 'Meow', member.linkedIn, member.title, member.description, member.flagSrc)}
            {/each}
        </div>
        <div class="spacing-2xl"></div>
        <div class="spacing-l mobile"></div>
        <div class="contact" id="contact">
            <h2>Reach out to us!</h2>
            <p>Are you a content creator or streamer who wants to try Teeko? Or a publisher interested in our games? Ship us a message - we'd love to chat!</p>
            <div class="socials">
                {#each socials as social}
                    {@render contactButton(social.src, social.alt, social.href)}
                {/each}
            </div>
            <div class="spacing-m"></div>
            <a href="mailto:riperendergames@gmail.com" class='email'>riperendergames@gmail.com</a>
        </div>
    </div>
    <div class="spacing-xl"></div>
</section>

{#snippet contactButton(src, alt, href)}
    <div class="contact-btn-container">
        <a {href} target="_blank"><img {src} {alt} class='svg-icon'></a>
    </div>
{/snippet} 

{#snippet teamMember(src, alt, href, title, description, flagSrc)}
    <div class="team-member-column">
        <div class="image">
            <div class="frame">
                <img {src} {alt} class='member-img '>
            </div>
        </div>
        <div class="heading">
            <h2> {title} </h2>
            <p> {description} </p>
        </div>
        <div class="links">
            <img src={flagSrc} alt="Flag" class='flag'>
            <a href={href} target="_blank"><img src='/logos/ln_logo.svg' alt='LinkedIn' class='ln-icon svg-icon'></a>
        </div>
    </div>
{/snippet} 