import React from 'react'


function Skill({skill, experience}) {
   
  return (
    <>
         
        <article className='text-center py-6 sm:grow sm:text-left sm:w-1/3 lg:w-1/4'>
            <h2 className='text-3xl pb-2 font-bold sm:text-5xl'>{skill}</h2>
            <p className='text-lg'>{experience} Years Experience</p>
        </article>
         
    </>
  )
}

export default Skill