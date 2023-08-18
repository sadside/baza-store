import { IProductCart } from "../cart/cart.interface"


const createListWithNewProduct = (products: IProductCart[], product: IProductCart) => {
  if (products.length) {
    products = products.map((item) => {
      if (product.id === item.id && product.size === item.size) {
        return {...item, count: item.count ? item.count + 1 : 1}
      } else {
        return {...item, count: item.count ? item.count : 1}
      }
    })

    
    let flag = true

    products.forEach(item => {
      if (item.id === product.id && product.size === item.size) flag = false
    })

    if (flag) products.push({...product, count: 1})

    return products

  } else {
    return [{...product, count: 1}]
  }
}

const incrementProductCount = (products: IProductCart[], {id, size}: IProductCart) => {
  return products.map(product => {
    if (product.id === id && product.size == size) {
      return ({
        ...product,
        count: product.count ? product.count + 1 : 1
      })
    }
    return product
  })

}

const decrementProductCount = (products: IProductCart[], {id, size}: IProductCart) => {
  let res = products.map(product => {

    if (product.id === id && product.size == size) {

      if (product.count && product.count - 1 == 0) return null

      return ({
        ...product,
        count: product.count ? product.count - 1 : 1
      })
    }
    return product
  })

  res = res.filter(item => !!item)
  return res

}


export {createListWithNewProduct, incrementProductCount, decrementProductCount}