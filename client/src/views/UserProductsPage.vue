<template>
  <AppHeader />
  <section>
    <div class="container p-3">
      <div class="row">
        <div class="col-sm-2">
          <div class="left-sidebar">
            <h2>Hesabım</h2>
            <UserInfo />
          </div>
        </div>
        <div class="col-sm-10 padding-right">
          <UserProductsList :products="products" />
        </div>
      </div>
    </div>
  </section>
  <AppFooter />
</template>

<script>
import UserProductsList from "@/components/UserProductsList/UserProductsList";
import UserInfo from "@/components/User/UserInfo";
export default {
  components: { UserProductsList, UserInfo },
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.getAll();
  },
  methods: {
    getAll() {
      this.$appAxios.get("/users/products").then((response) => {
        this.products = response.data;
      });
    },
  },
};
</script>

<style>
.card {
  font-size: 25px;
}
</style>