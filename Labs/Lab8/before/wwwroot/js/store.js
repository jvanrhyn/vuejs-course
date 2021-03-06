﻿// store.js
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    products: [],
  },
  mutations: {
    setProducts: function (state, newCatalog) {
      state.products = newCatalog;
    },
    addProductToCart: function(state, product) {
      state.cart.push(product);
    },
    clearCart: function (state) {
      state.cart = [];
    }
  },
  actions: {
    loadCatalog: function (context) {
      return new Promise(function (resolve, reject) {
        axios.get("/api/products")
          .then(function (res) {
            context.commit("setProducts", res.data.results);
            resolve();
          })
          .catch(function () {
            reject();
          });
      });
    }
  },
  getters: {}
});