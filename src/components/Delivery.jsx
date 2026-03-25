import React, { useContext } from 'react'
import { repoContext } from './Repository';
import Cards from './Cards';
import { TiFilter } from "react-icons/ti";
import { MdOutlineSort } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";



const Delivery = () => {

    let section = [
        {
            name:'Filter',
            logo:<TiFilter />
        },
        {
            name:'Sort by',
            logo:<MdOutlineSort />

        },
        {
            name:'Rating 4.0+',
            logo:''

        },
        {
            name:'Pure veg',
            logo:''

        },
        {
            name:'Offers',
            logo:<BiSolidOffer />


        },

    ]

    const { repoData } = useContext(repoContext)
    return (
        <>
            <div className='max-w-300 mx-auto '>
                <div className='my-5 flex items-center justify-between'>
                    <div className='text-[18px] md:text-[22px] lg:text-[25px] font-bold'>Restaurants with online delivery in Chennai</div>
                </div>
                
                    <div className='hidden md:flex max-w-300 mx-auto my-4 gap-5 mb-8 sticky top-0 py-4 z-35 bg-white overflow-x-auto'>
                       {section.map((elem,idx)=>{
                        return <div key={idx} className='p-3 rounded-full shadow flex items-center justify-center gap-2 cursor-pointer'>{elem.logo} {elem.name}</div>
                       })}
                    </div>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                  {repoData.Deliveryrestaurants.map((elem,idx)=>{
                    return <Cards key={idx} value={elem} />
                  })}
                </div>
            </div>
        </>
    )
}

export default Delivery