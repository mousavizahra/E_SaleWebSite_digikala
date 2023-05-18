import React from 'react'
import { Link } from 'react-router-dom'
// icon
import { ShopOutlined , FireOutlined , PercentageOutlined  , MenuOutlined  } from '@ant-design/icons'


export default function Nav () {
        return(
                <div className='nav'>
                    
                     <div className='nav-item' >
                         <span>
                         <MenuOutlined />
                            دسته بندی ها|
                        </span>
                    </div>

                    <div className='nav-item'>
                        <Link to='https://www.digikala.com/main/food-beverage/' className='link'>
                             سوپر مارکت
                            <ShopOutlined />
                            </Link>
                    </div>

                    <div className='nav-item' >
                         <Link to='https://www.digikala.com/best-selling/' className='link'>
                            <FireOutlined />
                             پرفروش ترین ها
                             </Link>
                    </div>

                    <div className='nav-item'>
                         <Link to='https://www.digikala.com/promotion-center/' className='link'>
                            <PercentageOutlined /> 
                                تخفیف ها و پیشنهادها
                        </Link>
                    </div>

                    <div className='nav-item'>
                        <Link to='https://www.digikala.com/incredible-offers/' className='link'>
                            <PercentageOutlined />
                            شگفت انگیزها
                            </Link>
                    </div>
                     
                   
                        <div className='nav-item'>
                             <Link to='https://www.digikala.com/faq/' className='link'>
                                  سوالی دارید؟ 
                                </Link>
                        </div>
                        <div className='nav-item'>
                             <Link to='https://www.digikala.com/landings/seller-introduction/' className='link'>
                                  در دیجی کالا بفروشید!  
                                  </Link>
                        </div>
                    
                 
                </div> 
        )
}