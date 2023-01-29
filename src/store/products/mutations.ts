import { Product } from './../../models/products';
import { MutationTree } from "vuex";
import { IProductsState } from "./state";

const mutations: MutationTree<IProductsState> = {
  setProducts (state: IProductsState, products: Product[]) {
    state.products = products;
  },
  setSearchedProducts (state: IProductsState, searchedProducts: Product[]) {
    state.searchedProducts = searchedProducts;
  },
  //setIsLoading(state: IProductsState, value: boolean) {
  //  state.isLoading = value;
  //},
  setSelectedProduct(state, product: Product) {
    state.selectedProduct = product;
  }
}

export default mutations;