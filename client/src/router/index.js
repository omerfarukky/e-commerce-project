import { createRouter, createWebHistory } from "vue-router";
import store from "../store/store"
const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("@/views/HomePage"),
  },
  {
    name: "LoginPage",
    path: "/giris-yap",
    component: () => import("@/views/LoginPage"),
  },
  {
    name: "ResetPasswordPage",
    path: "/giris-yap/sifre-sifirlama",
    component: () => import("@/views/ResetPasswordPage"),
  },
  {
    name: "RegisterPage",
    path: "/kayit-ol",
    component: () => import("@/views/RegisterPage"),
  },
  {
    name: "CardPage",
    path: "/sepetim",
    component: () => import("@/views/CardPage"),
  },
  {
    name: "CheckoutPage",
    path: "/siparis-kontrol",
    component: () => import("@/views/CheckoutPage"),
  },
  {
    name: "ProductDetailPage",
    path: "/urun-detay/:id",
    component: () => import("@/views/ProductDetailPage"),
    props:true
  },

  {
    name: "UserProductsPage",
    path: "/urunlerim",
    component: () => import("@/views/UserProductsPage"),
    beforeEnter: (to, from, next) => {
      if(store.getters.isAuthenticated){
        next();
      }
      else{
        next("/giris-yap")
      }
    }
  },
  {
    name: "AddProductPage",
    path: "/urun-ekleme",
    component: () => import("@/views/AddProductPage"),
    beforeEnter: (to, from, next) => {
      if(store.getters.isAuthenticated){
        next();
      }
      else{
        next("/giris-yap")
      }
    }
  },  
];

export default createRouter({
  routes,
  history: createWebHistory(),
});
