//Ejercicio 1.- Declara una función **getRandomPokemon** que retorne un pokemon aleatorio.

async function getRandomPokemon () {

    let random = Math.floor(Math.random() * 151)
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    let pokemon = await response.json()
    console.log(pokemon);

    return pokemon
}


//Ejercicio 2.- Declara una funcion **getImageAndName** que retorne el nombre y la URL de la imagen de un pokemon => (return {img, name})

async function getImageAndName() {
    let random = Math.floor(Math.random() * 151)
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    let pokemon = await response.json()
    let name = pokemon.name
    let img = pokemon.sprites.front_default

    return {img, name}
}

//Ejercicio 3.- Declara una funcion **printImageAndName** que retorne el string necesario para pintar la imagen y el nombre del pokemon en el DOM

async function printImageAndName() {
    let random = Math.floor(Math.random() * 151) + 1
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    let pokemon = await response.json()
    let name = pokemon.name
    let img = pokemon.sprites.front_default

    return `<section>
    <img src="${img}" alt="${name}>
    <h1>${name}</h1>
    </section>`
}

//Ejercicio 4.- Declara una función **getRandomDogImage** que retorne la url de la imagen de un perro aleatorio


async function getRandomDogImage(){
    let response = await fetch('https://dog.ceo/api/breeds/image/random')
    let data = await response.json()
    let img = data.message

    return img
}


// Ejercicio 5.- Declara una función **getRandomPokemonImage** que retorne la url de la imagen de un pokemon aleatorio.

async function getRandomPokemonImage() {
    let random = Math.floor(Math.random() * 151)
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    let pokemon = await response.json()
    let img = pokemon.sprites.front_default

    return img
}

// Ejercicio 7.- Declara una función **getRandomCharacter** que retorne un personaje aleatorio.

async function getRandomCharacter() {
    let random = Math.floor(Math.random() * 100) + 1
    let response = await fetch(`https://rickandmortyapi.com/api/character/${random}`) 
    let character = await response.json()
    console.log(character);

    return character
}

//Ejercicio 8.- Declara una función **getRandomCharacterInfo** que retorne su imagen, nombre, episodios en los que aparece 
// y el nombre del primer episodio + fecha en el que aparece

async function getRandomCharacterInfo() {
    let random = Math.floor(Math.random() * 100) + 1
    let response = await fetch(`https://rickandmortyapi.com/api/character/1`) 
    let character = await response.json()
    let img = character.image
    let name = character.name
    let episodes = character.episode

    let episodeInfo = await fetch(character.episode[0]) 

    let dataEpisode = await episodeInfo.json()

    let firstEpisode = dataEpisode.name

    let dateEpisode = dataEpisode.air_date

    return {img, name, episodes, firstEpisode, dateEpisode}
}

getRandomCharacterInfo()