
import React, {useRef,useEffect,useState} from 'react'

import './Products.css'
import CategoryList from './CategoryList/CategoryList'
import ProductsView from './ProductsView/ProductsView'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import config from '../../config'

function Products(props) {
  const menuRef = useRef(null);
  const contentRef = useRef(null);
  const [category,setCategory] = useState(1)
  const {supermercado} = useParams()
  const [id_supermercado, setId_supermercado] = useState()
  const [categoryListLoaded, setCategoryListLoaded] = useState(false);


  const handleCategoryListLoaded = () => {
    setCategoryListLoaded(true);
  };

  const handleNavigate = (category) => {
    console.log('Categoria:' + category)
    setCategory(category)
  }

  useEffect(() => {
    const handleResize = () => {
      const menuHeight = menuRef.current.clientHeight;
      console.log('Menu Loaded' + menuHeight);
      contentRef.current.style.height = `${menuHeight}px`;
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Llamada inicial para ajustar la altura al cargar el componente

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [categoryListLoaded]);

  useEffect(() => {
    // Efecto para obtener el id_supermercado una vez al montar el componente
    const getSuperMarketId = async () => {
      const response = await axios.get(`${config.apiDomain}/obtener-id-supermercado/${supermercado}/`);
      setId_supermercado(response.data.id_supermercado);
      setCategory(response.data.id_supermercado === 1 ? 1: 185)
    };
    getSuperMarketId()
    // Solo se ejecuta una vez al montar el componente
  }, []);

      return (
        <div className="grid grid-cols-12">
          <div ref={menuRef} className="menu pt-4 col-span-4 md:col-span-3">
          {id_supermercado && (<CategoryList id_supermercado={id_supermercado} onNavigate={handleNavigate}  onLoaded={handleCategoryListLoaded} />)}
          </div>
          <div ref={contentRef} className='min-h-screen content pt-4 inline-block col-span-8 md:col-span-9 overflow-auto custom-scroll'>
          {id_supermercado && (<ProductsView id_supermercado={id_supermercado} category={category} />)}
          </div>
        </div>
      )
}

export default Products