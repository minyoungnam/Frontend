import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import Hosting from '../pages/Hosting'
import Mypage from '../pages/Mypage'
import Reservation from '../pages/Reservation'
import WishList from '../pages/WishList'
import Signup from '../pages/Signup'
import Login from '../pages/Login'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='detail' element={<Detail />}/>
            <Route path='hosting' element={<Hosting />}/>
            <Route path='mypage' element={<Mypage />}/>
            <Route path='reservation' element={<Reservation />}/>
            <Route path='wishlist' element={<WishList />}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router