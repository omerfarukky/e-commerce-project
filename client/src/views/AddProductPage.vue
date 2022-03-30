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
          <ProductCreate />
        </div>
      </div>
    </div>
  </section>
  <AppFooter />
</template>

<script>
import UserInfo from "@/components/User/UserInfo";
import ProductCreate from "@/components/User/ProductCreate";
export default {
  components: { UserInfo, ProductCreate },
  
};
</script>

<style>
.card {
  font-size: 25px;
}
</style>