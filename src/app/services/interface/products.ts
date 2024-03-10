export interface Products {
    sold: number
    image: string
    name: string
    images: string[]
    subcategory: Subcategory[]
    ratingsQuantity: number
    _id: string
    title: string
    slug: string
    description: string
    quantity: number
    price: number
    imageCover: string
    category: Category
    brand: Brand
    ratingsAverage: number
    createdAt: string
    updatedAt: string
    id: string
  }

  export interface Subcategory {
    _id: string
    name: string
    slug: string
    category: string
  }

  export interface Category {
    _id: string
    name: string
    slug: string
    image: string
  }

  export interface Brand {
    _id: string
    name: string
    slug: string
    image: string
  }


