//DESARROLLA AQUI TUS SOLUCIONES
/* const fetchData = async () => {
    try {
      // Realizar la solicitud a la API
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
      // Verificar si la respuesta es exitosa
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
      }
      // Si la respuesta es exitosa, procesar los datos
      const data = await response.json();
      console.log('Personaje:', data.name);
    } catch (error) {
      // Manejar errores de red o del servidor
      console.error('Hubo un problema con la solicitud:', error.message);
    }
  };
  // Llamar a la función para hacer la solicitud
  fetchData(); */


/* **Antes de empezar, lee la documentación de la API para comprender como funcionan los endpoints**


Ejercicio 1.- Declara una función **getRandomPokemon** que retorne un pokemon aleatorio.

Ejercicio 2.- Declara una funcion **getImageAndName** que retorne el nombre y la URL de la 
imagen de un pokemon => (return {img, name})

Ejercicio 3.- Declara una funcion **printImageAndName** que retorne el string 
necesario para pintar la imagen y el nombre del pokemon en el DOM de la siguiente forma:

```html
<section>
    <img src="url de imagen" alt="nombre del pokemon">
    <h1>Nombre del pokemon</h1>
</section>
```
*/
//Ejercicio 1
// async function getRandomPokemon() {
//     let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 177)}`)
//     let data = await response.json();

//     return data https://pokeapi.co/api/v2/pokemon/

// }
async function getRandomPokemon() {
  try {
    // Realizar la solicitud a la API https://pokeapi.co/api/v2/pokemon-species/
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151)}`)
    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
    }
    // Si la respuesta es exitosa, procesar los datos
    let data = await response.json();
    return data
  }
  catch (error) {
    // Manejar errores de red o del servidor
    console.error('Hubo un problema con la solicitud:', error.message);
  }
}
//Ejercicio 2
async function getImageAndName() {
  try {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    let data = await response.json();
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
    }
    let name = data.name;
    let img = data.sprites.front_default;
    return { name, img }
  } catch (error) {
    // Manejar errores de red o del servidor
    console.error('Hubo un problema con la solicitud:', error.message);
  }

}

//Ejercicio 3
async function printImageAndName() {
  try {
    let data = await getImageAndName();// no se pone el if pq no se ha hecho ningun fetch
    return `
    <section>
        <img src="${data.img}" alt="${data.name}">
        <h1>${data.name}n</h1>
    </section>
    `
  } catch (error) {
    // Manejar errores de red o del servidor
    console.error('Hubo un problema con la solicitud:', error.message);
  }
}

//Ejercicio 4
//Declara una función **getRandomDogImage** que retorne 
//la url de la imagen de un perro aleatorio
async function getRandomDogImage() {
  try {
    let response = await fetch("https://dog.ceo/api/breeds/image/random");
    let data = await response.json();
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
    }
    return data.message;
  } catch (error) {
    // Manejar errores de red o del servidor
    console.error('Hubo un problema con la solicitud:', error.message);
  }
}
//Ejercicio 5
async function getRandomPokemonImage() {
  try {
    let response = await getRandomPokemon();
    let data = await response; // aqui no hacemos .json pq no se ha hecho ningun fetch
    return data.sprites.front_default || "assets/defaultimage.jpg";
  } catch (error) {
    // Manejar errores de red o del servidor
    console.error('Hubo un problema con la solicitud:', error.message);
  }

}
//
//Ejercicio 6.- Declara una función **printPugVsPikachu** que 
//pinte la batalla entre "Pug" y "Pikachu" (no se testea)
async function printPugVsPikachu() {
  try {
    let pug = await fetch("https://dog.ceo/api/breed/pug/images/random");
    let pugdata = await pug.json();
    let pikachu = await getImageAndName();
    let arrFotos = [pugdata.message, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2ec970f4-1706-4915-9a93-41f3d9c8202c/dehetv9-efad5ead-a1c7-4ef7-94d4-0c758e7eddb9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJlYzk3MGY0LTE3MDYtNDkxNS05YTkzLTQxZjNkOWM4MjAyY1wvZGVoZXR2OS1lZmFkNWVhZC1hMWM3LTRlZjctOTRkNC0wYzc1OGU3ZWRkYjkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0QmcHDQ3cnXw7IEIRDrSGpOCb2657FSs0bOQWL0XM34", pikachu.img];


    // pintar en el dom
    let section = document.createElement("section");
    document.body.appendChild(section);
    for (let i = 0; i < arrFotos.length; i++) {
      let img = document.createElement("img")
      img.src = arrFotos[i];
      section.appendChild(img)

    }
  } catch (error) {
    // Manejar errores de red o del servidor
    console.error('Hubo un problema con la solicitud:', error.message);
  }
}
printPugVsPikachu();

//Ejercicio 7.- Declara una función **getRandomCharacter** que retorne un personaje aleatorio.

async function getRandomCharacter() {
  try {
    let response = await fetch(`https://rickandmortyapi.com/api/character/${Math.floor(Math.random() * 827)}`)

    let data = await response.json();
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
    }
    return data
  } catch (error) {
    // Manejar errores de red o del servidor
    console.error('Hubo un problema con la solicitud:', error.message);
  }
}
//Ejercicio 8.-
/* Ejercicio 8.- Declara una función **getRandomCharacterInfo** que retorne de un personaje su imagen, nombre, 
episodios en los que aparece y el nombre del primer episodio en el que aparece + fecha de estreno, tendrás que 
hacer otro fetch para llegar a los ultimos 
datos. Formato de retorno => (return {img, name, episodes, firstEpisode, dateEpisode})*/

async function getRandomCharacterInfo(){
  try {
    let data = await getRandomCharacter();
    
    let img = data.image;
    let name = data.name;
    let episodes = data.episode;
    let episodesLength = episodes.length;
    let firstEpisodeUrl = episodes[0];
    let datosPrimerEpisodio = await fetch(firstEpisodeUrl);
    let datosFecha = await datosPrimerEpisodio.json();
    let firstEpisode = datosFecha.name;
    
    let dateEpisode = datosFecha.air_date;
    console.log(dateEpisode)
    
  
    
    return {img, name, episodes, dateEpisode, firstEpisode, episodesLength}

  } catch (error) {
    // Manejar errores de red o del servidor
    console.error('Hubo un problema con la solicitud:', error.message);
  }


  
}


