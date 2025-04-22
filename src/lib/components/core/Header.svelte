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
            vertical-align: -10px;
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
            .menu-toggle {
                position: relative;
                display: block;
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                user-select: none;
            
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

                    &:checked ~ .menu-container {
                        transform: translate(-105px, -55px); 
                    }
                }
                
                span {
                    display: block;
                    width: 33px;
                    height: 4px;
                    margin-bottom: 5px;
                    position: relative;
                    
                    background: var(--color-lighter-yellow);
                    border-radius: 3px;
                    
                    z-index: 1;
                    
                    transform-origin: 3px 1.5px;
                    
                    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0), opacity 0.55s ease;

                    &:first-child {
                        transform-origin: 0% 0%;
                    }

                    &:nth-last-child(3) {
                        transform-origin: 0% 100%;
                    }
                }
            }

            .menu-container {
                position: absolute;
                width: 150px;
                height: 340px;
                background: var(--gradient-steam-gray);
                transform: translate(300px, -55px); /* magic number */
                transition: transform 0.3s ease, background-color 0.3s ease;
                border: 1px solid var(--color-lighter-yellow);
            }

            .menu {
                display: flex;
                flex-direction: column;
                grid-template-rows: repeat(4, 1fr);
                gap: var(--spacing-l);
                padding: var(--spacing-2xl) var(--spacing-l);

                h2 {
                    margin: 0;
                    height: 30px;
                }
            }
        }    
    }

    img {
        max-height: 50px;
        transform: rotateZ(-20deg);
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
        <a href="#home"><img src="/logos/ai-banana-logo-temp.png" alt="Temp Logo"></a>
        <nav class='desktop'>
            <h2><a href="#home">Home</a></h2>
            <h2><a href="#main-content">Games</a></h2>
            <h2><a href="#studio">About</a></h2>
            <h2><a href="#contact">Contact</a></h2>
        </nav>
        <nav class="mobile">
            <div class="menu-toggle">
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
                    </div>
                </div>
            </div>
        </nav>
    </div>
</header>
