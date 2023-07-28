import React, { useState, useEffect } from 'react'
import axios from 'axios'
import config from '../../../config'
import CategoryItem from './CategoryItem'

function CategoryList({onLoaded, onNavigate,id_supermercado}) {

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categorias, setCategorias] = useState([]);
  const [activePanel, setActivePanel] = useState(null);

  const fetchCategorias = async () => {
    try {
      const response = await axios.get(`${config.apiDomain}/categorias/${id_supermercado}`);
      setCategorias(response.data.categorias);
      setIsLoading(false);
      onLoaded()
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const handlePanelClick = (panelId) => {
    setActivePanel(panelId);
  };

  useEffect(() => {
    fetchCategorias();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleSubcategoriaClick = (subcategoriaId) => {
    onNavigate(subcategoriaId);
  }

  return (
    <>
      {categorias.map((item) => (
        <CategoryItem
          key={item.id_categoria}
          item={item}
          activePanel={activePanel}
          handlePanelClick={handlePanelClick}
          onSubcategoriaClick={handleSubcategoriaClick}
        />
      ))}
    </>
  )
}

export default CategoryList