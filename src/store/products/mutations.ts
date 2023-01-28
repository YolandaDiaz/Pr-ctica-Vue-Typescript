import { Product } from './../../models/products';
import { MutationTree } from "vuex";
import { IProductsState } from "./state";

const mutations: MutationTree<IProductsState> = {
  setProducts (state: IProductsState, products: Product[]) {
    state.products = products;
  },
}

export default mutations;