import React, { useContext } from 'react'

// load main context
import { MainContext } from '../store/Store'

// load action
import { updateName } from '../actions/updateName'

const Button = () => {
  const { dispatch } = useContext(MainContext)

  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch(updateName())}
      >
        Update
      </button>
    </div>
  )
}

export default Button
