import { Menu } from 'antd'
import '../scss/style.scss'
function getItem (label, key, children, type) {
  return {
    key,
    children,
    label,
    type
  }
}
const items = [
  getItem('رنگ ها', 'sub1', [
    getItem(
      'Item 1',
      'g1',
      null,
      [getItem('Option 1', '1'), getItem('Option 2', '2')],
      'group'
    ),
    getItem(
      'Item 2',
      'g2',
      null,
      [getItem('Option 3', '3'), getItem('Option 4', '4')],
      'group'
    )
  ]),

  getItem('خدمات دیجی پلاس', 'sub2', [
    getItem('Option 5', '5'),
    getItem('Option 6', '6')
  ]),

  getItem(' ارسال فروشنده'),

  getItem('کالا های موجود'),

  getItem(' کالاهای موحود در انبار دیجی کالا'),

  getItem('نوع فروشنده', 'sub3', [
    getItem('Option 7', '7'),
    getItem('Option 8', '8')
  ]),

  getItem('نوع', 'sub4', [
    getItem('Option 9', '9'),
    getItem('Option 10', '10')
  ]),

  getItem('شبکه های ارتباطی', 'sub5', [
    getItem('Option 11', '11'),
    getItem('Option 12', '12')
  ]),

  getItem('فن آوری موبایل', 'sub6', [
    getItem('Option 13', '13'),
    getItem('Option 14', '14')
  ]),

  getItem(' توضیحات سیم کارت', 'sub7', [
    getItem('Option 15', '15'),
    getItem('Option 16', '16')
  ]),

  getItem(' نوع پردازنده', 'sub8', [
    getItem('Option 17', '17'),
    getItem('Option 18', '18')
  ]),

  getItem('ویژگی‌های خاص', 'sub9', [
    getItem('Option 19', '19'),
    getItem('Option 20', '20')
  ]),

  getItem('رزولوشن عکس', 'sub10', [
    getItem('Option 21', '21'),
    getItem('Option 22', '22')
  ]),

  getItem(' فناوری فوکوس ', 'sub11', [
    getItem('Option 23', '23'),
    getItem('Option 24', '24')
  ]),

  getItem(' تعداد سیم کارت', 'sub12', [
    getItem('Option 25', '25'),
    getItem('Option 26', '26')
  ]),

  getItem('قابلیت‌های نرم‌افزاری ', 'sub13', [
    getItem('Option 27', '27'),
    getItem('Option 28', '28')
  ]),

  getItem(' بازه‌ی اندازه صفحه نمایش', 'sub14', [
    getItem('Option 29', '29'),
    getItem('Option 30', '30')
  ]),

  getItem(' پشتیبانی از کارت حافظه', 'sub15', [
    getItem('Option 31', '31'),
    getItem('Option 32', '32')
  ]),

  getItem(' دوربین‌های پشت گوشی', 'sub16', [
    getItem('Option 33', '33'),
    getItem('Option 34', '34')
  ]),

  getItem(' فناوری صفحه‌نمایش', 'sub17', [
    getItem('Option 35', '35'),
    getItem('Option 36', '36')
  ]),

  getItem(' ویدیو', 'sub18', [
    getItem('Option 37', '37'),
    getItem('Option 38', '38')
  ]),

  getItem(' موسیقی', 'sub19', [
    getItem('Option 39', '39'),
    getItem('Option 40', '40')
  ]),

  getItem('محافظت  ', 'sub20', [
    getItem('Option 41', '41'),
    getItem('Option 42', '42')
  ]),

  getItem('مقدار RAM ', 'sub21', [
    getItem('Option 43', '43'),
    getItem('Option 44', '44')
  ])
]

const App = () => {
  const onClick = e => {
    console.log('click ', e)
  }
  return (
    <Menu
      onClick={onClick}
      className='menu-sidebar'
      defaultSelectedKeys={['1']}
      mode='inline'
      items={items}
    />
  )
}
export default App
