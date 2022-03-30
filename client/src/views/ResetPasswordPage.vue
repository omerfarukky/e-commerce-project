<template>
  <AppHeader />
  <div class="alert alert-success" role="alert" v-if="this.message">
    <h3>{{ this.message }}</h3>
  </div>
  <div id="logreg-forms">
    <form class="form-signin" @click.prevent="onSubmit">
      <h1 class="h3 mb-3 font-weight-normal" style="text-align: center">
        Şifre Sıfırlama
      </h1>

      <input
        type="email"
        id="inputEmail"
        class="form-control"
        v-model="this.email"
        placeholder="Email address"
        required
      />

      <button class="btn btn-success btn-block btn-lg" type="submit">
        <i class="fas fa-sign-in-alt"></i> Şifre Sıfırla
      </button>
    </form>
  </div>
  <!--/form-->
  <AppFooter />
</template>


<script>
export default {
  data() {
    return {
      email: null,
      message: null,
    };
  },
  methods: {
    onSubmit() {
      this.$appAxios
        .post(`http://localhost:3000/users/reset-password`, {
          email: this.email,
        })
        .then((response) => {
          this.message = response.data.message;
        });
    },
  },
};
</script>


<style>
</style>