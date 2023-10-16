import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Image, Modal } from 'antd';
import { DownCircleOutlined , RightSquareOutlined } from '@ant-design/icons';
import htmlImg from '../../../assets/images/html.png'
import cssImg from '../../../assets/images/css.png'
import jsImg from '../../../assets/images/js.png'
import reactImg from '../../../assets/images/react.png'
import firebaseImg from '../../../assets/images/firebase.png'

// HTML ..................................................
import homeHtml from '../../../assets/images/html/home.png'
import aboutHtml from '../../../assets/images/html/about.png'
import contactHtml from '../../../assets/images/html/contact.png'
import loginHtml from '../../../assets/images/html/login.png'
import galleryHtml from '../../../assets/images/html/gallery.png'
import mediaHtml from '../../../assets/images/html/media.png'
import registerHtml from '../../../assets/images/html/register.png'
// CSS ..................................................
import staticWebCss from '../../../assets/images/css/staticWeb.png'
import lightCss from '../../../assets/images/css/Light.png'
import darkCss from '../../../assets/images/css/darkMode.png'
import iphoneCss from '../../../assets/images/css/iphone.png'
import hotelCss from '../../../assets/images/css/hotel.png'
// JS ..................................................
import js1 from '../../../assets/images/js/js1.png'
import js2 from '../../../assets/images/js/js2.png'
import js3 from '../../../assets/images/js/js3.png'
import js4 from '../../../assets/images/js/js4.png'
import js5 from '../../../assets/images/js/js5.png'
import js6 from '../../../assets/images/js/js6.png'
import js7 from '../../../assets/images/js/js7.png'
import Todo from '../../../assets/images/js/todo.png'

// React.JS ..................................................
import ReactTodo from '../../../assets/images/react/todo.png'
import StickyWalls from '../../../assets/images/react/stickyWalls.png'
import Sms from '../../../assets/images/react/stud.png'




