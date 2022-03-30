import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state: {
    token: "",
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = "";
    },
  },
  actions: {
    login({ commit }, authData) {
      return axios
        .post("http://localhost:3000/users/login", {
          email: authData.email,
          password: authData.password,
        })
        .then((response) => {
          commit("setToken", response.data.tokens.access_token);
          localStorage.setItem("token", response.data.tokens.access_token);
        });
    },
    logout({ commit }) {
      commit("clearToken");
      localStorage.removeItem("token");
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.token !== "";
    },
  },
});

export default store;
