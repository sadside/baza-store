export interface IProduct {
  name: string,
  id: number,
  price: number,
  image: string,
  colours: any[],
  path?: {
    id: number,
    name: string,
    slug: string
  }
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
  id: number,
  name: string,
  description?: string,
  price: number,
  image: string,
  category: number,
  path: {
      id: number,
      name: string,
      slug: string
  },
  modifications: Modification[],
  full_path: string,
  slug_path: string
}