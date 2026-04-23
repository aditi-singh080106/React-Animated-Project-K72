import React from 'react'

const Card = (props) => {
  return (
    <>
        <div className='h-full lg:w-1/2 w-full group relative  transition-all rounded-none hover:rounded-[70px] overflow-hidden'>
                <img className='h-full w-full lg:object-cover object-center ' src={props.imgs.img1} alt="" />
                <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 h-full w-full bg-black/50 flex items-center justify-center'>
                    <h2 className='uppercase pt-3 px-3 font-extrabold lg:text-6xl text-3xl font-[font1] border-4 border-white rounded-full'>vior le projet</h2>
                </div>
            </div>

            <div className='h-full lg:w-1/2 w-full group relative  transition-all rounded-none hover:rounded-[70px] overflow-hidden'>
                <img className='h-full w-full object-cover ' src={props.imgs.img2} alt="" />
                <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 h-full w-full bg-black/50 flex items-center justify-center'>
                    <h2 className='uppercase pt-3 px-3 font-extrabold lg:text-6xl text-3xl font-[font1] border-4 border-white rounded-full'>vior le projet</h2>
                </div>
            </div>
    </>
)
}

export default Card
