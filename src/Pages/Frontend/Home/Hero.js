
import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col text-light">
          <h1 className='font-80'>Hi There,</h1>
          <h1 className='font-80'>I'm <span className='yellow '>Muhammad Haram</span></h1>
          <Link to={"/about"}>
          <button className='mt-3 buttonAbout btn btn-light p-3 fs-3 my-3'>About me</button>
          </Link>
        </div>
        <div className="col text-light ">
          <div className="img-bg text-center">
          </div>
        </div>
      </div>
    </div>
  )
}
