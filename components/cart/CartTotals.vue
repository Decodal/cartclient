<template>
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
