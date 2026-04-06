import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FaOpencart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';



const Header = () => {
    const list = [
        {
            name: 'Search',
            logo: <IoSearch />,
            path: '/search'
        },
        {
            name: 'Offers',
            logo: <RiDiscountPercentLine />,
            sup: 'new',
            path: '/offers'
        },
        {
            name: 'Help',
            logo: <IoHelpBuoyOutline />,
            path: '/help'
        },
        {
            name: 'Sign In',
            logo: <IoPersonOutline />,
            path: '/sign-in'
        },
        {
            name: 'Cart',
            logo: <FaOpencart />,
            path: '/cart'
        }
    ]



    const [toggle, settoggle] = useState(false)

    function showsideMenu() {
        settoggle(true)
    }

    function hidesideMenu() {
        settoggle(false)
    }


    return (
        <>
            <div className='black-overlay w-full h-full fixed duration-500 z-70'
                onClick={hidesideMenu}
                style={{
                    opacity: toggle ? 1 : 0,
                    visibility: toggle ? 'visible' : 'hidden'
                }}>
                <div className='w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] bg-white h-full absolute duration-500 px-8 py-5 text-2xl font-bold'
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                    style={{
                        left: toggle ? '0%' : '-100%'
                    }}
                >
                    Hey, your location
                </div>
            </div>
            <header className='px-3 md:px-6 py-3 shadow-xl text-[#686b78] sticky top-0 bg-white z-10'>
                <div className='max-w-300 mx-auto flex items-center'>
                    <div className='w-20 md:w-25'>
                        <Link to={'/'}>
                            <img className='w-full' src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png" alt="" />
                        </Link>
                    </div>
                    <div className='ml-3 text-sm md:text-base truncate max-w-37.5 md:max-w-none'>
                        <span
                            className='font-bold border-b-[3px] border-black text-black hover:text-[#fc8019] hover:border-[#fc8019]'>Ratanada
                        </span>
                        <span className='hidden sm:inline'>
                            &nbsp;
                            Jodhpur, Rajasthtan, India &nbsp;
                        </span>
                        <IoIosArrowDown
                            onClick={() => {
                                showsideMenu()
                            }} fontSize={25} className='font-bold inline text-[0.9rem] text-[#fc8019] cursor-pointer'
                        />
                    </div>
                    <div className='ml-auto lg:hidden'>
                        <RxHamburgerMenu className='text-2xl cursor-pointer' />
                    </div>

                    <nav className='hidden lg:flex list-none gap-10 ml-auto font-semibold text-[16px] xl:text-[18px]'>

                        {list.map((elem, idx) => {
                            console.log(elem.path)
                            return (
                                <Link to={elem.path}>
                                    <li key={idx} className='cursor-pointer flex items-center gap-2 hover:text-[#fc8019]'>
                                        {elem.logo} {elem.name} <sup>{elem.sup} </sup>
                                    </li>
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header