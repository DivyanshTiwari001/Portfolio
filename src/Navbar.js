import react from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
let i = true;
function toggleNavList(){
    const parent = document.querySelector('#mynavBar');
    const elem = document.querySelector('#mynavlist');
    if(i){
        elem.className = 'nav-list-modified'
        parent.className = 'nav-bar-modified';
    }
    else {
        elem.className = 'nav-list'; 
        parent.className = 'navbar';
    }
    i = !i;
}
function Navbar(){
    return(
        
        <div className="navbar" id='mynavBar'>
            <div className='name-toggle'>
            <div className='name'><h3>Divyansh Tiwari</h3></div>
            <div className='toggle-list'><p onClick={toggleNavList}>&#9776;</p></div>
            </div>
            <ul className="nav-list" id='mynavlist'>
                <li className='list-item'><NavLink to='/portfolio' className='nav-link'>Home</NavLink></li>
                <li className='list-item'><NavLink to='/portfolio/about' className='nav-link'>About me</NavLink></li>
                <li className='list-item'><NavLink to='/portfolio/achievements' className='nav-link'>Achievements</NavLink></li>
                <li className='list-item'><NavLink to='/portfolio/projects' className='nav-link'>Projects</NavLink></li>
            </ul>
        </div>
    )
}
export default Navbar;