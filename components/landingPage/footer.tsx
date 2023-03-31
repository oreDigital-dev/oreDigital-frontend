import React from 'react'
import { Facebook ,Twitter,Linkedin} from 'react-bootstrap-icons'
import { usefulLinks } from './menu'
import { support } from './menu'
function Footer() {
   
  return (
    <div className='w-full h-auto border-t-[1px] border-opacity-25 border-solid border-black flex justify-evenly mb-[7%]'>
        <div className='w-64'>
      <div className='flex mt-8'>
       <img src="image/logo.png" alt="logo" className='h-6 text-black opacity-75' />
       <h1 className='font-bold font-inkut Antiqua pl-2'>Ore Digital</h1>
       </div>
       <p className='pt-10'>Beware of risk, increase security and productivity</p>
       <div className='flex mt-6 gap-x-4'>

       <Facebook className='text-black  opacity-75 text-2xl' />
       <Twitter className='text-black  opacity-75 text-2xl' />
       <Linkedin className='text-black  opacity-75 text-2xl'/>
       </div>

       </div>
       <div className='mt-10'>
        <h1 className='font-bold'>Useful links</h1>
        <ul className='mt-6 flex flex-col gap-y-4'>
        {usefulLinks.map((usefulLink) => (
            <li>{usefulLink.label}</li>
        ))}
        </ul>
       </div>
       <div className='mt-10'>
        <h1 className='font-bold'>Support</h1>
        <ul className='mt-6 flex flex-col gap-y-4'>
            {support.map((supports) =>(
              <li>{supports.label}</li>
            ))}
        </ul>
       </div>
       <div  className='mt-10'>
        <h1 className='font-bold'>Contact Us</h1>
        <ul className='mt-6 flex flex-col gap-y-4'>
        <li >+234- 70-1449-8006</li>
        <li>info@murwiza.rw</li>
        <li>23, Mukamira , Musanze-Rubavu road</li>
        </ul>
       </div>
    </div>
  )
}

export default Footer