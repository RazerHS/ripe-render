<style lang='scss'>
    header {
        width: 100%;
        position: sticky;
        top: 0;
        background-color: var(--color-dark-black);
        border-bottom: var(--border-yellow);
        z-index: 100;
    }

    .main-nav {
        display: flex;
        gap: var(--spacing-l);
        align-items: center;
        justify-content: space-between;
        padding: 0 var(--spacing-s);
        width: 90%; 
        height: 72px;
    }

    nav {
        display: flex;
        align-items: center;
        gap: var(--spacing-l);

        a {
            color: var(--color-lighter-yellow);
            font-size: 0.8em;
        }

        a:hover {
            transition: all 0.1s ease-out;
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
        <img src="/ai-banana-logo-temp.png" alt="Temp Logo">
        <nav>
            <h2><a href="#home">Home</a></h2>
            <h2><a href="#games">Games</a></h2>
            <h2><a href="#about">About</a></h2>
            <h2><a href="#contact">Contact</a></h2>
        </nav>
    </div>
</header>