
const toggleFavorites = (id: number) => {
    console.log('toggle favorite called');
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (favorites.includes(id)) {
        favorites = favorites.filter(pokeId => pokeId !== id)
    } else {
        favorites.push(id)
    }
    localStorage.setItem('favorites', JSON.stringify(favorites))

}
const isPokemonInFavorites = (id: number):boolean => {
    if(typeof window ==='undefined') return false;
    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(id);
}
const getFavoritePokemons = ():number[]=>{
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}
export default {
    toggleFavorites,
    isPokemonInFavorites,
    getFavoritePokemons
}