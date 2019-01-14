import React from 'react'
import { string } from 'prop-types'

const Item = ({ text }) => (
  <li>{ text }</li>
)

Item.defaultProps = {
  text: ''
}

Item.propTypes = {
  text: string
}

export default Item
