import { Button } from 'antd'

import React from 'react'
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col">
          <h1 className='text-center text-light'>Here you can check my Skills For more details you can visit Work</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-3 text-light ">
          <h2 className='py-2' >
            HTML
          </h2>
          <h2 className='py-2' >
            CSS
          </h2>
          <h2 className='py-2' >
            BOOTSTRAP
          </h2>
          <h2 className='py-2' >
            JS
          </h2>
          <h2 className='py-2' >
            REACT
          </h2>
          <h2 className='py-2' >
            FIREBASE
          </h2>
        </div>
        <div className="col-9">
          <div className='border rounded-2 my-1 skill-p-d w-100 p-2'>
            <div className='skill-div text-decoration-bold py-1 pe-2' style={{ width: '80%' }}>80%</div>
          </div>
          <div className='border rounded-2 my-1 skill-p-d w-100 p-2'>
            <div className='skill-div text-decoration-bold py-1 pe-2' style={{ width: '80%' }}>80%</div>
          </div>
          <div className='border rounded-2 my-1 skill-p-d w-100 p-2'>
            <div className='skill-div text-decoration-bold py-1 pe-2' style={{ width: '75%' }}>75%</div>
          </div>
          <div className='border rounded-2 my-1 skill-p-d w-100 p-2'>
            <div className='skill-div text-decoration-bold py-1 pe-2' style={{ width: '80%' }}>80%</div>
          </div>
          <div className='border rounded-2 my-1 skill-p-d w-100 p-2'>
            <div className='skill-div text-decoration-bold py-1 pe-2' style={{ width: '75%' }}>75%</div>
          </div>
          <div className='border rounded-2 my-1 skill-p-d w-100 p-2'>
            <div className='skill-div text-decoration-bold py-1 pe-2' style={{ width: '70%' }}>70%</div>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col text-center">
          <Link to={"/projects"} className='text-decoration-none'><Button type='link' className=' mt-3 buttonAbout btn btn-light pt-0 p-5 fs-3 my-3 w-50'>My Projects</Button></Link>
        </div>
      </div>
    </div>
  )
}
