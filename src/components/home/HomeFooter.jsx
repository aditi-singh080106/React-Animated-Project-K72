import React from 'react'
import {Link} from 'react-router-dom'

const HomeFooter = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 '>
      <p className='absolute lg:w-[17vw]  right-10 bottom-36 font-[font1] leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.
      </p>
      <div className='lg:border-3 border-2 lg:h-30 flex items-center hover:border-[#d3fd50] hover:text-[#d3fd50] lg:px-10 px-5 pt-2 border-white rounded-full uppercase'>
        <Link className='text-[6.5vw] lg:mt-6' to='/projects'>Projets</Link>
      </div>
      <div className='lg:border-3 border-2 lg:h-30 flex items-center hover:border-[#d3fd50] hover:text-[#d3fd50] lg:px-10 px-5 pt-2 border-white rounded-full uppercase'>
        <Link className='text-[6.5vw] lg:mt-6' to='/agence'>Agence</Link>
      </div>
    </div>
  )
}

export default HomeFooter
