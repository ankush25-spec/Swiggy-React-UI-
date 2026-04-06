import React from 'react'
import Category from '../components/Category'
import Header from '../components/Header'
import { IoIosSearch } from "react-icons/io";


const Search = () => {
    return (
        <div  >
            <Header />
            <div className='flex flex-col items-center max-w-200 mx-auto'>
                <div className='border-[1.5px] border-[#E2E2E7] rounded-sm px-3 flex items-center justify-center mt-10 w-full '>
                    <input
                        className='outline-none w-full h-12 text-black text-xl  rounded  '
                        type="text" placeholder='nachoooooooo' />
                    <IoIosSearch className='inline text-2xl ml-5' />
                </div>
            </div>
            <Category false={false} />
        </div>
    )
}

export default Search