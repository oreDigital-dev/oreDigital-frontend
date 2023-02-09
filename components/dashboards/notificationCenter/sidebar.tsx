import React from 'react'
import { menu } from './sidebarMenu'
import {FiLogOut} from 'react-icons/fi'
function Sidebar() {
 
  return (
    <div className='h-screen w-[20%] '>
        <div className='ml-10 '>
        <h1 className=' text-2xl font-Outfit font-medium pt-[15%]'>OreDigital.</h1>
        </div>

        <div className='mt-[30%] ml-[16%]'>
        {menu.map((menuItem) => {
         return (
          // eslint-disable-next-line react/jsx-key
          <div className='mt-8'>
            <div className='flex'>
                <i className='text-2xl'>{menuItem.icon}</i>
                <p className='pl-4 font-outfit text-lg'>{menuItem.link}</p>
            </div> 
           
          </div>
         )
         
        })}
        </div>
         <div className='flex ml-[16%] items-end py-72'>
              <button className='flex  w-auto items-center  rounded-3xl bg-white pl-5 pr-5 h-10 shadow-md shadow-gray-200'>
                <FiLogOut className='text-[#FF5C5C]' />
                <p className='pl-2'>Log out</p>
              </button>
            </div>
    </div>

  )

}

export default Sidebar