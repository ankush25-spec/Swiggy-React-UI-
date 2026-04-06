import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Offers from './Pages/Offers'
import Search from './Pages/Search'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/offers' element={<Offers />} />
      <Route path='/search' element={<Search />} />

    </Routes>

    </>
  )
}

export default App