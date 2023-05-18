import React from 'react'
// component
import Header from './Header'
import Products from './products'
// style
import './scss/style.scss'

export default function Index () {
  return (
    <div id='section'>
      <div>
        <Header />
        <Products />
      </div>
    </div>
  )
}
