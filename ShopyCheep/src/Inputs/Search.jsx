import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'



export default function Search() {
  return (
    <div className='h-full p-3 flex grow basis-0'>
        <div className="flex grow justify-end bg-zinc-500 rounded-md focus:outline-none focus-within:ring focus-within:ring-white">
            <input className='hidden-small block w-full bg-zinc-500 h-full focus:outline-none p-5  rounded-l-lg' type="text" placeholder='Search...'/>
            <button className=' p-1'>
                <MagnifyingGlassIcon className='h-full'/>
            </button>
        </div>
    </div>
  )
}
