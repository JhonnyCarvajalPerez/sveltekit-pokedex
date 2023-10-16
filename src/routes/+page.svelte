<script lang="ts">
	import Card from "@smui/card";
	import { pokeApi } from "../api";
	import { goto } from '$app/navigation';
    import type { PokemonListResponse } from "../interfaces";

	async function getPokemos() {
		const resp = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
		return resp.data;
	}
	let pokemons = getPokemos();
	function handleCardClick(id:number){
		goto(`/pokemon/${id}`) 
	}
</script>


{#await pokemons}
	<p>...waiting</p>
{:then data}
	<div class="grid gap-4 grid-cols-7">
		{#each data.results as pokemon, id}
			<Card on:click={() => handleCardClick(id+1)}>
				<div class="card">
					<img
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
							id + 1
						}.svg`}
						alt={`pokemon ${pokemon.name}`}
					/>
					<br />
					<div style="width: 100%;">
						<span class="float-left"
							>{JSON.stringify(pokemon.name)}</span
						>
						<span class="float-right">#{id + 1}</span>
					</div>
				</div>
			</Card>
		{/each}
	</div>
{:catch e}
	<p style="color:red">{e.message}</p>
{/await}

<style lang="postcss">
	:global(html) {
		background: linear-gradient(
			to bottom,
			black,
			#320032,
			rgb(18, 9, 44),
			#040418
		);
		min-height: 100vh;
		color: white;
	}
	.card {
		background-color: rgb(22, 21, 21) !important;
		border-color: gray;
		box-shadow: 5px 5px 10px rgba(174, 163, 163, 0.675) !important;
		width: 250px;
		height: 250px;
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
