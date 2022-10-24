<template>
  <div class="container">
    <div class="row">
  <Sidebar />
  <div class="col-lg-8 col-md-12">
        <div class="products-filter-options">
            <div class="row align-items-center">
                <div class="col d-flex">
                    <p>Showing 22 of 102 results</p>
                </div>

                <div class="col d-flex">
                    <span>Show:</span>

                    <div class="show-products-number">
                        <select>
                            <option value="1">22</option>
                            <option value="2">32</option>
                            <option value="3">42</option>
                            <option value="4">52</option>
                            <option value="5">62</option>
                        </select>
                    </div>

                    <span>Sort:</span>

                    <div class="products-ordering-list">
                        <select>
                            <option value="1">Featured</option>
                            <option value="2">Best Selling</option>
                            <option value="3">Price Ascending</option>
                            <option value="4">Price Descending</option>
                            <option value="5">Date Ascending</option>
                            <option value="6">Date Descending</option>
                            <option value="7">Name Ascending</option>
                            <option value="8">Name Descending</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div id="products-filter" class="products-collections-listing row">
            <!-- <ProductItem
                v-for="(product, index) in products"
                :product="product"
                :key="index"
                @clicked="toggle"
                :className="`col-lg-6 col-md-6 products-col-item`"
            ></ProductItem> -->
            <div class="col-lg-6 col-md-6 products-col-item" v-for="product in products" :key="product.slug">
              <Product 
                :product="product"
             
              />
            </div>
            
        </div>

        <nav class="woocommerce-pagination">
            <ul>
                <li><a href="#" class="page-numbers">1</a></li>
                <li><span class="page-numbers current">2</span></li>
                <li><a href="#" class="page-numbers">3</a></li>
                <li><a href="#" class="page-numbers">4</a></li>
                <li><span class="page-numbers dots">…</span></li>
                <li><a href="#" class="page-numbers">11</a></li>
                <li><a href="#" class="page-numbers">12</a></li>
                <li><a href="#" class="next page-numbers"><i class="fas fa-chevron-right"></i></a></li>
            </ul>
        </nav>

        <!-- <QuckView /> -->
    </div>
  </div>
  </div>
</template>

<script>
  // import QuckView from '../modals/QuckView';
  import { mutations } from '../../utils/sidebar-util';
  import Product from '@/components/products/Product';
  import Sidebar from '@/components/products/Sidebar';
 // import QuckView from '../modals/QuckView';
  export default {
    data () {
      return {
        products: []
      }
    },

    components: {
      Sidebar,
      Product
    },
    methods: {
        toggle() {
            mutations.toggleQuickView();
        }
    },
    async asyncData ({ params, app }) {
      let response = await app.$axios.$get(`products?category=${params.slug}`)

      return {
        products: response.data
      }
    }
  }
</script>
