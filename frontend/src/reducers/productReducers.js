import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCCESS,
  PRODUCT_LIST_FAIL,
} from '../constants/productConstants'

// reducers take in state and action
export const prodcutListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_LIST_SUCCCESS:
      return { loading: false, products: action.payload }
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
