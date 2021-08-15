import React from 'react'
import { useSelector } from 'react-redux'

const Result = () => {
  const drinks = useSelector(state => state.drinks)
  console.log('drinks', drinks)

  return (
    <div>
      <br />
      {
        drinks?.loading && <div>Yukleniyor</div>
      }
      {
        drinks?.data?.length > 0 && <div>Sonuc</div>
      }
    </div>
  )
}

export default Result
