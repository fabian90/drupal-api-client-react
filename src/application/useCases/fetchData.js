import { getRecords } from '../../infrastructure/api/drupalApi';
import Record from '../../domain/entities/Record';

export const fetchData = async () => {
  try {
    const data = await getRecords();
    // Verifica que la respuesta sea un array antes de mapear
    if (!Array.isArray(data)) {
      throw new Error('La respuesta no es un array');
    }
    return data.map(record => new Record(record));
  } catch (error) {
    console.error('Error al cargar los datos:', error);
    throw error; // Lanza el error para que pueda ser manejado por el componente que lo llame
  }
};