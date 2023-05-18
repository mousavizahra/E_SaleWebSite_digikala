import React from 'react'
import logoPersian from '../../assets/images/logo-persian.png'
import { UpOutlined } from '@ant-design/icons'

export default function logo () {
  return (
    <div className='logo'>
      <div>
        <hr />
        <img src={logoPersian} />
        <button>
          {' '}
          بازگشت به بالا <UpOutlined />{' '}
        </button>
      </div>
      <div>
        <p>
          تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱ | ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
        </p>
      </div>
    </div>
  )
}
