export interface IProduct {
    id_product: number,
    type_instrument?: string,
    type_product?: string,
    name?: string,
    cost?: number,
    brand?: string,
    countStock?: number,
    images?: string[]
}

export interface IProductInput {
    type_instrument: string,
    type_product: string,
    name: string,
    cost: number,
    brand: string,
    images: string[]
}