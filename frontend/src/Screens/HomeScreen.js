import React from 'react'
import { Row, Col } from 'react-bootstrap'
import product from '../components/Product'
import products from '../products'

const HomeScreen = () => {
  return (
    <>
      <h1>Hotles</h1>
      <Row>
        {/* use map to loop through products */}
        {products.map((product) => (
          <Col sm={12} md={6} lg={4}>
            {/* pass in the product from the arrow function */}
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
