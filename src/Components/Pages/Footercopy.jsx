import React from 'react'

const Footer = () => {
  return (
    <div className='w-full sm:h-full bg-black text-white py-25 sm:py-10 relative'>
        <div>
            <video className='w-full h-full absolute top-[18%] sm:top-[5%] left-[25%] sm:ml-[15%] w-[9rem] sm:w-[50rem] h-[6rem] sm:h-[28rem]' autoPlay loop muted src="https://www.exoape.com/video/video-6.mp4"></video>
        </div>
        <div className='px-10 sm:px-28 flex flex-col justify-between gap-10'>
            <div>
                <h1 className='text-6xl sm:text-[10rem]'>Our</h1>
                <h1 className='text-6xl sm:text-[10rem]'>Story</h1>
            </div>
            <p className='sm:text-2xl mt-10'>The story behind Tech Store is one of exploration, creativity and curiosity.</p>
        </div>
    </div>
  )
}

export default Footer