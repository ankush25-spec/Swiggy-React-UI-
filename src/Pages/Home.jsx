import React from 'react'
import Header from '../components/Header'
import Category from '../components/Category'
import TopRestaurant from '../components/TopRestaurant'
import Delivery from '../components/Delivery'

const Home = () => {
    return (
        <div>
            <Header />
            <Category lineState={true}/>
            <TopRestaurant />
            <Delivery />
        </div>
    )
}

export default Home