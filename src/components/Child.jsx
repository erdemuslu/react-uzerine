import React, { useContext } from 'react'
import { instanceOf } from 'prop-types'

const Child = () => {

  const value = useContext(jobContext)

  return (
    <div>
      Child Component
      <br />
      <button
        type="button"
      >
        Add job
      </button>
    </div>
  )
}

Child.defaultProps = {
  payload: ''
}

Child.propTypes = {
  payload: instanceOf(Object)
}

export default Child
