import React from 'react'

const Restaurantoffer = () => {
  return (
    <div className='w-[80%] mx-auto mt-10'>
      <div className='w-full h-95 relative '>
        <img
          className='w-full h-full'
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/DO_collectionBanner.png" alt="Dineout Image" />
        <div className='absolute w-full h-full top-0 text-white flex items-end text-2xl font-bold text-[45px] p-9'><h2>Restaurants With Great Offers <br />Near Me</h2></div>
      </div>
      <div className='mt-10 flex gap-5 px-2 text-xl font-normal border-b-2 border-[#dadada]'>
        <h2 className=' pb-3'>Order online</h2>
        <h2 className=' border-b-4 border-orange-500 font-bold'>Dine Out</h2>
      </div>
    </div>
  )
}

export default Restaurantoffer