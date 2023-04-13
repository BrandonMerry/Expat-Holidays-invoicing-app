import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    // makes product a bootstrap card
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}></a>
      <Card.Body>
        <Card.Title as='h5'>{product.name}</Card.Title>
        <Card.Text as='p'>{product.description}</Card.Text>

        <Card.Text as='h3'>฿{product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
