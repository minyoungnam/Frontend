import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import Hosting from '../pages/Hosting'
import Mypage from '../pages/Mypage'
import Reservation from '../pages/Reservation'
import WishList from '../pages/WishList'

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
        </Routes>
    </BrowserRouter>
  )
}

export default Router