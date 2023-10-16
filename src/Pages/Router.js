import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Frontend from "./Frontend"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { Divider } from 'antd'
export default function Router() {

  return (
    <>
      <Header />
      <span className='container rounded-2'>
        <Divider className=' border border-bottom-tertiary ' />
      </span>
      <Routes>
        <Route path='/*' element={<Frontend />} />
      </Routes>
      <Footer />
    </>
  )
}
