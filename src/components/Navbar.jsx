import React from 'react'
import { useContext } from 'react'
import { MyStore } from '../context/Mycontext'

export const Navbar = () => {

let {setToogle} = useContext(MyStore);



  return (
    <div className='w-full bg-zinc-800 flex text-white justify-between px-20 py-4 text-3xl items-center'>
        <h1>Logo</h1>
        <button 
        onClick={() => setToogle(prev => !prev)}
        className='bg-blue-600 rounded-md p-4 hover:scale-96 cursor-pointer '

        >My cart
        </button>
    </div>
  )
}
