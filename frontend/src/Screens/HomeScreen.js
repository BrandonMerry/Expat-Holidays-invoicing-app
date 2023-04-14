import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

const HomeScreen = () => {
  return (
    <>
      <h1>Hotels</h1>
      <Row>
        {/* use map to loop through products */}
        {products.map((product) => (
          <Col sm={12} md={6} lg={3}>
            {/* pass in the product from the arrow function */}
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
