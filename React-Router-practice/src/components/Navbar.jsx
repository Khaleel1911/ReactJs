import React from 'react'
import {NavLink , replace, useNavigate} from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
return (
    <div>
        <div className='container'>
            <h1>Logo</h1>
            <ul>
                <NavLink to='/'><li>Home</li></NavLink>
                <NavLink to='/about'><li>About</li></NavLink>
                <NavLink to='/contact'><li>Contact</li></NavLink>
                <NavLink to='/products'><li>Products</li></NavLink>
            </ul>
            <button  onClick={() => navigate('/products',{replace:true})}>
                Get Started
            </button>
        </div>
    </div>
)
}

export default Navbar