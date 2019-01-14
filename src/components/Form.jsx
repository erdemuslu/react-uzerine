import React, { useState } from 'react'
import { func } from 'prop-types'

const Form = ({ onAdd }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onAdd(value)
    setValue('')
  }

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="item"
        placeholder="type sometihng"
        value={value}
        onChange={onChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

Form.defaultProps = {
  onAdd: null
}

Form.propTypes = {
  onAdd: func
}

export default Form
