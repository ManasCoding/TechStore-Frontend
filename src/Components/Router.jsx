import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import Wishlist from './Wishlist'
import Cart from './Cart'
import Landing from './Landing'
import Admin from './Admin'
const Router = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/men' element={<Home />} />
          <Route path='/women' element={<Home />} />
          <Route path='/kids' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
    </div>
  )
}

export default Router