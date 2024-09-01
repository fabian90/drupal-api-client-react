// src/components/DataTable.js
import React, { useState, useEffect, useMemo } from 'react';
import { fetchData } from '../../application/useCases/fetchData';
import ReactPaginate from 'react-paginate';
import FilterInput from '../components/FilterInput'; // Asegúrate de que la ruta sea correcta
import styles from './styles/DataTable.module.css'; // Asegúrate de que la ruta sea correcta

const DataTable = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Estado para la cantidad de registros por página
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const loadAllData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (err) {
        setError('Error al cargar los datos'); // Manejo de errores
      }
    };
    loadAllData();
  }, []);

  // Uso de useMemo para mejorar el rendimiento del filtrado
  const filteredData = useMemo(() => {
    return data.filter(record =>
      record.nombre.toLowerCase().includes(query.toLowerCase())
    );
  }, [data, query]);

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentItems = filteredData.slice(offset, offset + itemsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  // Función para manejar el cambio en la selección de cantidad de registros por página
  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value)); // Actualiza el número de registros por página
    setCurrentPage(0); // Reinicia a la primera página al cambiar la cantidad de registros
  };

  return (
    <div className={styles.dataTable}>
      {error && <p className={styles.error}>{error}</p>} {/* Mensaje de error */}
      <FilterInput query={query} setQuery={setQuery} />
      
      {/* Selector para la cantidad de registros por página */}
      <div className={styles.itemsPerPage}>
        <label htmlFor="itemsPerPage">Registros por página:</label>
        <select id="itemsPerPage" value={itemsPerPage} onChange={handleItemsPerPageChange}>
          <option value={10}>10</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Apellido</th>
            <th>Nombre</th>
            <th>Tipo de Documento</th>
            <th>Número de Documento</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>País</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(record => (
            <tr key={record.numero_documento}>
              <td>{record.apellido}</td>
              <td>{record.nombre}</td>
              <td>{record.tipoDocumentoNombre}</td>
              <td>{record.numeroDocumento}</td>
              <td>{record.correo}</td>
              <td>{record.telefono}</td>
              <td>{record.paisNombre}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        previousLabel={'Anterior'}
        nextLabel={'Siguiente'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
      />
    </div>
  );
};

export default DataTable; // Exportación predeterminada
