const api_url = 'https://pokeapi.co/api/v2/pokemon/'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

const getPokemon = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    showPokemon(data);
}

getPokemon(api_url + "1")


const showPokemon = (data) => {
    const {id, name, sprites, base_experience, types } = data
    console.log(id, name, sprites, base_experience, types);
}