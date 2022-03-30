<template>
  <!-- FeaturesItems -->
  <div class="features_items">
    <!--features_items-->
    <h2 class="title text-left">Urunler</h2>
    <div class="row">
      {{myData}}
      <ProductListItem v-for="product in products" :key="product.id" :product="product"/>
    </div>
  </div>
</template>

<script>
import ProductListItem from "./ProductListItem/ProductListItem.vue";
export default {
  components: { ProductListItem },
  props:["products"]
};
</script>
