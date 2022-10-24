<template>
  <!-- <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <nuxt-link :to="link">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="">
        </nuxt-link>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <nuxt-link :to="link" class="title is-5">{{ product.name }}</nuxt-link>
        </div>
      </div>

      <div class="content">
        <p v-if="product.description">
          {{ product.description }}
        </p>

        <span class="tag is-rounded is-medium">{{ product.price }}</span>
      </div>
    </div>
  </div> -->

  <div>
        <div class="single-product-box">
            <div class="product-image">
                <nuxt-link :to="link">
                    <!-- <img :src="product.image" :alt="product.name">
                    <img :src="product.imageHover" :alt="product.name"> -->
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt=""/>
                </nuxt-link>

                <ul>
                    <li>
                        <a 
                            href="javascript:void(0)" 
                            title="Quick View"
                            v-b-tooltip.hover
                            @click.prevent="quickView"
                        >
                            <i class="far fa-eye"></i>
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#"
                            title="Add to Wishlist"
                            v-b-tooltip.hover
                        >
                            <i class="far fa-heart"></i>
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#"
                            title="Add to Compare"
                            v-b-tooltip.hover
                        >
                            <i class="fas fa-sync"></i>
                        </a>
                    </li>
                </ul>
                
                <!-- <Timer v-if="product.timePeriod" v-bind:dateTime="product.dateTime"></Timer> -->
            </div>

            <div class="product-content">
                <h3>
                    <nuxt-link :to="link">{{product.name}}</nuxt-link>
                </h3>

                <div class="product-price">
                    <span 
                        class="old-price"
                        v-if="product.offer"
                    >
                        {{product.price - product.offerPrice}}
                    </span>
                    <span class="new-price">{{product.price}}</span>
                </div>

                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>

                <a 
                    v-if="getExistPId === product.id"
                    href="javascript:void(0)" 
                    class="btn btn-light added-btn"
                    >
                    Added Already!
                </a>

                <a 
                    v-else
                    href="javascript:void(0)" 
                    class="btn btn-light" 
                    >
                    Add to Cart
                </a>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'ProductItem',
    data(){
        return {
            getExistPId: null
        }
    },
    props: {
      product: {
        required: true,
        type: Object
      }
    },

    computed: {
      link () {
        return {
          name: 'products-slug',
          params: {
            slug: this.product.slug
          }
        }
      }
    }
  }
</script>
