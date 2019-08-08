import React, { useEffect, useState } from 'react'
import { string } from 'prop-types'

const Child = ({ value }) => {
  const [childValue, setChildValue] = useState(value)

  useEffect(() => {
    console.log('value changed')
    setChildValue(value)
  }, [value])

  return (
    <div>
      child value:
      { childValue }
    </div>
  )
}

Child.defaultProps = {
  value: null
}

Child.propTypes = {
  value: string
}

export default Child
