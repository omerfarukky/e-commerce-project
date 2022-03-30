<template>
  <tr>
    <th scope="row">
      <img
        :src="`http://localhost:3000/uploads/products/` + this.product.image"
      />
    </th>
    <td>{{ product.name }}</td>
    <td>{{ product.category.name }}</td>
    <td>{{ product.description }}</td>
    <td>{{ product.price }}</td>
    <td>{{ product.stock }}</td>
    <td>
      <button type="button" class="btn btn-primary btn-lg">Güncelle</button>
    </td>
    <td class="btn-cls">
      <button
        @click="deleteProduct(product.id)"
        type="button"
        class="btn btn-danger btn-lg"
      >
        Sil
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "UserProductListItem",
  props: ["product"],

  methods: {
    deleteProduct(id) {
      this.$appAxios
        .delete(`http://localhost:3000/products/${id}`)
        .then((response) => {
          console.log(response.data.message);
        });
    },
  },
};
</script>

<style>
tr img {
  height: 70px !important;
  width: 70px !important;
}
.btn-cls {
  padding-top: 20px !important;
}
table .btn {
  height: 30px !important;
  width: 90px !important;
  font-size: 15px;
  align-items: center;
}
</style>
