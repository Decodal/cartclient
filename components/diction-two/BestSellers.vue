<template>
    <div>
        <!-- Start Best Sellers Area -->
        <section class="best-sellers-area pb-60">
            <div class="container">
                <div class="section-title without-bg">
                    <h2><span class="dot"></span> Products</h2>
                </div>
                Where are teh products
                <div class="row">

                    <!-- <ProductItem
                        v-for="product in products"
                        :product="product"
                        :key="product.id"
                        @clicked="toggle"
                        :className="`col-lg-3 col-md-6 col-sm-6`"
                    ></ProductItem> -->
                    <div class="column is-3" v-for="product in products" :key="product.slug">
                        <Product :product="product" />
                    </div>
                </div>
            </div>
        </section>
        <!-- End Best Sellers Area -->
        <!-- <QuckView /> -->
    </div>
</template>

<script>
import QuckView from '../modals/QuckView';
import { mutations } from '../../utils/sidebar-util';
// import ProductItem from '../landing-one/ProductItem';
import Product from '@/components/products/Product';
export default {
   data () {
      return {
        products: []
      }
    },

    components: {
      Product
    },

    async asyncData ({ params, app }) {
      let response = await app.$axios.$get(`products?category=${params.slug}`)

      return {
        products: response.data
      }
    }
    // computed: {
    //     products(){
    //         return this.$store.state.products.all.filter(product => product.bestSellers === true)
    //     }
    // }
    // async asyncData ({ params, app }) {
    //   let response = await app.$axios.$get(`products?category=${params.slug}`)

    //   return {
    //     products: response.data
    //   }
    // }
}
</script>