import React from 'react'
import { Link } from 'react-router-dom'
// img
import logo from '../../assets/images/logo.png'
// icon
import { SearchOutlined } from '@ant-design/icons'

export default function Header () {
  return (
    <div id='right'>
      {/* logo */}
      <Link to='https://www.digikala.com'>
        <img src={logo} className='logo' />
      </Link>

      {/* searchbox */}
      <div className='searchbox  '>
        <SearchOutlined className='icon' />
        <input value={'جستجو'} type='text' />
      </div>
    </div>
  )
}
