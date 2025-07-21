

export interface IProduct {
  id: string
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: productRating
}

export interface productRating {
  rate: number
  count: number
}
