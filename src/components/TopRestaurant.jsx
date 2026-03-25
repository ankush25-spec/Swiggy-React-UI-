import React, { useRef, useContext } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Cards from './Cards'
import { repoContext } from './Repository';

const TopRestaurant = () => {


  const { repoData } = useContext(repoContext)
  const sliderRef = useRef(null);


  function leftSlide() {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth"
    });
  }


  function rightSlide() {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth"
    });
  }


  return (
    <div className='px-4 md:max-w-300 mx-auto '>
      <div className='flex items-center justify-between'>
        <div className='text-[18px] md:text-[22px] lg:text-[25px] font-bold'>Top restaurant chain in Chennnai</div>
        <div className='flex'>
          <div
            onClick={() => {
              leftSlide()
            }}
            className='cursor-pointer flex justify-center items-center w-8 h-8 md:w-9 md:h-9 bg-[#e2e2e7] rounded-full mx-2 '>
            <IoIosArrowBack />
          </div>
          <div
            onClick={() => {
              rightSlide()
            }}
            className='cursor-pointer flex justify-center items-center w-8 h-8 md:w-9 md:h-9 bg-[#e2e2e7] rounded-full mx-2'>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
      <div ref={sliderRef} className='flex overflow-x-auto scroll-smooth snap-x snap-mandatory mt-6 gap-3 md:gap-5'>
        {repoData.topRestaurant.map((elem, idx) => {
          return <Cards width='w-[70%] sm:w-[45%] md:w-68.25 lg:w-72 shrink-0' key={idx} value={elem} />
        })}
      </div>
      <hr className='my-10 border border-[#e2e2e7]'/>
    </div>
  )
}

export default TopRestaurant