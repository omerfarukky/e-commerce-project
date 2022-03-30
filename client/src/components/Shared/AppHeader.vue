<template>
  <header id="header">
    <div class="header_top">
      <!--header_top-->
      <div class="container">
        <div class="row">
          <div class="col-sm-7">
            <div class="contactinfo">
              <ul class="nav nav-pills">
                <li>
                  <a href="#"><i class="fa fa-phone"></i> +2 95 01 88 821</a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-envelope"></i> info@domain.com</a>
                </li>
                <li><a href="contact-us.html">Contact</a></li>
              </ul>
            </div>
          </div>

          <div class="col-sm-5">
            <div class="social-icons pull-right">
              <ul class="nav">
                <li>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-dribbble"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-google-plus"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--header-middle-->
    <div class="header-middle">
      <div class="container">
        <div class="row">
          <div class="col-md-2 clearfix">
            <parent class="logo pull-left">
              <router-link
                :to="{ name: 'HomePage' }"
                @click="onclickgetAllProduct($event)"
              >
                <img src="@/assets/images/home/logo.png" alt=""
              /></router-link>
            </parent>
          </div>
          <div class="col-md-5 clearfix">
            <div class="input-group rounded">
              <input
                type="search"
                class="form-control rounded searchStyle"
                placeholder="Search"
                aria-label="Search"
                v-model="search"
                v-on:change="changeToSearch"
                aria-describedby="search-addon"
              />
            </div>
          </div>
          <div class="col-md-5 clearfix">
            <div class="shop-menu clearfix pull-right">
              <ul class="nav nav-pills nav navbar-nav collapse navbar-collapse">
                <li>
                  <router-link :to="{ name: 'CardPage' }">
                    <i class="fa fa-shopping-cart"></i>Sepet
                  </router-link>
                </li>
                <li class="dropdown" :class="LoginClass">
                  <a href="#"
                    ><i class="fa fa-lock"></i>Üye Grisi<i
                      class="fa fa-angle-down"
                    ></i
                  ></a>
                  <ul role="menu" class="sub-menu2">
                    <li>
                      <router-link :to="{ name: 'LoginPage' }">
                        <i class="fa fa-lock"></i> Giris Yap
                      </router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'RegisterPage' }">
                        <i class="fa fa-lock"></i> Kayıt Ol
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li class="dropdown" :class="LogoutClass">
                  <a href="#"
                    ><i class="fa fa-user"></i> Hesabım
                    <i class="fa fa-angle-down"></i
                  ></a>
                  <ul role="menu" class="sub-menu2">
                    <li>
                      <router-link :to="{ name: 'UserProductsPage' }">
                        <i class="fa fa-user"></i> Urunlerim
                      </router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'AddProductPage' }">
                        <i class="fa fa-user"></i> Urun Sat
                      </router-link>
                    </li>

                    <li>
                      <a @click.prevent="logout" href="#"
                        ><i class="fa fa-sign-out"></i> Cıkıs Yap</a
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--header-bottom-->
    <div class="header-bottom">
      <div class="container">
        <div class="mainmenu pull-left">
          <ul
            @click="onclikCategory($event)"
            class="nav navbar-nav collapse navbar-collapse"
          >
            <li v-for="category in categories" :key="category.id">
              <a href="#" :id="category.id">{{ category.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import store from "@/store/store";
export default {
  data() {
    return {
      search: this.$route.query.search,
      categoryId: "",
      categories: [],
    };
  },
  created() {
    this.getAllCategories();
  },
  methods: {
    getAllCategories() {
      this.$appAxios.get("/category").then((response) => {
        /*let data = response.data;
        for (let key in data) {
          this.productList.push({ ...data[key], id: key });
          console.log(this.productList) 
        }*/
        this.categories = response.data;
        console.log(this.categories);
      });
    },
    changeToSearch() {
      this.$emit("changeSearch", this.search);
    },
    onclikCategory(event) {
      //  console.log(data)
      this.categoryId = event.target.id;
      this.$emit("changeCategory", this.categoryId);
      // console.log(this.category)
    },
    onclickgetAllProduct() {
      this.$emit("getAllProducts");
    },
    logout(){
      store.dispatch("logout")
      this.$router.replace("/")
    }
  },
  computed: {
    LogoutClass() {
      return {
        "d-none": !store.getters.isAuthenticated,
      };
    },
    LoginClass() {
      return {
        "d-none": store.getters.isAuthenticated,
      };
    },
  },
};
</script>

<style>
ul {
  list-style: none;
}
li {
  font-size: medium;
}
a {
  text-decoration: none;
}
.searchStyle {
  font-size: 15px;
}
/*  Dropdown menu*/

.nav.navbar-nav > li:hover > ul.sub-menu2 {
  display: block;
  -webkit-animation: fadeInUp 400ms;
  animation: fadeInUp 400ms;
}

ul.sub-menu2 {
  position: absolute;
  top: 30px;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  list-style: none;
  padding: 0;
  margin: 0;
  width: 190px;
  -webkit-box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  display: none;
  z-index: 999;
}

.navbar-nav li ul.sub-menu2 li {
  padding: 10px 20px 0;
}

.navbar-nav li ul.sub-menu2 li:last-child {
  padding-bottom: 20px;
}

.navbar-nav li ul.sub-menu2 li a {
  color: #fff;
  background-color: transparent;
}
</style>