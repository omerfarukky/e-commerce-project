<template>
  <AppHeader />
  <section>
    <div class="container">
      <div class="product-details">
        <div class="row">
          <!--product-details-->
          <div class="col-sm-5">
            <div class="view-product">
              <img
                :src="
                  `http://localhost:3000/uploads/products/` +
                  this.productDetail.image
                "
                alt=""
              />
            </div>
            <div
              id="similar-product"
              class="carousel slide"
              data-ride="carousel"
            >
              <!-- Controls -->
              <a
                class="left item-control"
                href="#similar-product"
                data-slide="prev"
              >
                <i class="fa fa-angle-left"></i>
              </a>
              <a
                class="right item-control"
                href="#similar-product"
                data-slide="next"
              >
                <i class="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
          <div class="col-sm-7">
            <div class="product-information">
              <!--/product-information-->
              <h2>{{ this.productDetail.name }}</h2>
              <span>
                <div>
                  <span>{{ this.productDetail.price }} ₺</span>
                </div>
                <button
                  type="button"
                  class="btn btn-fefault cart add-to-cart btn-lg"
                >
                  <i class="fa fa-shopping-cart"></i>
                  Sepete Ekle
                </button>
              </span>
              <p><b>Stok:</b> {{ this.productDetail.stock }}</p>
            </div>
            <!--/product-information-->
          </div>
        </div>
      </div>
      <div class="category-tab shop-details-tab">
        <div class="row">
          <!--category-tab-->
          <div class="col-sm-12">
            <ul class="nav nav-tabs">
              <li class="active">
                <a href="#" data-toggle="tab">Açıklama</a>
              </li>
            </ul>
          </div>
          <h2>{{ this.productDetail.name }}</h2>
          <p>{{ this.productDetail.description }}</p>
        </div>
      </div>
      <!--/category-tab-->
    </div>
  </section>
  <!--/product-details-->
  <AppFooter />
</template>

 <script>
export default {
  data() {
    return {
      productDetail: {},
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.$appAxios.get(`/products/${this.id}`).then((response) => {
      this.productDetail = response.data.find((item) => item.id == this.id);
    });
  },
};
</script>

<style>
.product-details {
  font-size: 15px;
}
.cart {
  background-color: #fe980f !important ;
}
.category-tab h2 {
  font-size: 25px;
}
.category-tab p {
  font-size: 15px;
}
</style>