import './Nav.scss'
import { Container } from '../../utils'
import logo from '../../assets/logo.svg'

const Nav = () => {
  return (
    <nav>
        <Container>
            <img src={logo} alt="" />
            <div>
                <ul>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>About Us</li>
                    <li>Register</li>
                </ul>
            </div>
        </Container>
    </nav>
  )
}

export default Nav