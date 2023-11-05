import './Register.scss'
import { Button, Container, Input, MainTitle } from "../../utils"


const Register = () => {
  return (
    <Container>
      <form>
        <MainTitle text={'Register'}/>
        <Input placeholder={'Firstname'}/>
        <Input placeholder={'Lastname'}/>
        <Input placeholder={'Username'}/>
        <Input placeholder={'Password'}/>
        <Input placeholder={'Confirm password'}/>
        <Button text={'Register'}/>
      </form>
    </Container>
  )
}

export default Register