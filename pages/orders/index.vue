<template>
  <!-- <div class="section">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-12">
          <h1 class="title is-4">Your orders</h1>

          <article class="message" v-if="orders.length">
            <div class="message-body">
              <table class="table is-hoverable is-fullwidth">
                <tbody>
                  <Order
                    v-for="order in orders"
                    :key="order.id"
                    :order="order"
                  />
                </tbody>
              </table>
            </div>
          </article>
          <p v-else>
            You have no orders
          </p>
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
                    <li>Your orders</li>
                </ul>
            </div>
        </div>
        <!-- End Page Title Area -->
        <!-- <CartItems /> -->
        <section class="products-details-area ptb-60">
            <div class="container">
                <div class="section-title"><h2><span class="dot"></span> Orders</h2></div>
                <div class="row">
                    <div class="col-12">
                      <div class="cart-table table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Order ID</th>
                                    <th scope="col">Order date</th>
                                    <th scope="col">Product name</th>
                                    <th scope="col">Subtotal</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>

                            <tbody >
                              <Order
                                v-for="order in orders"
                                :key="order.id"
                                :order="order"
                              />
                              
                            </tbody>
                        </table>
                    </div>
                 </div>
                </div>
              </div>
      </section>
        
    </div>
</template>

<script>
  import Order from '@/components/orders/Order'

  export default {
    // middleware: ["auth"],

    data () {
      return {
        orders: []
      }
    },
    // computed: {
    //   state() {
    //     return JSON.stringify(this.$auth.$state, undefined, 2);
    //   },
    // },
    // methods: {
    //   refreshTokens() {
    //     this.$auth.refreshTokens().catch((e) => {
    //       this.error = e + "";
    //     });
    //   },
    // },
    middleware: [
      'redirectIfGuest'
    ],

    components: {
      Order
    },

    async asyncData ({ app }) {
      let response = await app.$axios.$get('orders')

      return {
        orders: response.data
      }
    }
 }
</script>
