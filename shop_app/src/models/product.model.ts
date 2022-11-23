interface IStock{
    stock: boolean
}

export interface IProduct extends IStock{
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {[key: string]: number}    
}

export interface ProductCardProps {
    product: IProduct
}
