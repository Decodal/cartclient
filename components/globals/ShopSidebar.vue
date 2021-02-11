<template>
  <div class="main-sidebar">
    <div class="sidebar-brand">
        <a href="home.html"><img src="assets/img/logo/nephos.svg" alt=""></a>
    </div>
    <div class="sidebar-inner">
        <ul class="icon-menu">
            <!-- Shop sidebar trigger -->
            <li>
                <nuxt-link :to="{ name: 'index' }" class="navbar-item"  id="open-shop">
                    <i data-feather="home"></i>
                </nuxt-link>
            </li>
            <!-- Cart sidebar trigger -->
            <li>
                <a href="javascript:void(0);" id="open-cart"><i data-feather="shopping-cart"></i><span id="cart-dot" class="cart-items gelatine is-hidden"></span></a>
            </li>
            <!-- Search trigger -->
            <li>
                <a href="javascript:void(0);" id="open-search"><i data-feather="search"></i></a>
                <a href="javascript:void(0);" id="close-search" class="is-hidden is-inactive"><i data-feather="x"></i></a>
            </li>
            <!-- Shop Filters -->
            <li class="is-hidden">
                <a id="open-filters"><i data-feather="filter"></i></a>
            </li>
            <!-- Shop Wishlist -->
            <li id="sidebar-wishlist-button" class="is-hidden">
                <a class="sidebar-whishlist modal-trigger" data-modal="add-to-wishlist-modal"><i data-feather="heart"></i></a>
            </li>
        </ul>

        <!-- User account -->
        <ul class="bottom-menu">
            <!-- {{> sidebar-item-auth}}
            {{> sidebar-item-fold}} -->
        </ul>
    </div>
</div>
</template>

<script>
  export default {

  }
</script>
