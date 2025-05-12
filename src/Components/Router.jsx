import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import Wishlist from './Wishlist'
import Cart from './Cart'
import Landing from './Landing'
import Admin from './Admin'
import Men from './Men'
import Women from './Women'
import Kid from './Kid'
import Login from './Login'
import Signup from './Signup'
import Details from './Details'
import Create from './Create'
import Edit from './Edit'
const Router = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
          <Route path='/kids' element={<Kid />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/create' element={<Create />} />
        </Routes>
    </div>
  )
}

export default Router