import React from 'react'
import computer from "../../../assets/images/computer.png"
import { Link } from 'react-router-dom'
export default function Hero() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col">
          <img src={computer} alt="" height={400} width={"100%"} />
        </div>
        <div className="col p-5">
          <h1 className='yellow'>About Me</h1>
          <p className='text-light'>
            I'm Muhammad Haram, a web and application developer proficient in HTML, CSS, JavaScript, and ReactJS. I have hands-on experience with Firebase.
            <br />
            I'm passionate about creating user-friendly digital experiences and leveraging data for informed decisions.I'm always eager to take on new challenges and learn from every project I work on. <br />Let's collaborate on innovative projects and turn ideas into reality!
          </p>
          <Link to={"/contact"} className=''>
            <button className='mt-3 buttonAbout btn btn-light p-2  my-3 mx-auto'>Contact me</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
