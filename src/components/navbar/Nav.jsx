import './Nav.scss'
import { Button, Container } from '../../utils'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()
  function navigateToLogin(){
    navigate('login')
  }
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
                <button onClick={navigateToLogin}>Login</button>
            </div>
            </div>
        </Container>
    </nav>
  )
}

export default Nav