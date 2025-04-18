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
        height: 72px;
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
    }      

    img {
        max-height: 50px;
        transform: rotateZ(-20deg);
        aspect-ratio: 1 / 1 ;
    }

</style>

<header>
    <div class="main-nav">
        <a href="#"><img src="/logos/ai-banana-logo-temp.png" alt="Temp Logo"></a>
        <nav>
            <h2><a href="#home">Home</a></h2>
            <h2><a href="#main-content">Games</a></h2>
            <h2><a href="#studio">About</a></h2>
            <h2><a href="#contact">Contact</a></h2>
        </nav>
    </div>
</header>