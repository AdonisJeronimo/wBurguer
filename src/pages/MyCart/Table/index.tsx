import { useCart } from "../../../Hooks/useCart"

import { TableDesktop } from "./TableDesktop"

export function Table(){

  const {cart} = useCart()

  if(cart.length === 0)
  return <h1>Ops! Parece que você ainda não fez seus pedidos, retorne a pagina inicial e peça já seus lanches! 😋 </h1>


  return <TableDesktop />
}
