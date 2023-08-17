export interface IColor {
    name: string,
    hex_code: string,
    id: number,
    sizes: size[]
}

type size = {
    id: number,
    size: string
}