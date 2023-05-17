type Url = string
type Json =
| string
| number
| boolean
| null
| { [property: string]: Json }
| Json[]

type TProductId = string

type TprodcutAttributes = {
    description: string
    shape: string
    hardiness: string
    taste: string
}

type TProduct = {
    id: TProductId
    name: string
    sku: string
    price: number
    image: Url
    attributes: TprodcutAttributes
}

type TAPIAVODetailResponse = Tproduct
type TAPIAvoResponse ={
    lenght: number
    data: TProduct[]
    error?: string
}