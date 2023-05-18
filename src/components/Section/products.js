import { useEffect, useState } from 'react'
import Cards from './Card'
import axios from 'axios'

export default function Products () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios('/v1/categories/mobile-phone/brands/apple/search/?page=1').then(
      ({ data }) => setProducts(data.data.products)
    )
  }, [])
  // console.log(products)
  return (
    <div className='product'>
      {products.map(product => (
        <Cards key={product.id} product={product} />
      ))}
    </div>
  )
}
