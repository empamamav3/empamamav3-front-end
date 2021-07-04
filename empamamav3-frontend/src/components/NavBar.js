import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'

export default function Navbar () {
    return (
        <nav className='navbar'>
            <div className='navLogo'>
              <h2>Empamama's</h2>
            </div>
            <div className='navLinks'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/contact'>Contact</Link>
            </div>
            <div className='hamburgerIconContainer'>
                <Hamburger className='hamburgerIcon'></Hamburger>
            </div>
        </nav>
    )
}
