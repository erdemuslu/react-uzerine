import React from 'react'
import { useDispatch } from 'react-redux'
import { getCocktailRequest } from './store/cocktail/cocktailAction'

const Header = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          dispatch(getCocktailRequest())
        }}
      >
        Verileri çek
      </button>
    </div>
  )
}

export default Header
