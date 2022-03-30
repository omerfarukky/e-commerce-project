<template>
  <div class="alert alert-success" role="alert" v-if="access">
    <h3>Urun Basarıyla Eklenmiştir</h3>
  </div>
  <form @submit="onSave">
    <div class="form-area">
      <div class="form-group">
        <label for="exampleFormControlFile1">Urun Resimleri</label>
        <input
          type="file"
          name="product_image"
          class="form-control-file form-control-lg"
          id="exampleFormControlFile1"
          @change="onFileUpload"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Ürün Adı</label>
        <input
          type="text"
          class="form-control form-control-lg"
          id="exampleFormControlInput1"
          placeholder="Ürün Adı"
          v-model="name"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Kategoriler</label>
        <select
          class="form-control form-control-lg"
          id="exampleFormControlSelect1"
          v-on:change="categorychange($event)"
        >
          <option selected>Kategory Seçin</option>
          <option
            v-for="category in categories"
            :key="category.id"
            :id="category.id"
          >
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Ürün Açıklaması</label>
        <textarea
          class="form-control form-control-lg"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="description"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Ürün Fiyatı</label>
        <input
          type="text"
          class="form-control form-control-lg"
          id="exampleFormControlInput1"
          placeholder="Ürün Fiyatı"
          v-model="price"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Ürün Adedi</label>
        <input
          type="text"
          class="form-control form-control-lg"
          id="exampleFormControlInput1"
          placeholder="Ürün Adedi"
          v-model="stock"
        />
      </div>
      <button type="submit" class="btn btn-primary mb-2 btn-lg">
        <span>Ürünü Ekle</span>
      </button>
    </div>
  </form>
</template>


  <script>
export default {
  name: "ProductCreate",
  components: {},
  data() {
    return {
      product_image: null,
      name: null,
      categoryId: null,
      description: null,
      price: null,
      stock: null,
      access: false,
      categories: [],
    };
  },
  created() {
    this.getAllCategories();
  },
  methods: {
    getAllCategories() {
      this.$appAxios.get("/category").then((response) => {
        this.categories = response.data;
      });
    },
    categorychange(event) {
      this.categoryId = event.target[event.target.selectedIndex].id;
    },

    onFileUpload(event) {
      this.product_image = event.target.files[0];
    },
    onSave(e) {
      e.preventDefault();
      let formData = new FormData();
      formData.append(
        "product_image",
        this.product_image,
        this.product_image.name
      );
      formData.append("name", this.name);
      formData.append("description", this.description);
      formData.append("categoryId", this.categoryId);
      formData.append("price", this.price);
      formData.append("stock", this.stock);
      
      this.$appAxios
        .post("/products", formData)
        .then((response) => {
          console.log(response);
          this.access = true;
          this.product_image = null;
          this.name = null;
          this.categoryId = null;
          this.description = null;
          this.price = null;
          this.stock = null;

          setTimeout(() => {
            this.access = false;
          }, 5000);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.form-area {
  font-size: medium;
}
.form-control-lg {
  font-size: medium;
}
button {
  height: 40px;
  max-width: max-content;
}
span {
  font-size: large;
}
</style>
