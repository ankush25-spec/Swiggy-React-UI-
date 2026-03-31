import React, { useContext, useRef } from 'react'
import { IoIosArrowBack, IoIosArrowForward, } from "react-icons/io";
import { repoContext } from './Repository';


const Category = () => {
    const sliderRef = useRef(null);
    const { repoData } = useContext(repoContext)

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
        <div className='max-w-300 mx-auto px-4'>
            <div className='flex items-center justify-between mt-8'>
                <div className='text-[18px] md:text-[22px] lg:text-[25px] font-bold'>What's on your mind?</div>
                <div className='flex'>
                    <div
                        onClick={() => {
                            leftSlide()
                        }}
                        className='cursor-pointer flex justify-center items-center w-7.5 h-7.5 bg-[#e2e2e7] rounded-full mx-2 '>
                        <IoIosArrowBack />
                    </div>
                    <div
                        onClick={() => {
                            rightSlide()
                        }}
                        className='cursor-pointer flex justify-center items-center w-7.5 h-7.5 bg-[#e2e2e7] rounded-full mx-2'>
                        <IoIosArrowForward />
                    </div>
                </div>
            </div>
            <div ref={sliderRef} className='flex overflow-x-auto scroll-smooth snap-x snap-mandatory'>
                {repoData.categorySlider.map((elem, idx) => {
                    return (
                        <div
                            key={idx} className='w-25 sm:w-30 lg:w-37.5 shrink-0 snap-start'>
                            <img className='' src={elem.link} alt="img" />
                        </div>
                    )
                })}
            </div>
            <hr className='my-5 md:my-10 lg:my-15 border border-[#e2e2e7]' />
        </div>
    )
}

export default Category






