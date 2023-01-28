import { GetterTree } from "vuex";
import { IState } from "..";
import { IProductsState } from "./state";

const getters: GetterTree<IProductsState, IState> = {
  getProducts (state) {
    return state.products;
  },
}

export default getters;