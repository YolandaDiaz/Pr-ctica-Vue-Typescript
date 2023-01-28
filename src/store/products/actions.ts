import YoliApi from "@/api/YoliApi";
import { Product } from "@/models/products";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IProductsState } from "./state";

const actions: ActionTree<IProductsState, IState> = {
  async fetchProducts({commit}) {
    const {data} = await YoliApi.get<unknown, AxiosResponse<Product[]>>('/products');
    commit('setProducts', data);
  }
}

export default actions;
