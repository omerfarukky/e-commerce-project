<template>
  <AppHeader />
  <div class="row">
    <div class="col-sm-9">
      <div id="cart_items">
        <div class="container">
          <div class="table-responsive cart_info">
            <table class="table table-condensed">
              <thead>
                <tr class="cart_menu">
                  <td class="image">Item</td>
                  <td class="description"></td>
                  <td class="price">Price</td>
                  <td class="quantity">Quantity</td>
                  <td class="total">Total</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="cart_product">
                    <a href=""
                      ><img src="../assets/images/cart/three.png" alt=""
                    /></a>
                  </td>
                  <td class="cart_description">
                    <h4><a href="">Colorblock Scuba</a></h4>
                    <p>Web ID: 1089772</p>
                  </td>
                  <td class="cart_price">
                    <p>$59</p>
                  </td>
                  <td class="cart_quantity">
                    <div class="cart_quantity_button">
                      <a class="cart_quantity_up" href=""> + </a>
                      <input
                        class="cart_quantity_input"
                        type="text"
                        name="quantity"
                        value="1"
                        autocomplete="off"
                        size="2"
                      />
                      <a class="cart_quantity_down" href=""> - </a>
                    </div>
                  </td>
                  <td class="cart_total">
                    <p class="cart_total_price">$59</p>
                  </td>
                  <td class="cart_delete">
                    <a class="cart_quantity_delete" href=""
                      ><i class="fa fa-times"></i
                    ></a>
                  </td>
                </tr>
                <tr>
                  <td class="cart_product">
                    <a href=""
                      ><img src="../assets/images/cart/three.png" alt=""
                    /></a>
                  </td>
                  <td class="cart_description">
                    <h4><a href="">Colorblock Scuba</a></h4>
                    <p>Web ID: 1089772</p>
                  </td>
                  <td class="cart_price">
                    <p>$59</p>
                  </td>
                  <td class="cart_quantity">
                    <div class="cart_quantity_button">
                      <a class="cart_quantity_up" href=""> + </a>
                      <input
                        class="cart_quantity_input"
                        type="text"
                        name="quantity"
                        value="1"
                        autocomplete="off"
                        size="2"
                      />
                      <a class="cart_quantity_down" href=""> - </a>
                    </div>
                  </td>
                  <td class="cart_total">
                    <p class="cart_total_price">$59</p>
                  </td>
                  <td class="cart_delete">
                    <a class="cart_quantity_delete" href=""
                      ><i class="fa fa-times"></i
                    ></a>
                  </td>
                </tr>
                <tr>
                  <td class="cart_product">
                    <a href=""
                      ><img src="../assets/images/cart/three.png" alt=""
                    /></a>
                  </td>
                  <td class="cart_description">
                    <h4><a href="">Colorblock Scuba</a></h4>
                    <p>Web ID: 1089772</p>
                  </td>
                  <td class="cart_price">
                    <p>$59</p>
                  </td>
                  <td class="cart_quantity">
                    <div class="cart_quantity_button">
                      <a class="cart_quantity_up" href=""> + </a>
                      <input
                        class="cart_quantity_input"
                        type="text"
                        name="quantity"
                        value="1"
                        autocomplete="off"
                        size="2"
                      />
                      <a class="cart_quantity_down" href=""> - </a>
                    </div>
                  </td>
                  <td class="cart_total">
                    <p class="cart_total_price">$59</p>
                  </td>
                  <td class="cart_delete">
                    <a class="cart_quantity_delete" href=""
                      ><i class="fa fa-times"></i
                    ></a>
                  </td>
                </tr>
                <tr>
                  <td class="cart_product">
                    <a href=""
                      ><img src="../assets/images/cart/three.png" alt=""
                    /></a>
                  </td>
                  <td class="cart_description">
                    <h4><a href="">Colorblock Scuba</a></h4>
                    <p>Web ID: 1089772</p>
                  </td>
                  <td class="cart_price">
                    <p>$59</p>
                  </td>
                  <td class="cart_quantity">
                    <div class="cart_quantity_button">
                      <a class="cart_quantity_up" href=""> + </a>
                      <input
                        class="cart_quantity_input"
                        type="text"
                        name="quantity"
                        value="1"
                        autocomplete="off"
                        size="2"
                      />
                      <a class="cart_quantity_down" href=""> - </a>
                    </div>
                  </td>
                  <td class="cart_total">
                    <p class="cart_total_price">$59</p>
                  </td>
                  <td class="cart_delete">
                    <a class="cart_quantity_delete" href=""
                      ><i class="fa fa-times"></i
                    ></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div id="cart_items">
        <div class="container">
          <div class="table-responsive cart_info">
            <table class="table table-condensed">
              <tbody>
                <tr class="total_cart">
                  <td colspan="2">
                    <table class="table table-condensed total-result">
                      <tr>
                        <td>Cart Sub Total</td>
                        <td>$59</td>
                      </tr>
                      <tr>
                        <td>Exo Tax</td>
                        <td>$2</td>
                      </tr>
                      <tr class="shipping-cost">
                        <td>Shipping Cost</td>
                        <td>Free</td>
                      </tr>
                      <tr>
                        <td>Total</td>
                        <td>$61</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <router-link
              :to="{ name: 'CheckoutPage' }"
              class="btn btn-primary btn-lg btn-block mb-3"
            >
              Alışverişi Tamamla
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <AppFooter />
  <!--/#cart_items-->
</template>


<style>
.table-responsive {
  overflow-x: hidden !important;
}
.total_cart {
  font-size: 20px;
  padding-right: 0;
}
#cart_items {
  padding-left: 0;
}
</style>