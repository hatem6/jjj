import React from 'react'
import {IoReloadSharp} from "react-icons/io5"
import {AiFillStar,AiFillHeart,AiOutlineClose} from "react-icons/ai"
import {BsFillLightningChargeFill} from "react-icons/bs"
export default function Buttons() {
  return (
    <div className='flex mt-[75vh] justify-evenly'>
        <div className=' rounded-full border-[3px] p-2 border-gray-700'><IoReloadSharp size={45} color="gray" className='cursor-pointer' /></div>
        <div className=' rounded-full border-[3px] p-2 border-red-700'><AiOutlineClose size={45} color="red" className='cursor-pointer' /></div>
        <div className=' rounded-full border-[3px] p-2 border-blue-700'><AiFillStar size={45} color="blue" className='cursor-pointer' /></div>
        <div className=' rounded-full border-[3px] p-2 border-green-700'><AiFillHeart size={45} color="green" className='cursor-pointer' /></div>
        <div className=' rounded-full border-[3px] p-2 border-purple-700'><BsFillLightningChargeFill size={45} color="purple" className='cursor-pointer' /></div>
    </div>
  )
}
