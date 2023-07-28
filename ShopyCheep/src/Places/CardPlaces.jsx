import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function CardPlaces({id_place, title, imagen, desc}) {
  return (
    <>
    <div className='bg-zinc-500 rounded-md shadow-xl shadow-neutral-700'>
        <div className='bg-white rounded-t-md '>
            <img className='p-3' src={imagen} alt="Img Dia" />
        </div>
        <h1 className='pt-2 text-xl font-semibold'>{title}</h1>
        <p className='p-5 text-justify'>{desc}</p>
        <div className='m-4 '>
          <Link to={ `/productos/${title.toLowerCase()}`}  className='text-lg font-semibold p-3 m-t bg-gray-800 rounded-full'>Ver productos</Link>
        </div>
    </div>
    </>
  )
}

CardPlaces.propTypes = {
  title: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  // Define las validaciones de las props según tus necesidades
};

export default CardPlaces