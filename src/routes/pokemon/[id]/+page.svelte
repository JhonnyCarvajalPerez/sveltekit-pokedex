<script lang="ts">
    import { page } from "$app/stores";
    import Card from "@smui/card";
    import { getPokemonInfo } from "../../../utils/getPokemonInfo";
    import { localFavorites } from "../../../utils";
    import PokemonStats from "../PokemonStats.svelte";
    const pokemonId = $page.params.id;
    const pokemon = getPokemonInfo(pokemonId);
    
    const onToogleFavorite = () => {
        console.log("toggle called");
        localFavorites.toggleFavorites(parseInt(pokemonId));
        //setIsInFavorites(!isInFavorites);
        isInFavorites = !isInFavorites;
        if (isInFavorites) return;
        
    };
    let isInFavorites = localFavorites.isPokemonInFavorites(parseInt(pokemonId));

</script>

{#await pokemon}
    <p>...waiting</p>
{:then pokemon}
    <div class="flex gap-4">
        <Card>
            <div class="card-main">
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                    alt={`pokemon ${pokemon?.name}`}
                />
                <br />
                <div style="width: 100%;">
                    <span class="float-left"
                        >{JSON.stringify(pokemon?.name)}</span
                    >
                    <span class="float-right">#{pokemon?.id}</span>
                </div>
            </div>
        </Card>
        <Card>
            <div class="card-banner">
                <div class="flex flex-row items-center justify-between p-5">
                    <h1 class="capitalize">{pokemon?.name}</h1>
                    <button
                        class={!isInFavorites
                            ? "card-btn-add "
                            : "card-btn-remove"}
                        on:click={() => onToogleFavorite()}
                    >
                        {isInFavorites
                            ? "Quitar de favoritos"
                            : "Guardar en favoritos"}
                    </button>
                </div>
                <div class="info-container">
                    <span class="text-lg">Sprites:</span>

                    <div class="flex flex-row justify-between">
                        <img
                            src={pokemon?.sprites.front_default}
                            alt={`pokemon ${pokemon?.name} image`}
                            width={100}
                            height={100}
                        />
                        <img
                            src={pokemon?.sprites.back_default}
                            alt={`pokemon ${pokemon?.name} image`}
                            width={100}
                            height={100}
                        />
                        <img
                            src={pokemon?.sprites.front_shiny}
                            alt={`pokemon ${pokemon?.name} image`}
                            width={100}
                            height={100}
                        />
                        <img
                            src={pokemon?.sprites.back_shiny}
                            alt={`pokemon ${pokemon?.name} image`}
                            width="100"
                            height="50"
                        />
                        {#if pokemon?.sprites.back_female && pokemon.sprites.front_female}
                            <div class="flex flex-row gap-20">
                                <span class="absolute text-red-300 right-36"
                                    >Female</span
                                >
                                <img
                                    src={pokemon.sprites.front_female}
                                    alt={`pokemon ${pokemon.name} image`}
                                    width={100}
                                    height={100}
                                />
                                <img
                                    src={pokemon.sprites.back_female}
                                    alt={`pokemon ${pokemon.name} image`}
                                    width={100}
                                    height={100}
                                />
                            </div>
                        {/if}
                    </div>
                </div>
            </div>
        </Card>
    </div>
    <div class="flex gap-4">
        <!-- <PokemonStats {pokemon}/> -->
    </div>
{:catch e}
    <p style="color:red">{e.message}</p>
{/await}

<style>
    .card-main {
        background-color: rgb(22, 21, 21) !important;
        border-color: gray;
        box-shadow: 5px 5px 10px rgba(174, 163, 163, 0.675) !important;
        width: 250px;
        height: 250px;
        padding: 15px !important;
        border-radius: 6px;
        text-align: center;
    }

    .card-main img {
        display: block;
        margin: 0 auto;
        width: 150px;
        height: 150px;
    }
    .card-banner {
        background-color: rgb(22, 21, 21) !important;
        border-color: gray;
        box-shadow: 5px 5px 10px rgba(174, 163, 163, 0.675) !important;
        height: 250px;
        padding: 15px !important;
        border-radius: 6px;
        text-align: center;
        width: calc(100vw - 300px);
    }
    .card-banner img {
        width: 100px;
        height: 100px;
    }
    .card-banner .card-btn-add {
        background-image: linear-gradient(rgb(113, 47, 184), rgb(40, 34, 75));
        width: 200px;
        height: 50px;
        border-radius: 6px;
        color: white;
    }
    .card-banner .card-btn-remove {
        border:2px solid purple;
        width: 200px;
        height: 50px;
        border-radius: 6px;
        color: white;
    }
</style>
