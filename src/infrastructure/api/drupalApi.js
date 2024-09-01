// import axios from 'axios';
// export const getRecords = async () => {
//   try {
//     const response = await axios.get(API_URL);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// };


export const getRecords = async () => {
  try {
    // Imprimir la URL de la API para depuración
    const apiUrl = "http://localhost:8888/drupal_project/web/API/formulario";
    console.log('Fetching data from:', apiUrl);

    const response = await fetch(apiUrl);

    // Verificar si la respuesta es correcta
    if (!response.ok) {
      throw new Error('Error al obtener los registros');
    }

    // Verificar el tipo de contenido de la respuesta
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json(); // Devolver JSON si es válido
    } else {
      const text = await response.text();
      console.error('Respuesta no es JSON:', text);
      throw new Error('El contenido no es un JSON válido');
    }
  } catch (error) {
    // Manejar cualquier error que ocurra
    console.error('Error al cargar los datos:', error);
    throw error;
  }
};