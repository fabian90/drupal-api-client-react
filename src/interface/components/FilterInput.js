import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes si deseas validar tipos

const FilterInput = ({ query, setQuery }) => {
  return (
    <div>
      <label htmlFor="filterInput">Filtrar por nombre:</label>
      <input
        id="filterInput" // Asocia la etiqueta con el input
        type="text"
        placeholder="Filtrar por nombre..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Filtro de nombre" // Mejora la accesibilidad
      />
    </div>
  );
};

// Agregar PropTypes para validar las propiedades
FilterInput.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default FilterInput;
