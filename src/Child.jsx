import React, { useEffect, useState } from 'react'
import { string } from 'prop-types'

const Child = ({ name }) => {
  const [childItem, setChildItem] = useState(name)

  // useEffect(() => {
  //   console.log('useEffect works')
  //   return setChildItem(name)
  // })

  // useEffect(() => {
  //   console.log('useEffect works')
  //   return setChildItem(name)
  // }, [])

  useEffect(() => {
    console.log('useEffect works')
    return setChildItem(name)
  }, [name])

  return (
    <div>
      { childItem }
      <br />
    </div>
  )
}

Child.defaultProps = {
  name: null
}

Child.propTypes = {
  name: string
}

export default Child
