import React from 'react'
import {
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined
} from '@ant-design/icons'

export default function about () {
  return (
    <div className='about'>
      <div>
        <ul>
          <h2>با دیجی کالا</h2>
          <li>اتاق خبر دیجی کالا</li>
          <li> فروش در دیجی کالا</li>
          <li>فرصت های شغلی</li>
          <li> گزارش تخلف در دیجی کالا</li>
          <li> تماس با دیجی کالا</li>
          <li> درباره ی دیجی کالا</li>
        </ul>
      </div>

      <div>
        <ul>
          <h2>خدمات مشتریان</h2>
          <li> پاسخ به پرسش های متداول</li>
          <li> رویه های بازگرداندن کالا</li>
          <li>شرایط استفاده</li>
          <li> حریم خصوصی</li>
          <li> گزارش باگ</li>
        </ul>
      </div>

      <div>
        <ul>
          <h2>راهنمای خرید از دیجی کالا</h2>
          <li>نحوه ثبت سفارش</li>
          <li> رویه ی ارسال سفارش</li>
          <li>شیوه های پرداخت</li>
        </ul>
      </div>

      <div id='email'>
        <h2>!همراه ماباشید</h2>
        <div className='social'>
          <InstagramOutlined />
          <TwitterOutlined className='icon' />
          <LinkedinOutlined />
        </div>
        <p>با ثبت ایمیل از جدید ترین تخفیف ها با خبر شوید</p>
        <input type='text' className='email' placeholder='ایمیل شما' />
        <button>ثبت</button>
      </div>
    </div>
  )
}
