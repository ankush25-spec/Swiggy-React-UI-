import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';




const OfferHeader = () => {
    return (
        <header className='px-3 md:px-6 py-3 shadow-xl sticky top-0 bg-white z-10 '>
            <div className='w-[80%] mx-auto flex items-center justify-between gap-4'>
                <div className='flex gap-4'>
                    <Link to={'/'}>
                        <img className='w-35' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_260/portal/m/seo/Logos/Swiggy/Swiggy%20logo-2.png" alt="" />
                    </Link>
                    <div className='border border-[#e2e2e7] h-8 '></div>
                    <div className=' flex items-center gap-3'>
                        <FaLocationArrow className='text-orange-600' />
                        <p>Setup your precision location</p>
                        <IoIosArrowDown className='text-orange-600' />
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='px-3 rounded-xl w-120 bg-gray-100  flex items-center justify-center'>
                        <input
                            className='outline-none w-full h-12 text-black text-[18px]  rounded  '
                            type="text" placeholder='Search for restaurant and food' />
                        <IoIosSearch className='inline text-2xl ml-5' />

                    </div>
                    <IoPersonCircle className='inline text-5xl' />
                </div>
            </div>
        </header>
    )
}

export default OfferHeader