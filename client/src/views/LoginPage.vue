<template>
  <AppHeader />
  <div id="logreg-forms">
    <form class="form-signin" @submit.prevent="onSubmit">
      <h1 class="h3 mb-3 font-weight-normal" style="text-align: center">
        Giriş Yap
      </h1>
      <div class="social-login">
        <button class="btn facebook-btn social-btn" type="button">
          <span><i class="fab fa-facebook-f"></i> Facebook</span>
        </button>
        <button class="btn google-btn social-btn" type="button">
          <span><i class="fab fa-google-plus-g"></i> Google+</span>
        </button>
      </div>
      <input
        type="email"
        id="inputEmail"
        v-model="user.email"
        class="form-control"
        placeholder="Email address"
        required
      />
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        v-model="user.password"
        placeholder="Password"
        required
      />

      <button class="btn btn-success btn-block btn-lg" type="submit">
        <i class="fas fa-sign-in-alt"></i> Giriş
      </button>
      <router-link :to="{ name: 'ResetPasswordPage' }">
        <a href="#" id="forgot_pswd">Şifremi Unuttum?</a>
      </router-link>

      <hr />
      <!-- <p>Don't have an account!</p>  -->
      <router-link
        :to="{ name: 'RegisterPage' }"
        class="btn btn-primary btn-block btn-lg"
      >
        Kayıt Ol
      </router-link>
    </form>
  </div>
  <!--/form-->
  <AppFooter />
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("login",{...this.user}).then(() => {
        this.$router.push("/")
      })
    }

  },
};
</script>

<style>
</style>