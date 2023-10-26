import { error } from '@sveltejs/kit';
import { pokeApi } from '../../../api';
import type { PokemonListResponse } from '../../../interfaces';

/** @type {import('./$types').RequestHandler} */

export async function GET() {
    const getpokemons151 = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
    if (getpokemons151 === undefined) {
        throw error(400, {message:'Error when trying to get pokemons', code:500});	
    }
    return new Response(JSON.stringify(getpokemons151.data) );
}

export async function POST() {
   
    const getpokemons151 = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
    if (getpokemons151 === undefined) {
        throw error(400, {message:'Error when trying to get pokemons', code:500});	
    }
    return new Response(JSON.stringify(getpokemons151.data) );
}

export async function PUT(){
    //mimic an unexpected error
    throw new Error("Unexpected error");
    
    //controled error managed by error function from svelte
    throw error(404,{message:'Not found', code:404});
}
