<template>
    <div>
        <!-- Start Navbar Area -->
        <div :class="['navbar-area', {'is-sticky': isSticky}]">
            <div class="comero-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <nuxt-link class="navbar-brand" to="/">
                            <img src="../../assets/img/logo.png" alt="logo">
                        </nuxt-link>

                        <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>

                        <b-collapse class="collapse navbar-collapse" id="navbarSupportedContent" is-nav>
                            <ul class="navbar-nav">
                                
                                <li class="nav-item p-relative"><a href="#" class="nav-link">Home <i class="fas fa-chevron-down"></i></a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <nuxt-link to="/" class="nav-link active">Home Style One</nuxt-link>
                                        </li>

                                        <li class="nav-item">
                                            <nuxt-link to="/diction-two" class="nav-link active">Home Style Two</nuxt-link>
                                        </li>
                                        <li class="nav-item">
                                            <nuxt-link to="/diction-three" class="nav-link active">Home Style Three</nuxt-link>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item p-relative"><a href="#" class="nav-link">Shop <i class="fas fa-chevron-down"></i></a>
     
                                    <ul class="dropdown-menu" >
                                        <template v-for="category in categories">
                                           
                                            <template v-if="category.children.length">
                                              
                                                    <div class="navbar-item is-hoverable has-dropdown" :key="category.slug">
                                                        <li class="nav-item" >
                                                            <nuxt-link 
                                                                :to="{ name: 'categories-slug', params: { slug: category.slug } }"
                                                                class="navbar-link"
                                                            >
                                                                {{ category.name }}
                                                            </nuxt-link>
                                                        </li>
                                                        <!-- <div class="navbar-dropdown">
                                                            <nuxt-link 
                                                            :to="{ name: 'categories-slug', params: { slug: child.slug } }"
                                                            class="navbar-item"
                                                            v-for="child in category.children"
                                                            :key="child.slug"
                                                            >
                                                            {{ child.name }}
                                                            </nuxt-link>
                                                        </div> -->
                                                    </div>
                                               
                                            </template>
                                            <template v-else>
                                                <li class="nav-item" :key="category.slug">
                                                    <nuxt-link :to="{ name: 'categories-slug', params: { slug: category.slug } }"  class="navbar-item nav-link">
                                                    {{ category.name }}
                                                    </nuxt-link>
                                                </li>
                                            </template>
                                       
                                        </template>
                                    </ul>
                                </li>

                                <li class="nav-item p-relative"><a href="#" class="nav-link">Pages <i class="fas fa-chevron-down"></i></a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <nuxt-link to="/cart" class="nav-link">Cart</nuxt-link>
                                        </li>

                                        <li class="nav-item">
                                            <nuxt-link to="/checkout" class="nav-link">Checkout</nuxt-link>
                                        </li>

                                        <li class="nav-item">
                                            <nuxt-link to="/login" class="nav-link">Login</nuxt-link>
                                        </li>

                                        <li class="nav-item">
                                            <nuxt-link to="/signup" class="nav-link">Signup</nuxt-link>
                                        </li>

                                        <li class="nav-item">
                                            <nuxt-link to="/not-found" class="nav-link">Error 404</nuxt-link>
                                        </li>

                                        <li class="nav-item">
                                            <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
                                        </li>
                                    </ul>
                                </li>


                                <li class="nav-item">
                                    <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
                                </li>
                            </ul>
<!-- 
                            <div class="others-option">
                                <div class="option-item">
                                    <nuxt-link to="/login">Login</nuxt-link>
                                </div>
                                <div class="option-item">
                                    <a @click.prevent="toggle" href="#">
                                        Cart({{cart.length}}) <i class="fas fa-shopping-bag"></i>
                                    </a>
                                </div>
                            </div> -->
                            <div class="others-option">

                                    <template v-if="!$auth.loggedIn">
                                        <div class="option-item">
                                            <nuxt-link :to="{ name: 'auth-signin' }">
                                            Sign in
                                            </nuxt-link>
                                        </div>
                                    </template>
                             
                                <template v-else>
                                    <div class="option-item">
                                        <a href="#" >
                                        {{ $auth.user.name }}
                                        </a>
                                    </div>
                                    <div class="option-item">
                                        <nuxt-link :to="{ name: 'orders' }">
                                        Orders
                                        </nuxt-link>
                                    </div>

                                    <div class="option-item">
                                        <nuxt-link :to="{ name: 'cart' }">
                                        Cart ({{ cartCount }}) <i class="fas fa-shopping-bag"></i>
                                        </nuxt-link>
                                    </div>
                                </template>
                            </div>
                        </b-collapse>
                    </nav>
                </div>
            </div>
        </div>
        <!-- End Navbar Area -->

        <SidebarPanel></SidebarPanel>
    </div>
</template>

<script>
import SidebarPanel from '@/layouts/partials/SidebarPanel';
import { mutations } from '@/utils/sidebar-util';
import { mapGetters } from 'vuex'

export default {
    components: {
        SidebarPanel
    },
    data(){
        return {
            isSticky: false
        }
    },
    mounted(){
        const that = this;
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY;
            if(scrollPos >= 100){
                that.isSticky = true;
            } else {
                that.isSticky = false;
            }
        })
    },
    computed: {
    ...mapGetters({
        categories: 'categories',
        cartCount: 'cart/count'
      })
  
        // cart(){
        //     return this.$store.getters.cart
        // }
    },
    methods: {
        toggle() {
            mutations.toggleNav()
        }
    }
}
</script>