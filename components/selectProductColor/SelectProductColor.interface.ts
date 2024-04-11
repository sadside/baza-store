export interface IColor {
  name: string,
  hex_code: string,
  sizes: size[],
  images: string[],
  id: number
}

type size = {
  id: number,
  size: string
}