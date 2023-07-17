import { IProductCart } from "./cart.interface"

const createListWithNewProduct = (products: IProductCart[], product: IProductCart) => {
  if (products.length) {
    products = products.map((item) => {
      if (product.id === item.id) {
        return {...item, count: item.count ? item.count + 1 : 1}
      } else {
        return {...item, count: item.count ? item.count : 1}
      }
    })

    
    let flag = true

    products.forEach(item => {
      if (item.id === product.id) flag = false
    })

    if (flag) products.push({...product, count: 1})

    return products

  } else {
    return [{...product, count: 1}]
  }
}


export {createListWithNewProduct}