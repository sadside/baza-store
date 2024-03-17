export interface IUser {
  birthday_date:string,
  email:string,
  name: string,
  phone: string,
  id: number,
  surname: string,
  city: string,
  street: string,
  house: string,
  frame: string,
  apartment: string,
}


export interface IFavorite {
  id: number,
  name: string,
  price: number,
  image: string,
  colours: string[],
  path: {
    id: number,
    name: string,
    slug: string
  },
}

export interface ICartItemServer {
  product_modification: {
    id: number,
    color: {
      name: string,
      hex_code: string,
    },
    size: string,
    images: string[],
    quantity: number,
  },
  quantity: 2,
}