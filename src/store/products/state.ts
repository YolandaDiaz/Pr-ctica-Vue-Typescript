import { Product } from './../../models/products';

export interface IProductsState {
  products: Product[];
  //isLoading: boolean;
  selectedProduct: Product | null;
  searchedProducts: Product[];
}

function state(): IProductsState {
  return {
    products: [],
    //isLoading: false,
    selectedProduct: null,
    searchedProducts: [],
  }
}

export default state;