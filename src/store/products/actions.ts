import YoliApi from "@/api/YoliApi";
import { Product } from "@/models/products";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IProductsState } from "./state";

const actions: ActionTree<IProductsState, IState> = {
  async fetchProducts({commit}) {
    //commit("setIsLoading", true);
    const {data} = await YoliApi.get<unknown, AxiosResponse<Product[]>>('/products');
    //commit("setIsLoading", false);
    commit('setProducts', data);
  },
  async fetchProductsById({commit}, productId: number) {
    //commit("setIsLoading", true);
    const { data } = await YoliApi.get<unknown, AxiosResponse<Product>>(
      `/products/${productId}`
    );
    //commit("setIsLoading", false);
    commit("setSelectedProduct", data);
  },
};

export default actions;
