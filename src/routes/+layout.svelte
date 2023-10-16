<script>
    //Necesary file for import tailwind classes
    import "../app.css";

</script>

<nav class="flex w-full flex-row items-center header">
    <img src="/ditto.png" alt="navbar icon" width={100} height={100} />
    <a href="/"
        ><span class="flex flex-row items-center">
            <h2>P</h2>
            <h3>okemon</h3>
        </span></a
    >
    <div class='flex-1'></div>
    <a href="/favorites">Favorites</a>
</nav>
<slot />

<style>
    .header {
        background: linear-gradient(
            to bottom,
            black,
            #320032,
            rgb(18, 9, 44),
            #040418
        );
        border-radius: 5px;
        position: sticky;
        z-index: 10;
        top: 0;
        justify-content: start;
        padding: 0px 35px;
    }
</style>
