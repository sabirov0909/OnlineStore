export const BASE_URL = "http://localhost:1337"
export const SIGN_UP = BASE_URL + '/api/auth/local/register'
export const SIGN_IN = BASE_URL + '/api/auth/local'

export const BRANDS = BASE_URL + '/api/brands'
export const CATEGORIES = BASE_URL + '/api/categories'
export const PRODUCTS = BASE_URL + '/api/products?populate=*'

export const PRODUCT = BASE_URL + '/api/products/id?populate=*'

export const REVIEWS = BASE_URL + '/api/reviews'
export const REVIEWS_OF_PRODUCT = BASE_URL + '/api/reviews?populate=*&filters[product][id][$eq]=productId'

export const ORDER_PRODUCTS = BASE_URL + '/api/order-products'
export const ORDER_PRODUCT = BASE_URL + '/api/order-products/id?populate=*'

export const ORDERS = BASE_URL + '/api/orders'
export const ORDERS_OF_USER = BASE_URL + '/api/orders?populate=*&filters[user][id][$eq]=userId'

