<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Urun Resmi</th>
        <th scope="col">Urun Adı</th>
        <th scope="col">Kategori</th>
        <th scope="col">Acıklaması</th>
        <th scope="col">Fiyatı</th>
        <th scope="col">Adedi</th>
        <th scope="col">Güncelle</th>
        <th scope="col">Sil</th>
      </tr>
    </thead>
    <tbody>
      <UserProductListItem
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </tbody>
  </table>
</template>

<script>
import UserProductListItem from "./UserProductListItem/UserProductListItem.vue";
export default {
  name: "UserProductList",
  components: { UserProductListItem },
  props: ["products"],
};
</script>

<style>
.table {
  font-size: large;
  padding-top: 20px !important;
}
</style>