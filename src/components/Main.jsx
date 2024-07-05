import React from 'react'
import Skill from './mainComponents/Skill'
import data from '../assets/data/data.json'


function Main() {
  return (
    <main>
        <div className='container mx-auto  px-4  sm:px-15 lg:px-32'>
          <section className='flex flex-col flex-1 border-t-[1.5px] border-t-gray items-center gap-4 py-10 flex-wrap sm:flex-row  justify-between'>
            {data.skills.map((skill)=> (
              <Skill
                key={skill.name}
                skill={skill.name}
                experience={skill.experienceYrs}
              ></Skill>
            ))}
            
          </section>
        </div>
    </main>
  )
}

export default Main