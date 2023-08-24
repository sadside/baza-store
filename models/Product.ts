export interface IProduct {
  name: string,
  product_id: number,
  modification_id: number,
  price: number,
  images: string[],
  colors_count: number,
  old_price: number,
  path?: {
    id: number,
    name: string,
    slug: string
  },
  slug:string
}

export type Modification = {
  id: number,
  color: {
    name: string,
    hex_code: string
  }
  size: string,
  images: string[],
  quantity: number
}

export interface IFullProduct {
  name: string,
  description?: string,
  price: number,
  images: string[],
  category: {
    name: string,
    size_image: string,
  },
  old_price: number,
  path: {
      id: number,
      name: string,
      slug: string
  },
  sizes: {
    name: string,
    mod_id: number
  }[],
  current_color: {
    name: string,
    hex_code: string,
    eng_name: string
  },
  colors: {
    slug: string,
    hex_code: string,
    name: string
  }[]
}