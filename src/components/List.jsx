import React from 'react'
import { instanceOf } from 'prop-types'

import Item from './Item'

const List = ({ items }) => (
  <ul>
    {
      items.map((item, index) => {
        const key = index.toString()
        return (
          <Item
            key={key}
            text={item.text}
          />
        )
      })
    }
  </ul>
)

List.defaultProps = {
  items: []
}

List.propTypes = {
  items: instanceOf(Array)
}

export default List
