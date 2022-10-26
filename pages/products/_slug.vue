<template>
    <!-- <div class="section">
        <div class="container is-fluid">
            <div class="columns">
            <div class="column is-half">
                <img src="http://via.placeholder.com/620x620" alt="Product name">
            </div>
            <div class="column is-half">
                <section class="section">
                <h1 class="title is-4">
                    {{ product.name }}
                </h1>
                <p v-if="product.description">
                    {{ product.description }}
                </p> 

                <hr>

                <span class="tag is-rounded is-medium is-dark" v-if="!product.in_stock">
                    Out of stock
                </span>

                <span class="tag is-rounded is-medium">
                    {{ product.price }}
                </span>
                </section>

                <section class="section">
                <form action="" @submit.prevent="add">
                    <ProductVariation
                        v-for="(variations, type) in product.variations"
                        :type="type"
                        :variations="variations"
                        :key="type"
                        v-model="form.variation"
                    />

                    <div class="field has-addons" v-if="form.variation">
                        <div class="control">
                          <div class="select is-fullwidth">
                            <select name="" id="" v-model="form.quantity">
                              <option :value="x" v-for="x in parseInt(form.variation.stock_count)" :key="x">
                                  {{ x }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="control">
                          <button type="submit" class="button is-info">Add to cart</button>
                        </div>
                    </div>
                </form>
                </section>
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
                    <li>{{product.name}}</li>
                </ul>
            </div>
        </div>
        <!-- End Page Title Area -->

        <!-- Start Products Details Area -->
        <section class="products-details-area ptb-60">
            <div class="container">
                <div class="row">
                    <ProductImages />
                    <!-- <Details 
                        :id = "product.id"
                        :name = "product.name" 
                        :price = "product.price"
                        :image = "product.image"
                    /> -->
                    <div class="col-lg-6 col-md-6">
                      <div class="product-details-content">
                          <h3>{{ product.name }}</h3>
                          <span class="tag is-rounded is-medium is-dark" v-if="!product.in_stock">
                              Out of stock
                          </span>
                          <div class="price">
                              <span class="new-price">{{product.price}}</span>
                          </div>

                          <div class="product-review">
                              <div class="rating">
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star-half-alt"></i>
                              </div>
                              <a href="#" class="rating-count">3 reviews</a>
                          </div>

                          <ul class="product-info">
                              <li><span>Vendor:</span> <a href="#">Lereve</a></li>
                              <li><span>Availability:</span> <a href="#">In stock (7 items)</a></li>
                              <li><span>Product Type:</span> <a href="#">T-Shirt</a></li>
                          </ul>

                          <div class="product-color-switch">
                              <h4>Color:</h4>

                              <ul>
                                  <li><a href="#" title="Black" class="color-black"></a></li>
                                  <li><a href="#" title="White" class="color-white"></a></li>
                                  <li class="active"><a href="#" title="Green" class="color-green"></a></li>
                                  <li><a href="#" title="Yellow Green" class="color-yellowgreen"></a></li>
                                  <li><a href="#" title="Teal" class="color-teal"></a></li>
                              </ul>
                          </div>

                          <div class="product-size-wrapper">
                              <h4>Size:</h4>

                              <ul>
                                  <li><a href="#">XS</a></li>
                                  <li class="active"><a href="#">S</a></li>
                                  <li><a href="#">M</a></li>
                                  <li><a href="#">XL</a></li>
                                  <li><a href="#">XXL</a></li>
                              </ul>
                          </div>
                          <section class="section product-add-to-cart">
                            <form action="" @submit.prevent="add">
                                <ProductVariation
                                    v-for="(variations, type) in product.variations"
                                    :type="type"
                                    :variations="variations"
                                    :key="type"
                                    v-model="form.variation"
                                />

                                <div class="field has-addons" v-if="form.variation">
                                    <div class="control">
                                      <div class="select is-fullwidth">
                                        <select name="" id="" v-model="form.quantity">
                                          <option :value="x" v-for="x in parseInt(form.variation.stock_count)" :key="x">
                                              {{ x }}
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="control">
                                      <!-- <button type="submit" class="button is-info">Add to cart</button> -->
                                      <button type="submit" class="btn btn-primary">
                                          <i class="fas fa-cart-plus"></i> Add to Cart
                                      </button>
                                    </div>
                                </div>
                            </form>
                          </section>
                          <!-- <div class="product-add-to-cart">
                              <div class="input-counter">
                                 <span @click="decreaseQuantity()" class="minus-btn"><i class="fas fa-minus"></i></span>
                                  {{quantity}}
                                  <span @click="increaseQuantity()" class="plus-btn"><i class="fas fa-plus"></i></span>
                              </div>

                               <button v-if="getExistPId" type="submit" class="btn btn-danger" @click="addToCart()">
                                  <i class="fas fa-cart-plus"></i> Already Added 
                              </button> 

                              <button type="submit" class="btn btn-primary">
                                  <i class="fas fa-cart-plus"></i> Add to Cart
                              </button>
                          </div> -->

                          <div class="wishlist-compare-btn">
                              <a href="#" class="btn btn-light"><i class="far fa-heart"></i> Add to Wishlist</a>
                              <a href="#" class="btn btn-light"><i class="fas fa-balance-scale"></i> Add to Compare</a>
                          </div>

                          <div class="buy-checkbox-btn">
                              <div class="item">
                                  <input class="inp-cbx" id="cbx" type="checkbox">
                                  <label class="cbx" for="cbx">
                                      <span>
                                          <svg width="12px" height="10px" viewbox="0 0 12 10">
                                              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                          </svg>
                                      </span>
                                      <span>I agree with the terms and conditions</span>
                                  </label>
                              </div>

                              <div class="item">
                                  <a href="#" class="btn btn-primary">Buy it now!</a>
                              </div>
                          </div>
                      </div>
                  </div>
                    <DetailsInfo />
                    <!-- <RelatedProducts :id = "product.id" /> -->
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import ProductImages from '../../components/products/ProductImages';
import DetailsInfo from '../../components/products/DetailsInfo';
// import RelatedProducts from '../../components/products/RelatedProducts';

import ProductVariation from '@/components/products/ProductVariation'

export default {
    data () {
      return {
        product: null,
        form: {
          variation: '',
          quantity: 1
        }
      }
    },

    watch: {
      'form.variation' () {
        this.form.quantity = 1
      }
    },

    components: {
      ProductImages, DetailsInfo, ProductVariation
    },

    methods: {
      ...mapActions({
        store: 'cart/store'
      }),

      add () {
        this.store([{
          id: this.form.variation.id, quantity: this.form.quantity
        }])

        this.form = {
          variation: '',
          quantity: 1
        }
      }
    },

    async asyncData ({ params, app }) {
        let response = await app.$axios.$get(`products/${params.slug}`)

        return {
            product: response.data
        }
    }
}
</script>