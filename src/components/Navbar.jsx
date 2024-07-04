import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    

    <nav className='w-full h-[80px] bg-green-50 flex items-center justify-around'>
        <Link to="/">DevJuwon</Link>

        <div>
            <Link className='mr-3' to="/">Home</Link>
            <Link className='mr-3' to="/about">About</Link>
            <Link className='mr-3' to="/projects">Projects</Link>
            <Link className='mr-3' to="/contact">Contact</Link>
        </div>

        <div className="button-container">
            <button>Login</button>
            <button>Register</button>
        </div>
    </nav>
    
    
  )
}

export default Navbar
