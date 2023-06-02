import { useCart } from '../../../Hooks/useCart'

import { currencyFormat } from '../../../Helpers/currencyFormat'

import { Container } from '../style'

export function PayOrder() {
  const { cart } = useCart()

  const totalAmount = cart.reduce((acc, item) => (acc += Number(item.subtotal)), 0)

  return (
    <Container>
      <button type='submit'>Pagar</button>
      <span>
        Total <strong>{currencyFormat(totalAmount)}</strong>
      </span>
    </Container>
  )
}
