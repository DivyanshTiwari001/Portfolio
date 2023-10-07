import react from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
function Navbar(){
    return(
        
        <div className="navbar">
            <div className='name'><h3>Divyansh Tiwari</h3></div>
            <ul className="nav-list">
                <li className='list-item'><NavLink to='/' className='nav-link'>Home</NavLink></li>
                <li className='list-item'><NavLink to='/about' className='nav-link'>About me</NavLink></li>
                <li className='list-item'><NavLink to='/achievements' className='nav-link'>Achievements</NavLink></li>
                <li className='list-item'><NavLink to='/projects' className='nav-link'>Projects</NavLink></li>
            </ul>
        </div>
    )
}
export default Navbar;