<template>
    <section class="category-boxes-area pt-60">
        <div class="container-fluid">
            <div class="row">
                <template v-for="category in categories">
                    <div class="col-lg-3 col-sm-6 col-md-6" :key="category.slug">
                        <div class="single-category-boxes">
                            <nuxt-link :to="{ name: 'categories-slug', params: { slug: category.slug } }">
                                <img src="../../assets/img/category-products-img5.jpg" alt="image">

                                <h3>{{ category.name }}</h3>

                                <div class="shop-now-btn">Shop Now</div>
                            </nuxt-link>                            
                            <!-- <nuxt-link to="/products" class="link-btn"></nuxt-link> -->
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {

        computed: {
            ...mapGetters({
                categories: 'categories',
                cartCount: 'cart/count'
            }),

        }
    }
</script>