import React from 'react'
import Video from '../components/home/Video'
import HomeMainText from '../components/home/HomeMainText'
import HomeFooter from '../components/home/HomeFooter'
const Home = () => {
  return (
    <div className='text-white'> 
      <div className='h-screen w-screen fixed'>
            <Video/>
      </div>
      <div className='relative w-screen h-screen flex flex-col justify-between overflow-hidden'>
          <HomeMainText/>
          <HomeFooter/>
      </div>
    </div>
  )
}

export default Home
