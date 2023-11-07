import './Register.scss'
import { Button, Container, Input, MainTitle } from "../../utils"
import { apiInstance } from '../../api'
import { useEffect } from 'react'


const Register = () => {
  return (
    <Container>
      <form>
        <MainTitle text={'Register'} />
        <Input placeholder={'Firstname'} />
        <Input placeholder={'Lastname'} />
        <Input placeholder={'Username'} />
        <Input placeholder={'Password'} />
        <Input placeholder={'Confirm password'} />
        <Button text={'Register'} />
      </form>
    </Container>
  )
}

export default Register