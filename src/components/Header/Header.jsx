import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './Header.css'

export default function Header() {
    return (
    <header>
        <img src={logo} alt="logo" className='logo' />

        <nav>
            <Link to="/">Home</Link>
        </nav>
    </header>
    )
}