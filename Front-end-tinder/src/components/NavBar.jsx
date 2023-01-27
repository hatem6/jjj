import React from 'react'
import {BsPerson} from 'react-icons/bs'
import {TbMessages} from "react-icons/tb"
import tinder from './../assets/Tinder_(app)-Flame-Logo.wine.svg'
export default function NavBar() {
  return (
    <div className='flex justify-between mx-16 mt-2 '>
        <BsPerson  size={35}  className=" cursor-pointer mt-2"/>
        <img src={tinder} alt="" className="w-[85px] mt-0"/>
        <TbMessages  size={35} className=" cursor-pointer mt-2 " />
    </div>
  )
}
