<template>
 <div class="panel-group category-products" id="accordian">
  <router-link :to="{ name: 'UserProductsPage' }" class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordian" href="#">
          Urunlerim
        </a>
      </h4>
    </div>
  </router-link>
   <router-link :to="{ name: 'AddProductPage' }" class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordian" href="#">
          Satış Yap
        </a>
      </h4>
    </div>
  </router-link>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
};
</script>