import React, { useState, useEffect,useContext } from 'react'

import axios from 'axios'
import config from '../../../config'
import MyDataContext from '../../Context/MyDataContext'


function ProductsView({category,id_supermercado}) {

  const { products, updateProducts } = useContext(MyDataContext)
    const [error, setError] = useState(null)

    async function fetchProducts(category){
        try{
            const response = await axios.get(`${config.apiDomain}/dia/productos/subcategoria/${category}/`)
            updateProducts(response.data.productos)
        }catch{
            setError(error.message)
        }

    }

    useEffect(() => {
      if (window.location.pathname !== '/search/productos') {
        fetchProducts(category)
        console.log(`Categoria Actualizada ${category}`)
      }
    },[category])

    return (
        <div className="bg-transparent">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <a key={product.id_producto} href='#' className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.id_supermercado === 2 ? 'https://' + product.imagen : 'https://www.dia.es/' + product.imagen}
                      alt={product.titulo}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-200">{product.titulo}</h3>
                <div className='flex p-4 justify-center gap-5'>
                  <p className="text-lg font-medium self-center">{product.precio}€</p>
                { product.img_supermercado  && (
                <img className="bg-white rounded-md  p-1 h-8" src={product.img_supermercado} ></img>
                )}
                </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )
}

export default ProductsView