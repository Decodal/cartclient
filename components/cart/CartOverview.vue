<template>
  <!-- <table class="table is-hoverable is-fullwidth">
    <tbody>
      <CartOverviewProduct
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
      <tr>
        <td></td>
        <td></td>
        <td>
          <p class="has-text-weight-bold">Subtotal</p>
        </td>
        <td>
          {{ subtotal }}
        </td>
        <td></td>
      </tr>
      <slot name="rows" />
    </tbody>
  </table> -->

  <!-- Start Cart Area -->
  <section class="cart-area ptb-60">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <form>
                            <div class="cart-table table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Unit Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>

                                    <tbody >
                                      <CartOverviewProduct
                                        v-for="product in products"
                                        :key="product.id"
                                        :product="product"
                                      />
                                        
                                    </tbody>
                                </table>
                            </div>

                            <div class="cart-buttons">
                                <div class="row">
                                    <div class="col-lg-7 col-md-7">
                                        <div class="continue-shopping-box">
                                            <nuxt-link to="/products" class="btn btn-light">Continue Shopping</nuxt-link>
                                        </div>
                                    </div>

                                    <div class="col-lg-5 col-md-5 text-right">
                                        <div class="cart-totals">
                                            <h3>Cart Totals</h3>

                                            <ul>
                                                <li>Subtotal <span>{{ subtotal }}</span></li>
                                                <li>Shipping <span>$10.00</span></li>
                                                <li>Total <span><b>{{parseFloat(subtotal + 10).toFixed(2)}}</b></span></li>
                                            </ul>
                                            <nuxt-link to="/checkout" class="btn btn-light">Proceed to Checkout</nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
		<!-- End Cart Area -->
</template>

<script>
  import { mapGetters } from 'vuex'

  import CartOverviewProduct from '@/components/cart/CartOverviewProduct'

  export default {
    computed: {
      ...mapGetters({
        products: 'cart/products',
        subtotal: 'cart/subtotal'
      })
    },

    components: {
      CartOverviewProduct
    }
  }
</script>
