<script lang="ts">
    import Card from "@smui/card";
    import NoFavorites from "../../components/ui/NoFavorites.svelte";
    import { localFavorites } from "../../utils";
    import { goto } from '$app/navigation';

    const favoritePokemons = localFavorites.getFavoritePokemons();
    console.log(favoritePokemons);
    function handleCardClick(id:number){
		goto(`/pokemon/${id}`) 
	}
</script>

<div class="favorites-bar">
    {#if favoritePokemons.length === 0}
        <NoFavorites />
    {:else}
        <div class="grid gap-4 grid-cols-7">
            {#each favoritePokemons as id}
                <div>
                    <Card on:click={() => handleCardClick(id)}>
                        <div class="card">
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                                alt="pokemon"
                            />
                        </div>
                    </Card>
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .favorites-bar {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .card {
        background-color: rgb(22, 21, 21) !important;
        border-color: gray;
        box-shadow: 5px 5px 10px rgba(174, 163, 163, 0.675) !important;
        width: 250px;
        height: 200px;
        padding: 15px !important;
        border-radius: 6px;
        text-align: center;
        cursor: pointer;
    }
    .card img {
        display: block;
        margin: 0 auto;
        width: 150px;
        height: 150px;
    }
</style>
