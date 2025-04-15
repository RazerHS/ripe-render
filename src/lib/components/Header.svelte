<style lang='scss'>
    header {
        width: 95%;
        height: 72px;
        display: flex;
        gap: var(--spacing-l);
        align-items: center;
        justify-content: space-between;
        padding: 0 var(--spacing-s);
    }

    nav {
        display: flex;
        gap: var(--spacing-l);
        font-size: var(--font-size-m);

        a {
            color: black;
        }

        a:hover {
            color: var(--color-accent-light);
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
    <img src="/ai-banana-logo-temp.png" alt="Temp Logo">
    <nav>
        <a href="#home">Home</a>
        <a href="#games">Games</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
    </nav>
</header>