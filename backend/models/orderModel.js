import mongoose, { Mongoose } from 'mongoose'

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    orderItems: [
      {
        brand: { type: String, required: true },
        room: { type: String, required: true },
        numberOfRooms: { type: Number, required: true },
        nights: { type: Number, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Prodcut',
        },
      },
    ],
    basePrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    comissionPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    //will add in at v2 update
    // netComissionPrice: {
    //   type: Number,
    //   required: true,
    //   default: 0.0,
    // },
  },
  {
    timestamps: true,
  }
)

const Order = mongoose.model('Order', orderSchema)

export default Order
