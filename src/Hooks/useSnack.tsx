import { useContext } from 'react'

import { SnackContext } from '../Contexts/SnackContext'

export function useSnack(){
  return useContext(SnackContext)
}
