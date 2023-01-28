import { Product } from './../../models/products';

export interface IProductsState {
  products: Product[];
}

function state(): IProductsState {
  return {
    products: [],
  }
}

export default state;