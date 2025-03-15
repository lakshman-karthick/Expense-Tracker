import React from 'react'
import { Button } from '../FormElements'

export function Navbar() {
  return (
    <div className='bg-black w-1/6'>
        <div className='flex flex-col justify-center items-center'>
            <div className='font-extrabold bg-black border-white border-2 p-5 mt-5 w-full text-center cursor-pointer rounded-2xl'>Month Name</div>
            <div className='font-extrabold bg-gray-800 p-5 mt-5 w-full text-center cursor-pointer rounded-2xl'>Daily</div>
            <div className='font-extrabold bg-gray-800 p-5 mt-5 w-full text-center cursor-pointer rounded-2xl'>Budget Plan</div>
            <div className='font-extrabold bg-gray-800 p-5 mt-5 w-full text-center cursor-pointer rounded-2xl'>Charts</div>
            <div className='font-extrabold bg-gray-800 p-5 mt-5 w-full text-center cursor-pointer rounded-2xl'>Download Excel</div>
            <div className='font-extrabold bg-gray-800 p-5 mt-5 w-full text-center cursor-pointer rounded-2xl'>Notes</div>
        </div>
    </div>
  )
}

