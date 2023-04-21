import mongoose from 'mongoose'

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    brand: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    room: {
      type: String,
      required: true,
    },
    dates: {
      type: String,
      required: true,
    },
    ebo: {
      type: String,
      required: true,
    },
    categroy: {
      type:  String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },
    numOfRooms: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    nights: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)

export default Product
