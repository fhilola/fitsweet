import './Nav.scss'
import { Button, Container } from '../../utils'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <Container>
            <div className="nav__wrapper">
              <img src={logo} alt="" />
            <div>
                <ul>
                    <li>
                      <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                      <Link to={'all-posts'}>Blog</Link>
                    </li>
                    <li>
                      <Link to={'about-us'}>About Us</Link>
                    </li>
                    <li>
                      <Link to={'register'}>Register</Link>
                    </li>
                </ul>
                <Button text={'Login'}/>
            </div>
            </div>
        </Container>
    </nav>
  )
}

export default Nav