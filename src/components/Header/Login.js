import React from 'react'
import { Link } from 'react-router-dom'
// icon
import { LoginOutlined, ShoppingCartOutlined } from '@ant-design/icons'

export default function login () {
  return (
    <div className=' login'>
      <div className='loginbox '>
        <Link
          to={
            'https://www.digikala.com/users/login/?backUrl=/search/category-mobile-phone/apple/'
          }
          className='link'
        >
          <LoginOutlined />
          ورود | ثبت‌نام
        </Link>
      </div>
      <div className='shop '>
        <Link to='https://www.digikala.com/checkout/cart/' className='link'>
          <ShoppingCartOutlined />
        </Link>
      </div>
    </div>
  )
}
