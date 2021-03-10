import React from 'react'
// We'll need a Link and the useLocation hook from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'

export default function ItemsList(props) {
  const { items } = props
  const { pathname } = useLocation()

  // We'll grab the current URL using the hook

  return (
    <div className='items-list-wrapper'>
      {items.map(item => (
        <div
          className='item-card'
          key={item.id}
        >
          {/* 👉 STEP 6 - Link starts, navigates us from <current url> to <current url>/<id of the item> */}
          <Link to={`${pathname}/${item.id}`}>
            <img
              className='items-list-image'
              src={item.imageUrl}
              alt={item.name}
            />
            <p>{item.name}</p>
          </Link>

          <p>${item.price}</p>
        </div>
      ))}
    </div>
  )
}
