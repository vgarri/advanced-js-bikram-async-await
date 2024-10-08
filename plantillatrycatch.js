
const fetchData = async () => {
  try {
    // Realizar la solicitud a la API
    const response = await fetch('https://rickandmortyapi.com/api/character/1');

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
