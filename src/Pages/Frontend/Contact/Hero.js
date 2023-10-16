import React from 'react'
import whatsapp from "../../../assets/images/whatsapp.png"
import gmail from "../../../assets/images/gmail.png"
import call from "../../../assets/images/call.png"
export default function Hero() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p className='font-80 yellow text-center mb-0'>Contact Page</p>
          <p className='text-light text-center fs-3 mt-0'>Feel free to contact</p>
        </div>
      </div>
      <div className="row my-5">
            <div className="col-xs-12 col-md-4 col-xl-4 col-xxl-4 text-light text-center">
              <a href="mailto:haramansari2244@gmail.com" className="text-decoration-none">
                <img src={gmail} alt="Gmail" />
                <p className='text-light'>haramansari2244@gmail.com</p>
              </a>
            </div>
            <div className="col-xs-12 col-md-4 col-xl-4 col-xxl-4 text-light text-center">
              <a href="https://wa.me/+923206455170" className="text-decoration-none">
                <img src={whatsapp} alt="WhatsApp" />
                <p className='pt-3 text-light'>+923206455170</p>
              </a>
            </div>
            <div className="col-xs-12 col-md-4 col-xl-4 col-xxl-4 text-light text-center">
              <a href="tel:+923206455170" className="text-decoration-none">
                <img className='bg-dark call' src={call} alt="Call" />
                <p className='text-light'>+923206455170</p>
              </a>
            </div>
          </div>

        </div>
  )
}
