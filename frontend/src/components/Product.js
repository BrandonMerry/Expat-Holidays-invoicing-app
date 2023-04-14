import React from 'react'
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    // makes product a bootstrap card
    <Card className='my- p-3 rounded'>
      <a href={`/product/${product._id}`}></a>
      <Card.Body>
        <Card.Title as='h6'>
          <strong>{product.brand}</strong>
        </Card.Title>
        <Card.Subtitle className='py-1' as='p'>
          {product.room}
        </Card.Subtitle>
        <Card.Text className='text-info' as='p'>
          {product.ebo}
        </Card.Text>
        <Card.Text as='p'>{product.description}</Card.Text>
        <Card.Text as='h5'>฿{product.price}</Card.Text>
        <ListGroup>
          <Button className='btn-block btn-success' type='button'>
            Add to invoice
          </Button>
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default Product
