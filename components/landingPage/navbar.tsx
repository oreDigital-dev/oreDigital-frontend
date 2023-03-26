import React from 'react'
import { navbarLinks } from './menu'

function Navbar() {
  return (
    <div className='h-20 w-full bg-white shadow-md shadow-gray-200 flex justify-between items-center'>
      <div className='flex ml-4 '>
       <img src="image/logo.png" alt="logo" className='h-6' />
       <h1 className='font-bold'>Ore Digital</h1>
       </div>
       <div className='flex items-center gap-10'>
        {navbarLinks.map(nav =>(
          <ul>
            <li>{nav.label}</li>
          </ul>
        ))}
       </div>
        <div className='flex float-right'>
        <button className='h-12 w-32 rounded-3xl border-[1px] border-opacity-25 float-right mr-6 boorder-solid border-black'>Sign in</button>
        </div>
      
    </div>
  )
}

export default Navbar