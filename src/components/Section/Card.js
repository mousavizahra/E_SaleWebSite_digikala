import { Card } from 'antd'

export default function Cards ({ product }) {
  console.log(product)
  const { Meta } = Card
  return (
    <div className='card'>
      <Card
        hoverable
        style={{
          width: 240
        }}
        cover={<img alt='example' src={product.images.main.url[0]} />}
      >
        <Meta
          title={product.title_fa}
          description={product.properties.min_price_in_last_month}
        />
      </Card>
    </div>
  )
}
