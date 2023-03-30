import { createContext, ReactNode, useEffect, useState } from 'react'
import { SnackData } from '../Interfaces/SnackData'
import { getBurgers, getDesserts, getDrinks, getPizzas } from '../services/api'


interface SnackContextProps{
  burgers: SnackData[]
  desserts: SnackData[]
  drinks: SnackData[]
  pizzas: SnackData[]
}

interface SnackProviderProps{
  children: ReactNode;
}

export const SnackContext =  createContext({} as SnackContextProps)

export function SnackProvider({ children }: SnackProviderProps){
  const [burgers, setBurgers] = useState<SnackData[]>([])
  const [desserts, setDesserts] = useState<SnackData[]>([])
  const [drinks, setDrinks] = useState<SnackData[]>([])
  const [pizzas, setPizzas] = useState<SnackData[]>([])

  useEffect(() => {
    ;(async () => {
      try {
      const burgerRequest = await getBurgers()
      const dessertsRequest = await getDesserts()
      const drinksRequest = await getDrinks()
      const pizzasRequest = await getPizzas()

      const requests = [burgerRequest, dessertsRequest, drinksRequest, pizzasRequest]

      const [
        {data: burgerResponse},
        {data: dessertsResponse},
        {data: drinksResponse},
        {data: pizzasResponse},
      ] = await Promise.all(requests)

      setBurgers(burgerResponse)
      setDesserts(dessertsResponse)
      setDrinks(drinksResponse)
      setPizzas(pizzasResponse)
    } catch (error) {
      console.error(error)
    }
    })()
  }, [])

  return (
    <SnackContext.Provider value={{burgers,desserts,drinks,pizzas}}>
      { children }
    </SnackContext.Provider>
  )

}

