import { Outlet } from 'react-router-dom'

import { Sidebar } from '../../components/Sidebar'
import { MyOrder } from '../../components/MyOrder'

import { Container } from './styles'

import logoImg from '../../assets/WBurguer-logo-3.png'

export default function Main() {
  return (
    <Container>
      <Sidebar />
      <section>
        <img src={logoImg} />
        <Outlet />
      </section>
      <MyOrder/>
    </Container>
  )
}
