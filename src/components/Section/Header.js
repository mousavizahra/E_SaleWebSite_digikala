import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import request from '../../tools/request'

const sorts = [
  { label: 'مرتب سازی: ' },
  { label: 'پربازدیدترین ', value: 'MOST-VEIW' },
  { label: 'جدیدترین ', value: 'MOST-NEW' },
  { label: 'پرفروش ترین ', value: 'MOST-SELL' },
  { label: 'ارزان ترین', value: 'LOW-COST' },
  { label: 'گران ترین', value: 'MOST-COST' },
  { label: 'سریع ترین ارسال', value: 'FAST' },
  { label: 'پیشنهاد خریداران', value: 'PROPOSAL' }
]
export default function Header () {
  const [product, setProduct] = useState({})

  const [sort, setSort] = useState('MOST_VIEW')

  const { id } = useParams()

  useEffect(() => {
    request(`/products/${id}`).then(({ data }) => setProduct(data))
  }, [id, sort])

  return (
    <div className='menu'>
      <div className=' filter'>
        <ul>
          {sorts.map(el => (
            <li key={product.id} onClick={() => setSort(el.value)}>
              {el.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
