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
              <div class="section-title"><h2><span class="dot"></span> Cart</h2></div>
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
                            <CartTotals />
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
  import CartTotals from '@/components/cart/CartTotals'

  export default {
    computed: {
      ...mapGetters({
        products: 'cart/products',
        subtotal: 'cart/subtotal'
      })
    },

    components: {
      CartOverviewProduct,
      CartTotals
    }
  }
</script>
