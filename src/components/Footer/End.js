import React from 'react'
import { Link } from 'react-router-dom'
// img
import DigiClub from '../../assets/images/end/digiclub.svg'
import DigiPay from '../../assets/images/end/digipay.svg'
import DigiFy from '../../assets/images/end/digify.svg'
import Digikala from '../../assets/images/end/digikala-business.svg'
import DigiMag from '../../assets/images/end/digimag.svg'
import DigiMehr from '../../assets/images/end/digiMehr.svg'
import DigiNext from '../../assets/images/end/diginext.svg'
import DigiPlus from '../../assets/images/end/digiplus.svg'
import DigiStyle from '../../assets/images/end/digistyle.svg'
import Fidibo from '../../assets/images/end/fidibo.svg'
import Ganjeh from '../../assets/images/end/ganjeh.svg'
import Jet from '../../assets/images/end/jet.svg'
import Komodaa from '../../assets/images/end/komodaa.svg'
import Magnet from '../../assets/images/end/magnet.svg'
import Pindo from '../../assets/images/end/pindo.svg'
import Smartech from '../../assets/images/end/smartech.svg'
import Express from '../../assets/images/end/digiexpress.svg'

export default function end () {
  return (
    <div id='end'>
      <div className='main'>
        <p>
          {' '}
          برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
          کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه
          آنلاین دیجی‌کالا) است.
        </p>
      </div>

      <div className='end'>
        <div className='mag'>
          <Link to='https://www.digikala.com/mag/'>
            <img src={DigiMag} />
          </Link>
        </div>

        <div>
          <Link to='https://www.digistyle.com/'>
            <img src={DigiStyle} />
          </Link>
        </div>

        <div>
          <Link to='https://www.digikala.com/plus/landing/'>
            <img src={DigiPlus} />
          </Link>
        </div>

        <div>
          <Link to='https://www.digikala.com/digiclub/'>
            <img src={DigiClub} />
          </Link>
        </div>

        <div>
          <Link to='https://digikalajet.com/'>
            <img src={Jet} />
          </Link>
        </div>

        <div>
          <Link to='https://www.digikala.com/landings/magnet/?utm_source=Digikala_web&utm_medium=Footer'>
            <img src={Magnet} />
          </Link>
        </div>

        <div>
          <Link to='https://www.digikala.com/mehr/'>
            <img src={DigiMehr} />
          </Link>
        </div>

        <div>
          <Link to='https://fidibo.com/'>
            <img src={Fidibo} />
          </Link>
        </div>

        <div>
          <Link to='https://diginext.ai/'>
            <img src={DigiNext} />
          </Link>
        </div>

        <div>
          <Link to='https://www.pindo.ir/?utm_source=digikala&utm_medium=referral&utm_campaign=pindo_logo&utm_content=/search/category-mobile-phone/apple/'>
            <img src={Pindo} />
          </Link>
        </div>

        <div>
          <Link to='https://www.komodaa.com/'>
            <img src={Komodaa} />
          </Link>
        </div>

        <div>
          <Link to='https://digiexpress.ir/'>
            <img src={Express} />
          </Link>
        </div>

        <div>
          <Link to='https://ganje.net/?utm_source=Digikala_web&utm_medium=Footer'>
            <img src={Ganjeh} />
          </Link>
        </div>

        <div>
          <Link to='https://digify.shop/'>
            <img src={DigiFy} />
          </Link>
        </div>

        <div>
          <Link to='https://smartech.ir/'>
            <img src={Smartech} />
          </Link>
        </div>

        <div>
          <Link to='https://www.digikalabusiness.com/'>
            <img src={Digikala} />
          </Link>
        </div>
      </div>
    </div>
  )
}
