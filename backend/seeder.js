import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(sampleProducts)

    console.log('Data has been Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.bold)
    // use 1 "exit with failure"
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data has been removed!'.gray.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.bold)
    // use 1 "exit with failure"
    process.exit(1)
  }
}

// this process.argv is the way to call this function
// the array [2] is for whatever is passed in the scrip of "node backend/seeder"

if (process.argv[2] === 'd') {
  destroyData()
} else {
  importData()
}
