import React from 'react'
import Video from './Video'

const HomeMainText = () => {
  return (
    <div className='font-[font2] mt-80 lg:mt-0 pt-5 text-center '>
        
        <div className='lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw] flex items-center justify-center'>
            L'étincelle
        </div>
        <div className='lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw] flex items-start justify-center'>
            qui 
            <div className='h-[7vw] w-[17vw] -mt-3 rounded-full overflow-hidden ' style={{clipPath:'inset(0 0 0 0 round 999px)'}}>
                <Video/>
            </div>
              génère
        </div >
        <div className='lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw] flex items-center justify-center'>
            la créativité
        </div>
    </div>
  )
}

export default HomeMainText
