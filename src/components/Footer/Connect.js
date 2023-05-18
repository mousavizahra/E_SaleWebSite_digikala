import React from 'react'
import { Link } from 'react-router-dom'
// img
import express from '../../assets/images/connect/express-delivery.svg'
import cash from '../../assets/images/connect/cash-on-delivery.svg'
import days from '../../assets/images/connect/days-return.svg'
import support from '../../assets/images/connect/support.svg'
import original from '../../assets/images/connect/original-products.svg'

export default function Connect () {
  return (
    <div className='Connect'>
      <div>
        <Link to='https://www.digikala.com/faq/question/79/' className='link'>
          <img src={express} />
          <p>امکان تحویل اکسپرس</p>
        </Link>
      </div>

      <div>
        <Link to='https://www.digikala.com/faq/question/81/' className='link'>
          <img src={cash} />
          <p>امکان پرداخت در محل</p>
        </Link>
      </div>

      <div>
        <Link to='https://www.digikala.com/page/contact-us/' className='link'>
          <img src={days} />
          <p>هفت روزه هفته.24ساعته</p>
        </Link>
      </div>

      <div>
        <Link to='https://www.digikala.com/faq/question/83/' className='link'>
          <img src={support} />
          <p> هفت روز ضمانت بازگشت کالا</p>
        </Link>
      </div>

      <div>
        <Link to='https://www.digikala.com/faq/question/82/' className='link'>
          <img src={original} />
          <p> ضمانت اصل بودن کالا</p>
        </Link>
      </div>
    </div>
  )
}
