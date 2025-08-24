<script>
    import '$lib/app.scss';

    let inputChecked = $state(false);
</script>

<style lang='scss'>
    header {
        width: 100%;
        position: sticky;
        top: 0;
        background: var(--gradient-steam-gray);
        border-bottom: var(--border-yellow);
        z-index: 100;
    }

    .main-nav {
        display: flex;
        gap: var(--spacing-l);
        align-items: center;
        justify-content: space-between;
        padding: 0 var(--spacing-l);
        width: 90%; 
        max-width: 1080px;
        height: 72px;
        margin: auto;

        @media screen and (max-width: 768px) {
            padding: 0 var(--spacing-2xs);
            width: calc(90%);
        }
    }

    nav {
        display: flex;
        align-items: center;
        gap: var(--spacing-xl);

        * {
            height: 100%;
            margin: 0;
            text-align: center;
        }

        a {
            color: var(--color-lighter-yellow);
            font-size: 0.8em;
            text-decoration: underline 2px hsl(54, 100%, 79%, 0);
            text-shadow: none;
            transition: all 0.15s ease-out;
            text-underline-offset: 5px;
        }

        a:hover {
            text-underline-offset: 3px;
            text-decoration: underline 2px hsl(54, 100%, 79%, 1);
            text-shadow: inherit;
            transition: all 0.15s ease-out;       
        }

        &.mobile {
            width: 40px;
            height: 100%;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            user-select: none;
            position: relative;

            .hamburger-container {
                position: absolute;
                z-index: 5;
                top: calc(50% - 12px); /* 3 spans with heights of 4px */
            }
        
            input
            {
                display: block;
                position: absolute;
                width: 100%;
                
                cursor: pointer;
                opacity: 0; 
                z-index: 2;

                -webkit-touch-callout: none;

                &:checked ~ span {
                    opacity: 1;
                    transform: rotate(45deg) translate(-2px, -1px);
                }

                &:checked ~ span:nth-last-child(3) {
                    opacity: 0;
                    transform: rotate(0deg) scale(0.2, 0.2);
                }

                &:checked ~ span:nth-last-child(2) {
                    transform: rotate(-45deg) translate(0, -1px);
                }

                &:checked ~ .menu-container > .menu {
                    transform: translateX(0px);
                }
            }
            
            span {
                display: block;
                width: 33px;
                height: 4px;
                margin-bottom: 5px;
                
                background: var(--color-lighter-yellow);
                border-radius: 3px;
                
                transform-origin: 3px 1.5px;
                
                transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0), opacity 0.55s ease;

                &:first-child {
                    transform-origin: 0% 0%;
                }

                &:nth-last-child(3) {
                    transform-origin: 0% 100%;
                }
            }

            .menu-container {
                position: absolute;
                left: max(-20dvw, -80px);
                width: min(30dvw, 146px);
                top: -24px;
                height: 340px;
                float: right;
                overflow: hidden;

                z-index: -1;
            }

            .menu {
                display: flex;
                transition: transform 0.3s ease, background-color 0.3s ease;
                border: 1px solid var(--color-lighter-yellow);
                flex-direction: column;
                grid-template-rows: repeat(4, 1fr);
                gap: var(--spacing-l);
                padding-top: var(--spacing-2xl);
                background: var(--gradient-steam-gray);
                transform: translateX(160px);

                z-index: -10;

                h2 {
                    margin: 0;
                    height: 30px;
                }
            }
        }    
    }

    img {
        max-height: 70px;
        aspect-ratio: 1 / 1 ;
    }

    .desktop {
        @media screen and (max-width: 768px) {
            display: none;
        }
    }

    .mobile {
        @media screen and (min-width: 768px) {
            display: none;
        }
    }
</style>

<header>
    <div class="main-nav">
        <a href="#home"><img src="/logos/ripe_render_logo_white.png" alt="Studio Logo"></a>
        <nav class='desktop'>
            <h2><a href="#home">Home</a></h2>
            <h2><a href="#main-content">Games</a></h2>
            <h2><a href="#studio">About</a></h2>
            <h2><a href="#contact">Contact</a></h2>
            <h2><a href="#partners">Partners</a></h2>
        </nav>
        <nav class="mobile">
            <div class="hamburger-container">
                <input bind:checked={inputChecked} type="checkbox" class="menu-checkbox"/>
                <span></span>
                <span></span>
                <span></span>
                <div class="menu-container">
                    <div class="menu">
                        <h2><a onclick={inputChecked = false} href="#home">Home</a></h2>
                        <h2><a onclick={inputChecked = false} href="#main-content">Games</a></h2>
                        <h2><a onclick={inputChecked = false} href="#studio">About</a></h2>
                        <h2><a onclick={inputChecked = false} href="#contact">Contact</a></h2>
                        <h2><a onclick={inputChecked = false} href="#partners">Partners</a></h2>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</header>
