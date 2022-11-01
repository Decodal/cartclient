<template>
  <!-- <div class="section">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-three-quarters">
          <ShippingAddress
            :addresses="addresses"
             v-model="form.address_id"
          />

          <PaymentMethods
            :payment-methods="paymentMethods"
            v-model="form.payment_method_id"
          />
          
          <article class="message" v-if="shippingMethodId">
            <div class="message-body">
              <h1 class="title is-5">
                Shipping
              </h1>
            <div class="select is-fullwidth">
                <select v-model="shippingMethodId">
                  <option v-for="shipping in shippingMethods" :key="shipping.id" :value="shipping.id">
                    {{ shipping.name }} ({{ shipping.price }})
                  </option>
                </select>
              </div>
            </div>
          </article>

          <article class="message" v-if="products.length">
            <div class="message-body">
              <h1 class="title is-5">
                Cart summary
              </h1>


              <CartOverviewProduct
                  v-for="product in products"
                  :key="product.id"
                  :product="product"
                />
            </div>
          </article>

          <article class="message">
            <div class="message-body">
              <button
                class="button is-info is-fullwidth is-medium"
                :disabled="empty || submitting"
                @click.prevent="order"
              > 
                Place order
              </button>
            </div>
          </article>
        </div>
        <div class="column is-one-quarter">
          <article class="message">
            <div class="message-body">
              <button
                class="button is-info is-fullwidth is-medium"
                :disabled="empty || submitting"
                @click.prevent="order"
              >
                Place order
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div> -->
  <div>
        <!-- Start Page Title Area -->
        <div class="page-title-area">
            <div class="container">
                <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
        <!-- End Page Title Area -->

        <!-- Start Checkout Area -->
		    <section class="checkout-area ptb-60">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="user-actions">
                            <i class="fas fa-sign-in-alt"></i>
                            <span>Returning customer? <nuxt-link to="/login">Click here to login</nuxt-link></span>
                        </div>
                    </div>
                </div>

                <form>
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <div class="billing-details">
                                <h3 class="title">Shipping Details</h3>
                                <ShippingAddress
                                    :addresses="addresses"
                                    v-model="form.address_id"
                                  />
                            </div>
                            <div class="order-details">
                              <div class="payment-method">
                                  <h3 class="title">Payment methods</h3>
                                    <PaymentMethods
                                      :payment-methods="paymentMethods"
                                      v-model="form.payment_method_id"
                                    />
                              </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <div class="order-details">
                                <h3 class="title">Your Order</h3>

                                <div class="order-table table-responsive">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Product Name</th>
                                                <th scope="col">Total</th>
                                            </tr>
                                        </thead>

                                        <tbody>

                                          <CartOverviewProduct
                                            v-for="product in products"
                                            :key="product.id"
                                            :product="product"
                                          />
                                        </tbody>
                                    </table>
                                </div>

                                <div class="payment-method">
                                    <!-- <p>
                                        <input type="radio" id="direct-bank-transfer" name="radio-group" checked>
                                        <label for="direct-bank-transfer">Direct Bank Transfer</label>

                                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                    </p>
                                    <p>
                                        <input type="radio" id="paypal" name="radio-group">
                                        <label for="paypal">PayPal</label>
                                    </p>
                                    <p>
                                        <input type="radio" id="cash-on-delivery" name="radio-group">
                                        <label for="cash-on-delivery">Cash on Delivery</label>
                                    </p> -->
                                </div>

                                <button  :disabled="empty || submitting"
                                   @click.prevent="order"
                                    class="btn btn-primary order-btn">Place Order</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
		<!-- End Checkout Area -->
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  import CartOverviewProduct from '@/components/cart/CartOverviewProduct'
  import ShippingAddress from '@/components/checkout/addresses/ShippingAddress'
  import PaymentMethods from '@/components/checkout/paymentMethods/PaymentMethods'

  export default {
    data () {
      return {
        submitting: false,
        addresses: [],
        shippingMethods: [],
        paymentMethods: [],
        form: {
          address_id: null,
          payment_method_id: null,
        }
      }
    },

    middleware: [
      'redirectIfGuest'
    ],

    watch: {
      'form.address_id' (addressId) {
        this.getShippingMethodsForAddress(addressId).then(() => {
          this.setShipping(this.shippingMethods[0])
        })
      },

      shippingMethodId () {
        this.getCart()
      }
    },

    components: {
      CartOverviewProduct,
      ShippingAddress,
      PaymentMethods
    },

    computed: {
      ...mapGetters({
        total: 'cart/total',
        products: 'cart/products',
        empty: 'cart/empty',
        shipping: 'cart/shipping'
      }),

      shippingMethodId: {
        get () {
          return this.shipping ? this.shipping.id : ''
        },
        set (shippingMethodId) {
          this.setShipping(
            this.shippingMethods.find(s => s.id === shippingMethodId)
          )
        }
      }
    },

    methods: {
      ...mapActions({
        setShipping: 'cart/setShipping',
        getCart: 'cart/getCart',
        flash: 'alert/flash'
      }),

      async order () {
      //  this.flash(`Ooops, didn't work`)
        this.submitting = true

        try {
          await this.$axios.$post('orders', {
            ...this.form,
            shipping_method_id: this.shippingMethodId
          })

          await this.getCart()

          this.$router.replace({
            name: 'orders'
          })
        } catch (e) {
          this.flash(e.response.data.message)

          this.getCart()
          //this.submitting = false
         //console.log(e.response);
        }

        this.submitting = false
      },

      async getShippingMethodsForAddress (addressId) {
        let response = await this.$axios.$get(`addresses/${addressId}/shipping`)

        this.shippingMethods = response.data

        return response
      }
    },

    async asyncData ({ app }) {
      let addresses = await app.$axios.$get('addresses')
      let paymentMethods = await app.$axios.$get('payment-methods')

      return {
       addresses: addresses.data,
       paymentMethods: paymentMethods.data
      }
    }
  }
</script>
