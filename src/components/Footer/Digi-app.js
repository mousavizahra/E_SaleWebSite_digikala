import React from 'react'
import { Link } from 'react-router-dom'
// img
import FooterLogo from '../../assets/images/digiApp/footerlogo2.png'
import GooglePlay from '../../assets/images/digiApp/google-play.svg'
import Myket from '../../assets/images/digiApp/myket.svg'
import Sib from '../../assets/images/digiApp/sib-app.svg'
import CoffeBazzar from '../../assets/images/digiApp/coffe-bazzar.svg'
import More from '../../assets/images/digiApp/More.svg'

export default function digiApp () {
  return (
    <div id='digiApp'>
      <div className='main'>
        <div className='logo'>
          <img src={FooterLogo} />
          <h2>دانلود اپلیکیشن دیجی کالا</h2>
        </div>

        <div className='left'>
          <div className='googlePlay'>
            <Link to='https://play.google.com/store/apps/details?id=com.digikala.diagon&metrix_token=au9qq6&metrix_user_id=e068a61a-8a72-4cf5-8ce5-0f4f2e5003e3&utm_source=googleplay&utm_campaign=home_page&pli=1'>
              <img src={GooglePlay} />
            </Link>
          </div>

          <div className=' CoffeBazzar'>
            <Link to='https://cafebazaar.ir/app/com.digikala?metrix_token=k3of5r&metrix_user_id=e068a61a-8a72-4cf5-8ce5-0f4f2e5003e3&utm_source=cafebazaar&utm_campaign=home_page'>
              <img src={CoffeBazzar} />
            </Link>
          </div>

          <div className='Myket'>
            <Link to='https://myket.ir/app/com.digikala?utm_source=search-ads-gift&utm_source=myket&utm_medium=cpc&utm_campaign=home_page'>
              <img src={Myket} />
            </Link>
          </div>

          <div className='Sib'>
            <Link to='https://sibapp.com/applications/digikala?metrix_token=4gluyi&metrix_user_id=e068a61a-8a72-4cf5-8ce5-0f4f2e5003e3&utm_source=ios&utm_campaign=sibapp&utm_content=home_page'>
              <img src={Sib} />
            </Link>
          </div>

          <div className='More'>
            <Link to='https://www.digikala.com/landings/new-app/'>
              <img src={More} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
