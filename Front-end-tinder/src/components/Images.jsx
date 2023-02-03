import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import axios from "axios"
export default function Images() {
  const [data,setData]=useState([])
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
      }
      
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }
      useEffect(()=>{
        const handleapi=async()=>{
          try{
            const res= await axios.get("http://localhost:9000/data")
            setData(res.data)
          }
          catch(err){
            console.log(err)
          }
        }
        handleapi()
      },[])
  return (
    <div>
        <div className=' lg:ml-[500px] md:ml-[350px] sm:ml-[200px] ml-[20px] mt-[50px]'>
            {data.map(person=>{
                return (
                    <TinderCard key={person._id} onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['up', 'down']}>
                    <div className=' absolute overflow-hidden rounded-lg ' >
                        <img src={person.image} alt="" className=" h-[390px] w-[340px] object-fill "/>
                        <h2 className='absolute bottom-3 font-bold text-white left-2' >{person.name}</h2>
                    </div>
                    </TinderCard>
                )
            })}
        </div>
    </div>
  )
}
