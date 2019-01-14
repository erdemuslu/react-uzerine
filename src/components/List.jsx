import React from 'react'
import { instanceOf } from 'prop-types'

import Item from './Item'

const List = ({ data }) => (
  <ul>
    {
      data.map((item, index) => {
        const key = index.toString()
        return (
          <Item
            key={key}
            text={item.title}
          />
        )
      })
    }
  </ul>
)

List.defaultProps = {
  data: []
}

List.propTypes = {
  data: instanceOf(Array)
}

export default List
