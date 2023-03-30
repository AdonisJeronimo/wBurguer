import { createContext, ReactNode, useState } from "react"
import { toast } from "react-toastify"

import { SnackData } from "../Interfaces/SnackData"

import { snackEmoji } from "../Helpers/snackEmoji"

interface Snack extends SnackData{
  quantity:number
  subtotal: number
}

interface CartContextProps{
  cart:Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  removeSnackFromCart: (snack:Snack ) => void
  snackCartIncrement: (snack:Snack ) => void
  snackCartDecrement: (snack:Snack ) => void
  confirmOrder: ( ) => void
}

interface CartProviderProps{
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider ({children}: CartProviderProps ){
  const [cart, setCart] = useState<Snack[]>([])

  function addSnackIntoCart(snack: SnackData):void{
    //Buscar
    const snackExistentInCart = cart.find((item) => item.snack === snack.snack && item.id === snack.id)

    //Atualizar
    if(snackExistentInCart){
      const newCart = cart.map((item) => {
        if(item.id === snack.id){
          const quantity =  item.quantity + 1
          const subtotal = item.price * quantity

          return {...item, quantity, subtotal}
        }
        return item
      })
      toast.success(`Outro(a) ${snackEmoji(snack.snack)} ${snack.name} adicionado aos pedidos!`)
      setCart(newCart)

      return
    }

    //adicionar

    const newSnack = {...snack, quantity: 1 , subtotal: snack.price}
    const newCart = [...cart,newSnack ]

    toast.success(`${snackEmoji(snack.snack)} ${snack.name} foi adicionado aos pedidos!`)


    setCart(newCart)
  }

  //Remover pedido
  function removeSnackFromCart(snack: Snack){
    const newCart = cart.filter((item) => !(item.id === snack.id && item.snack === snack.snack))

    setCart(newCart)
  }


  function updateSnackQuantity(snack: Snack, newQuantity:number){
    if(newQuantity <= 0 ) return

    const snackExistentInCart = cart.find((item) => item.id === snack.id && item.snack === snack.snack)

    if(!snackExistentInCart) return

    const newCart =  cart.map((item) => {
      if(item.id === snackExistentInCart.id && item.snack === snackExistentInCart.snack){
        return{
          ...item,
          quantity: newQuantity,
          subtotal: item.price * newQuantity,
        }
      }
      return item
    })

    setCart(newCart)
  }

  //Incrementar item
  function snackCartIncrement(snack: Snack){
    updateSnackQuantity(snack,snack.quantity +1)
  }

  //Decrementar item
  function snackCartDecrement(snack: Snack){
    updateSnackQuantity(snack,snack.quantity -1)
  }

  //Confirmar pedido
  function confirmOrder(){
    return
  }

  return (
    <CartContext.Provider
    value={{
      cart,
      addSnackIntoCart,
      removeSnackFromCart,
      snackCartIncrement,
      snackCartDecrement,
      confirmOrder

      }}>
      {children}
    </CartContext.Provider>
  )
}

