import './Nav.scss'
import { Container } from '../../utils'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <Container>
            <img src={logo} alt="" />
            <div>
                <ul>
                    <li>
                        <Link>Home</Link>
                    </li>
                    <li>
                        <Link>Blog</Link>
                    </li>
                    <li>
                        <Link>About Us</Link>
                    </li>
                    <li>
                        <Link></Link>
                    </li>
                </ul>
            </div>
        </Container>
    </nav>
  )
}

export default Nav