import React, {useEffect,useState} from 'react'

import CardPlaces from './CardPlaces'
import axios from 'axios'
import config from '../../config'

function Places() {


  const [places,setPlaces] = useState([])
  const [error, setError] = useState(null)

  async function fetchPlaces(){
      try{
          const response = await axios.get(`${config.apiDomain}/places/`)
          setPlaces(response.data.places)
      }catch{
          setError(error.message)
      }

  }

  useEffect(() => {
      fetchPlaces()
  },[])



  return (
    <>
    <div className="p-8 grid grid-cols-3 gap-10">
    {places.map((item,index) => (
        <CardPlaces key={index} id_place={item.id_place} title={item.titulo} imagen={item.imagen} desc={item.descripcion}  />
      ))}
    </div>
    </>
  )
}

export default Places