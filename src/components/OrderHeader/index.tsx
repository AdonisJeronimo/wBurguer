import { Link } from 'react-router-dom'
import logoImg from '../../assets/WBurguer-logo-2.png'
import { useCart } from '../../Hooks/useCart'
import { Container } from './styles'
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg'

export function OrderHeader(){
  const {cart} = useCart()

  return (
  <Container>
    <Link to='/'>
      <img src={logoImg} alt='WBurguer - Home'/>
    </Link>

    <div>
      <div>
        <h3>Meus pedidos</h3>
        <span>
          <strong>
            {`${cart.length}`.padStart(2,"0")} lanches(s)
          </strong>
        </span>
      </div>
      <CartIcon/>
    </div>
  </Container>
  )
}
