import './Home.scss'
import heroImg from '../../assets/hero.png'
import { Container, Button } from '../../utils'

const Home = () => {
  return (
    <section>
      <div className='hero-img'>
        <img src={heroImg} alt="" />
      </div>
      <div className="hero-content__wrapper">
        <Container>
          <div className="hero__content">
            <span style={{ color: 'var(--secondary-font-color)', fontFamily: 'var(--inter)', lineHeight: '20px', letterSpacing: '3px' }}>POSTED ON <strong>STARTUP</strong></span>
            <h1>Step-by-step guide to choosing great font pairs</h1>
            <span style={{ color: 'var(--secondary-font-color)', fontFamily: 'var(--inter)' }}>By <strong style={{ color: 'var(--btn-bg-color)', borderRight: '1px solid #fff', paddingRight: '15px', marginRight: '10px' }}>James West</strong> May 23, 2022</span>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <div>
              <Button text={'Read More >'} />
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
export default Home