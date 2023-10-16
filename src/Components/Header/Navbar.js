import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header>

                        <nav className='navbar-expand-lg navbar-dark'>
                            <div className="container">
                            <span className='text-decoration-none text-light fs-1'>Port<span className='yellow'>folio</span></span>
                            <button class="navbar-toggler float-end mt-3 p-1 rounded-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse float-lg-end" id="navbarSupportedContent">
                                <div className="d-flex flex-wrap">

                            <Link to={"/"} className='text-decoration-none me-3 link mt-3'>Profile</Link>
                            <Link to={"/about"} className='text-decoration-none mx-3 link mt-3'>About</Link>
                            <Link to={"/projects"} className='text-decoration-none mx-3 link mt-3'>Projects</Link>
                            <Link to={"/skills"} className='text-decoration-none mx-3 link mt-3'>Skills</Link>
                            <Link to={"/contact"} className='text-decoration-none ms-3 link mt-3'>Contact</Link>
                                </div>
                            </div>
                            </div>
                        </nav>
                    
        </header>
    )
}
