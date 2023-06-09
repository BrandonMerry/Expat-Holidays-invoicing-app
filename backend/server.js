// entry point for sever
import express from 'express'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('api works')
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`is running in ${process.env.NODE_ENV} on port ${PORT}`.bgWhite)
)
