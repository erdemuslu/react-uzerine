import React, { useState } from 'react'
import { func } from 'prop-types'

const Form = ({ handleAdd }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    handleAdd({ title })
    setTitle('')
  }

  const onChange = ({ target: { value } }) => {
    setTitle(value)
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="item"
        placeholder="type sometihng"
        value={title}
        onChange={onChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

Form.defaultProps = {
  handleAdd: null
}

Form.propTypes = {
  handleAdd: func
}

export default Form
