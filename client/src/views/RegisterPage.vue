<template>
  <AppHeader />
  <div id="logreg-forms">
    <form class="form-signin" @submit.prevent="onSubmit">
      <h1 class="h3 mb-3 font-weight-normal" style="text-align: center">
        Kayıt Ol
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
        type="text"
        id="inputName"
        v-model="user.firstName"
        class="form-control"
        placeholder="Name"
        required
      />
      <input
        type="text"
        id="inputSurName"
        class="form-control"
         v-model="user.surname"
        placeholder="Surname"
        required
      />
      <input
        type="email"
        id="inputEmail"
        class="form-control"
         v-model="user.email"
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
        Kayıt Ol
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
      user: {
        firstName: null,
        surname: null,
        email: null,
        password: null,
      },
    };
  },
  methods: {
    onSubmit() {
      this.$appAxios
        .post("/users/register", {
          firstName: this.user.firstName,
          surname: this.user.surname,
          email: this.user.email,
          password: this.user.password,
        })
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>