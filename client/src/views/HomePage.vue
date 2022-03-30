<template>
  <AppHeader
    v-on:changeSearch="updateSearch($event)"
    v-on:changeCategory="onChangeCategory($event)"
    v-on:getAllProducts="getAll()"
  />
  <section>
    <div class="container p-3">
      <div class="row">
        <div class="col-sm-12">
          <ProductList :products="products" />
        </div>
      </div>
    </div>
  </section>
  <AppFooter />
</template>
  
  <script>
import ProductList from "@/components/Home/ProductList/ProductList";

export default {
  name: "HomePage",
  components: { ProductList },
  data() {
    return {
      products: [],
      search: "",
      categoryId: "",
    };
  },
  created() {
    this.getAll();
  },
  methods: {
    updateSearch(search) {
      this.search = search;
      if (search !== "") {
        this.$appAxios
          .get(`http://localhost:3000/search`, {
            params: {
              name: search,
            },
          })
          .then((response) => {
            this.products = response.data.map((item) => item._source);
          });
      } else {
        this.getAll();
      }
    },
    onChangeCategory(categoryId) {
      this.categoryId = categoryId;
      this.$appAxios
        .get("/products/category", {
          params: {
            category: this.categoryId,
          },
        })
        .then((response) => {
          this.products = response.data;
        });
    },

    getAll() {
      this.$appAxios.get("/products").then((response) => {
        this.products = response.data;
      });
    },
  },
};
</script>

