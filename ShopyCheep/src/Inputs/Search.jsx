import React, { useState,useContext, useEffect } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import config from '../../config'
import MyDataContext from '../Context/MyDataContext'

export default function Search() {

  const[text, setText] = useState('')
  const { products, updateProducts } = useContext(MyDataContext)
  const navigate = useNavigate()
  const { valor, updateValor } = useContext(MyDataContext)

  const handleInputChange = (event) => {
    setText(event.target.value)
  }

  const apiFetch = async (valor=5) => {
    const response = await axios.get(`${config.apiDomain}/api/search/?q=${text}&order_by_price=true&max_results=${valor}`)
    updateProducts(response.data)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    apiFetch()
    if (window.location.pathname !== '/productos/view') { // Usar window.location.pathname
      navigate('/search/productos'); // Redirige a la ruta de vista de productos después de la búsqueda.
    }
  }

  useEffect(()=>{
    if(valor !== 5){
    console.log(`Se a modificaod el valor: ${valor}`)
    apiFetch(valor)
    }
  },[valor])


  return (
    <form className='h-full p-3 flex grow basis-0' onSubmit={handleSubmit}>
      <div className="flex grow justify-end bg-zinc-500 rounded-md focus:outline-none focus-within:ring focus-within:ring-white">
          <input value={text} onChange={handleInputChange} className='hidden-small block w-full bg-zinc-500  focus:outline-none p-5 rounded-l-lg' type="text" placeholder='Search...'/>
          <button type='submit' className=' p-1'>
              <MagnifyingGlassIcon className='h-full'/>
          </button>
      </div>
    </form>
  )
}
