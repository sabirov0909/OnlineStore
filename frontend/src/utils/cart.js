export function addToCart(cart, setCart, product) {
    let hasProduct = cart.find(item => item.product.id === product.id)
    if (!hasProduct) {
        setCart([...cart, {count: 1, product: product}])
    } else {
        setCart(cart.map(item => {
            if (item.product.id === product.id) {
                item.count++
                return item
            }
            return item
        }))
    }
}

export const removeFromCart = (cart, setCart, cartItem) => {
    setCart(cart.filter(item => item.product.id !== cartItem.product.id))
}

export function increase(cart, setCart, cartItem) {
    setCart(cart.map(item => {
        if (item.product.id === cartItem.product.id) {
            item.count++
            return item
        }
        return item
    }))
}

export function decrease(cart, setCart, cartItem) {
    if (cartItem.count > 1) {
        setCart(cart.map(item => {
            if (item.product.id === cartItem.product.id) {
                item.count--
                return item
            }
            return item
        }))
    } else removeFromCart(cart, setCart, cartItem)
}

export function getCartCount(cart) {
    return cart.reduce((sum, item) => sum + item.count, 0)
}

export const getCountOfProduct = (cart, productId) => {
    const item = cart.find(item => item.product.id === productId)
    return item ? item.count : 0
}
