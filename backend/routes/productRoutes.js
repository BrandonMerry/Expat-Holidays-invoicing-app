import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'

//fetches all products
// Get request to /api/products
// public access

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

//fetches single products
// Get request to /api/products:id
// public access

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (prodcut) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Product is not found')
    }
  })
)

export default router