export default function Hero() {


  return (
    <div className="container">
      <div className="row">
        <div className="col text-light">
          <h1>I have done a lot of projects. These are some of them.</h1>
        </div>
      </div>

      <div className="row mt-3 d-flex g-3">

        <div className="col-sm-6 col-md-3 col-xl-3 col-xxl-3">
          <a href='#html' className='text-decoration-none'>
            <div className="card p-3 work-card bg-transparent ">
              <img src={htmlImg} className='card-img' alt="HTML image" />
              <h3 className=' card-h ps-3 mb-0' >HTML</h3>
            </div>
          </a>
        </div>


        <div className="col-sm-6 col-md-3 col-xl-3 col-xxl-3">
          <a href='#css' className='text-decoration-none'>
            <div className="card p-3 work-card bg-transparent">
              <img src={cssImg} className='card-img' alt="CSS image" />
              <h3 className='ps-3 card-h mb-0'>CSS</h3>
            </div>
          </a>
        </div>


        <div className="col-sm-6 col-md-3 col-xl-3 col-xxl-3">
          <a href='#js' className='text-decoration-none'>
            <div className="card p-3 work-card bg-transparent">
              <img src={jsImg} className='card-img' alt="CSS image" />
              <h3 className='card-h ps-3 mb-0'>JS</h3>
            </div>
          </a>
        </div>


        <div className="col-sm-6 col-md-3 col-xl-3 col-xxl-3 ">
          <a href='#react' className='text-decoration-none'>
            <div className="card p-3 work-card bg-transparent h-100">
              <img src={reactImg} className='card-img' alt="CSS image" />
              <h3 className='ps-3 mb-0 card-h'>REACT.JS</h3>
            </div>
          </a>
        </div>

        <div className="col-sm-6 col-md-3 col-xl-3 col-xxl-3">
          <a href='#react' className='text-decoration-none'>
            <div className="card p-3 work-card bg-transparent h-100">
              <img src={firebaseImg} className='card-img' alt="CSS image" />
              <h3 className='  ps-3 mb-0 card-h'>Firebase</h3>
            </div>
          </a>
        </div>




      </div>
      <div className="row my-5">
        <div className="col text-center">
          <a href="#html" className='text-decoration-none'><Button icon={<DownCircleOutlined />} type='link' className=' mt-3 buttonAbout btn btn-light pt-0 p-5 fs-3 my-3'>More</Button></a>
        </div>
      </div>
      <div className="row my-5">
        <div className="col">
          <h1 className='yellow' id='html'>HTML (Hyper Text Markup Language)</h1>
          <p className='text-light'>I have Done a lot of Projects using HTML:5 . Here are some screne shots of them.</p>
        </div>
      </div>
      <div className="row g-3">
        <div className="col-sm-6 col-md-3 col-xl-3 col-xxl-3 border border-light rounded-2">
          <div className="card my-2">
            <Image src={homeHtml} />
            <h3 className='bg-secondary mb-0 py-2 ps-1 text-light'>Home Page</h3>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-xl-3 col-xxl-3 border border-light rounded-2 ">
          <div className="card my-2" >
            <Image src={aboutHtml} />
            <h3 className='bg-secondary mb-0 py-2 ps-1 text-light'>About Page</h3>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-xl-3 col-xxl-3 border border-light rounded-2 ">
          <div className="card my-2" >
            <Image src={galleryHtml} />
            <h3 className='bg-secondary mb-0 py-2 ps-1 text-light'>Gallery Page</h3>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-xl-3 col-xxl-3 border border-light rounded-2 ">
          <div className="card my-2" >
            <Image src={mediaHtml} />
            <h3 className='bg-secondary mb-0 py-2 ps-1 text-light'>Media Page</h3>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-xl-3 col-xxl-3 border border-light rounded-2 ">
          <div className="card my-2" >
            <Image src={loginHtml} />
            <h3 className='bg-secondary mb-0 py-2 ps-1 text-light'>Login Page</h3>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-xl-3 col-xxl-3 border border-light rounded-2 ">
          <div className="card my-2" >
            <Image src={registerHtml} />
            <h3 className='bg-secondary mb-0 py-2 ps-1 text-light'>Register Page</h3>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-xl-3 col-xxl-3 border border-light rounded-2 ">
          <div className="card my-2" >
            <Image src={contactHtml} />
            <h3 className='bg-secondary mb-0 py-2 ps-1 text-light'>Contact Page</h3>
          </div>
        </div>
      </div>

      {/* Css................................................................. */}
      <div className="row my-5">
        <div className="col">
          <h1 className='yellow' id='css'>CSS (Cascading StyleSheet)</h1>
          <p className='text-light'>I have Done a lot of Projects using CSS . Here are some screne shots of them.</p>
        </div>
      </div>
      <div className="row g-3">
        <div className="col-sm-6 col-md-4 col-xl-4 col-xxl-4 border border-light rounded-2">
          <div className="card my-2">
            <Image src={staticWebCss} />
            <h3 className='bg-secondary mb-0 py-2 ps-1 text-light'>Static Web Page</h3>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-xl-4 col-xxl-4 border border-light rounded-2 ">
          <div className="card my-2" >
            <Image src={iphoneCss} />
            <h3 className='bg-secondary mb-0 py-2 ps-1 text-light'>Ipnone Page</h3>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-xl-4 col-xxl-4 border border-light rounded-2 ">
          <div className="card my-2" >
            <Image src={hotelCss} />
            <h3 className='bg-secondary mb-0 py-2 ps-1 text-light'>Responsive Page</h3>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-xl-4 col-xxl-4 border border-light rounded-2 ">
          <div className="card my-2" >
            <Image src={darkCss} />
            <h3 className='bg-secondary mb-0 py-2 ps-1 text-light'>Dark Mode Page</h3>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-xl-4 col-xxl-4 border border-light rounded-2 ">
          <div className="card my-2" >
            <Image src={lightCss} />
            <h3 className='bg-secondary mb-0 py-2 ps-1 text-light'>Light Mode Page</h3>
          </div>
        </div>
      </div>
      {/* Js........................................................................ */}

      <div className="row my-5">
        <div className="col">
          <h1 className='yellow' id='js'>JS (JavaScript)</h1>
          <p className='text-light'>I have Done a lot of Projects using JavaScript . Here are some screne shots of them.All of them have Functionality which is writen in them.</p>
        </div>
      </div>
      <div className="row g-3">
        <div className="col-sm-6 col-md-4 col-xl-4 col-xxl-4 border border-light rounded-2">
          <div className="card my-2">
            <Image src={js1} />
            <h3 className='bg-secondary mb-0 py-2 ps-1 text-light'>Js1</h3>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-xl-4 col-xxl-4 border border-light rounded-2 ">
          <div className="card my-2" >
            <Image src={js2} />
            <h3 className='bg-secondary mb-0 py-2 ps-1 text-light'>Js2</h3>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-xl-4 col-xxl-4 border border-light rounded-2 ">
          <div className="card my-2" >
            <Image src={js3} />
            <h3 className='bg-secondary mb-0 py-2 ps-1 text-light'>Js3</h3>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-xl-4 col-xxl-4 border border-light rounded-2 ">
          <div className="card my-2" >
            <Image src={js4} />
            <h3 className='bg-secondary mb-0 py-2 ps-1 text-light'>Js4</h3>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-xl-4 col-xxl-4 border border-light rounded-2 ">
          <div className="card my-2" >
            <Image src={js5} />
            <h3 className='bg-secondary mb-0 py-2 ps-1 text-light'>Js5</h3>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-xl-4 col-xxl-4 border border-light rounded-2 ">
          <div className="card my-2" >
            <Image src={js6} />
            <h3 className='bg-secondary mb-0 py-2 ps-1 text-light'>Js6</h3>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-xl-4 col-xxl-4 border border-light rounded-2 ">
          <div className="card my-2" >
            <Image src={js7} />
            <h3 className='bg-secondary mb-0 py-2 ps-1 text-light'>Js7</h3>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-xl-4 col-xxl-4 border border-light rounded-2 ">
          <div className="card my-2" >
            <Image src={Todo} />
            <h3 className='bg-secondary mb-0 py-2 ps-1 text-light'>Todo app Page</h3>
          </div>
        </div>
      </div>
      {/* Firebase ............................... */}

      <div className="row my-5">
        <div className="col">
        <h1 className='yellow' id='react'>React.js & Firebase</h1>
          <p className='text-light'>I have Done a lot of Projects using React.js and Firebase . Here are some of them. These created using react.js and there hosting/Domain is from Google Firebase. <br />
          <u> You can check out by click on them.</u>
          </p>

        </div>
      </div>
      <div className="row g-3">
        <div className="col-sm-6 col-md-4 col-xl-4 col-xxl-4 border border-light rounded-2">
          <div className="card my-2">
            <a href="https://sticksforyou2.web.app/" target='_blank' className='text-decoration-none'>
            <Image src={StickyWalls} preview={false}/>
            <h3 className='bg-secondary mb-0 py-2 ps-1 text-light '>Sticky Walls</h3>
            </a>
          </div>
        </div>
       
        <div className="col-sm-6 col-md-4 col-xl-4 col-xxl-4 border border-light rounded-2">
          <div className="card my-2">
            <a href="https://todo-8a77a.web.app" target='_blank' className='text-decoration-none'>
            <Image src={ReactTodo} preview={false}/>
            <h3 className='bg-secondary mb-0 py-2 ps-1 text-light'>Todo App</h3>
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-xl-4 col-xxl-4 border border-light rounded-2">
          <div className="card my-2">
            <a href="https://student-management-syste-db4ba.web.app/" target='_blank' className='text-decoration-none'>
            <Image src={Sms} preview={false}/>
            <h3 className='bg-secondary mb-0 py-2 ps-1 text-light'>Students Managements</h3>
            </a>
          </div>
        </div>
       
      
      </div>
    </div>
  )
}
