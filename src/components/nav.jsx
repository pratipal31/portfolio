import {AiOutlineClose} from 'react-icons/ai';
import { useState } from 'react';
import {HiMenuAlt1} from 'react-icons/hi'



const Nav = () => {

const [toggle, setToggle]=useState(false);

function openMenu()
{
  setToggle(true);
}

function closeMenu()
{
  setToggle(false);
}

  return (
      <>
      <div className="flex items-center justify-between p-7 lg:flex-row">
        <div>
          <a href="#" className='text-white font-mono text-3xl tracking-wider flex items-center'>PD</a>
        </div>
        <div className="space-x-4">
          <div className="ssm:hidden lg:block space-2">
            <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Home</a>
            <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">About Me</a>
            <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Skills</a>
            <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Workflow</a>
          </div>
          <div className='ssm: block lg:hidden'>
            {toggle? (<AiOutlineClose onClick={closeMenu} size={30} className='text-white '/>):(<HiMenuAlt1 onClick={openMenu} size={30} className='text-white '/>)}
            
          </div>
        </div>
      </div>


      <div className='ssm:block lg:hidden'>
        {toggle? (<div  className='flex justify-between ml-10'>
          <ul>
            <li className=' text-white hover:bg-indigo-800 mb-2 text-xl '>Home</li>
            <li className=' text-white hover:bg-indigo-800 mb-2 text-xl' >About Me</li>
            <li className=' text-white hover:bg-indigo-800 mb-2 text-xl' >Skills</li>
            <li className=' text-white hover:bg-indigo-800 mb-2 text-xl'>Workflow</li>
          </ul>
        </div>
      ):(
        <div></div>
      )}
      </div>
      
      </>
  )
}

export default Nav
