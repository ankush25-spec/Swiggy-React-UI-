import React from 'react'
import { MdOutlineStar } from "react-icons/md";


const Cards = ({ value,width }) => {
    return (
        <div className={`px-2 md:${width} shrink-0 mb-3 cursor-pointer `}>
            <div className=' group h-45.5 rounded-[15px] overflow-hidden relative'>
                <img className='group-hover:scale-110 duration-150 object-cover w-full h-full' src={value.image} alt="img" />
                <div className='image-overlay absolute w-full h-full top-0 text-white flex items-end text-[16px] md:text-[25px] font-bold tracking-tighter px-3'>
                    {value.offer}
                </div>
            </div>
            <div className='mt-3 text-sm md:text-xl font-bold'>
                {value.title}
            </div>
            <div className='flex items-center gap-2'>
                <MdOutlineStar className='inline' /> {value.rating}
                <span> {value.time} </span>
            </div>
            <div className='text-slate-500'>
                {value.name}
                <br />
                {value.place}
            </div>
        </div>
    )
}

export default Cards