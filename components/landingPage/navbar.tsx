import React from 'react'
import { navbarLinks } from './menu'

function Navbar() {
  return (
    <div className='h-20 w-full bg-white shadow-md shadow-gray-200 flex justify-between items-center'>
      <div className='flex ml-4 '>
       <img src="image/logo.png" alt="logo" className='h-6' />
       <h1 className='font-bolder font-inknut-antiqua'>Ore Digital</h1>
       </div>
       <div className='flex items-center gap-10'>
        {navbarLinks.map(nav =>(
          <ul>
            <li className='font-general-sans'>{nav.label}</li>
          </ul>
        ))}
       </div>
        <div className='flex float-right'>
        <button className='h-12 w-32 rounded-3xl  float-right mr-6 bg-[#5A3FFF] text-white font-general-sans'>Sign in</button>
        </div>
      
    </div>
  )
}

export default Navbar