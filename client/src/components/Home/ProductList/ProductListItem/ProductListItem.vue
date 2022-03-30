<template>
  <div class="col-sm-4 mb-3">
    <div class="card">
      <router-link
        :to="{ name: 'ProductDetailPage', params: { id: product.id } }"
        ><div class="text-center">
          <img
            :src="
              `http://localhost:3000/uploads/products/` + this.product.image
            "
            class="img-fluid tm-catalog-item-img"
          />
        </div>
        <div class="card-body">
          <div class="productinfo text-center">
            <p>{{ product.name }}</p>
             <h2>{{ product.price }} ₺</h2>
          </div>
        </div>
      </router-link>
      <div class="productCard">
        <a href="#" class="btn btn-default add-to-cart btn-lg btn-block"
          ><i class="fa fa-shopping-cart"></i>Sepete Ekle</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductListItem",
  props: ["product"],
};
</script>

<style>

.text-center img {
  height: 250px !important;
  width: 200px !important;
}

.productCard a {
  background-color: #fe980f !important;
  max-width: 100% !important;
}
.card-body{
  max-height: 50% !important;
}
.productinfo p {
  color: #050300 !important;
  font-size: large;
}
p, h2 {
    width: 100%;
    overflow: hidden; /* taşanları gizle */
    white-space: nowrap; /* alt satıra hiç inme */
}
</style>