import React from 'react'
import { partners } from './menu'
function Partners() {
  return (
    <div>
        <h1 className='text-5xl font-bold text-center'>Our Partners</h1>
        <p className='text-center'>Who aren’t we working with ?</p>
        <div className='flex justify-evenly mt-6 mb-6'>
           {partners.map((partner) => (
            <img src={partner.path} alt="image" />
           ))}
        </div>
    </div>
  )
}

export default Partners