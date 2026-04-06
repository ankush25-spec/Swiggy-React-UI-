import React, { useContext, useState } from 'react'
import { repoContext } from './Repository';
import Cards from './Cards';
import { TiFilter } from "react-icons/ti";
import { MdOutlineSort } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";



const Delivery = () => {
    const [activeFilter, setactiveFilter] = useState(null)
    let section = [
        {
            name: 'Filter',
            logo: <TiFilter />
        },
        {
            name: 'Sort by',
            logo: <MdOutlineSort />

        },
        {
            name: 'Rating 4.0+',
            logo: ''

        },
        {
            name: 'Pure veg',
            logo: ''
        },
        {
            name: 'Offers',
            logo: <BiSolidOffer />
        },

    ]

    const { repoData } = useContext(repoContext)

    const filterdata = repoData.Deliveryrestaurants.filter((item) => {
        if (activeFilter === 'Pure veg') {
            return item.veg === true
        } else if (activeFilter === 'Rating 4.0+') {
            return item.rating > 4;
        } else if(activeFilter === 'Offers'){
            return item.offer !== ''
        }
        return true
    })


    return (
        <>
            <div className='max-w-300 mx-auto '>
                <div className='my-5 flex items-center justify-between'>
                    <div className='text-[18px] md:text-[22px] lg:text-[25px] font-bold'>Restaurants with online delivery in Chennai</div>
                </div>
            </div>
            <div className=' sticky top-0 py-4 z-50 bg-white  max-w-300 mx-auto '>
                <div className='hidden md:flex max-w-300 mx-auto gap-5 overflow-x-auto'>
                    {section.map((elem, idx) => {
                        return <div key={idx}
                            onClick={() => {
                                setactiveFilter(prev => prev === elem.name ? null : elem.name)
                            }}
                            className={`p-3 rounded-full shadow flex items-center justify-center gap-2 cursor-pointer ${activeFilter === elem.name ? 'bg-black text-white' : 'bg-white'}`}>{elem.logo} {elem.name}</div>
                    })}
                </div>
            </div>
            <div className='max-w-300 mx-auto min-h-screen mt-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                    {filterdata.map((elem, idx) => {
                        return <Cards key={idx} value={elem} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Delivery