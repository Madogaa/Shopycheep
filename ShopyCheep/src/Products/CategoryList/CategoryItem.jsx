import React, { useState, useEffect } from 'react'
import axios from 'axios'
import config from '../../../config'
import PropTypes from 'prop-types';

function CategoryItem({item, activePanel, handlePanelClick, onSubcategoriaClick}) {

    const [subcategorias, setSubcategorias] = useState([]);
    const [isLoadingSubcategorias, setIsLoadingSubcategorias] = useState(false);

    const fetchSubcategorias = async (categoriaId) => {
      setIsLoadingSubcategorias(true);
      try {
        const response = await axios.get(`${config.apiDomain}/api/categorias/${categoriaId}/subcategorias`);
        setSubcategorias(response.data.subcategorias);
      } catch (error) {
        console.error(error);
      }
      setIsLoadingSubcategorias(false);
    };

    const handleClick = async () => {
      if (item.id_categoria === activePanel) {
        handlePanelClick(null);
      } else {
        handlePanelClick(item.id_categoria);
        await fetchSubcategorias(item.id_categoria);
      }
    };

    const handleSubcategoriaClick = (subcategoriaId) => {
      onSubcategoriaClick(subcategoriaId);
    }

    return (
      <div className='pb-2' key={item.id_categoria}>
        <h2>
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={handleClick}
            aria-expanded={item.id_categoria === activePanel}
            aria-controls={`accordion-collapse-body-${item.id}`}
          >
            <span>{item.titulo.charAt(0).toUpperCase() + item.titulo.slice(1)}</span>
            <svg
              className={`w-3 h-3 rotate-180 shrink-0 ${item.id_categoria === activePanel ? 'rotate-0' : ''}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </h2>
        {item.id_categoria === activePanel && !isLoadingSubcategorias && (
          <div id={`accordion-collapse-body-${item.id_categoria}`} className="p-4 bg-gray-600 py-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <div className="mb-3 text-gray-500 dark:text-gray-400 ">
              {subcategorias.map((subcategoria) => (
                <div key={subcategoria.id_subcategoria} className='bg-gray-600 rounded-full text-left mb-3'>
                  <button onClick={() => handleSubcategoriaClick(subcategoria.id_subcategoria)} className='max-w-xs pl-7 pr-3 py-2 text-left'>{subcategoria.titulo.charAt(0).toUpperCase() + subcategoria.titulo.slice(1)}</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )

}

CategoryItem.propTypes = {
    item: PropTypes.object.isRequired,
    activePanel: PropTypes.number,
    handlePanelClick: PropTypes.func.isRequired,
  };


export default CategoryItem