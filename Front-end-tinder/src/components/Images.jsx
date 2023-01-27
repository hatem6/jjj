import React from 'react'
import TinderCard from 'react-tinder-card'
import eleon from "./../assets/Elon_Musk_Royal_Society_(crop2).jpg"
import mark from "./../assets/Mark_Zuckerberg_F8_2018_Keynote_(cropped).jpg"
export default function Images() {
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
      }
      
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }
      const profiles=[
        {id:1,name:"Eleon Musk",image:eleon},
        {id:2,name:"Mark zuckerberg",image:mark},
      ]
  return (
    <div>
        <div className=' block ml-[38%] mt-[50px]'>
            {profiles.map(person=>{
                return (
                    <TinderCard key={person.id} onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['up', 'down']}>
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
