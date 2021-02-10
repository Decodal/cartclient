<template>
  <div>
    <TheAlert />
    <PageLoader />
    <MobileNavbar />
    <ShopSidebar />
    <FlyingButton />
    <QuickviewCategories />
    <QuickviewMain />
    <QuickviewCart />
    <Navigation />
    <nuxt/>
  </div>
</template>

<script>
  import Navigation from '@/layouts/partials/Navigation'
  import TheAlert from '@/components/globals/TheAlert'
  import PageLoader from '@/components/globals/PageLoader'
  import MobileNavbar from '@/components/globals/MobileNavbar'
  import ShopSidebar from '@/components/globals/ShopSidebar'
  import FlyingButton from '@/components/globals/FlyingButton'
  import QuickviewCategories from '@/components/globals/QuickviewCategories'
  import QuickviewMain from '@/components/globals/QuickviewMain'
  import QuickviewCart from '@/components/globals/QuickviewCart'


  export default {
    components: {
      Navigation,
      TheAlert,
      PageLoader,
      MobileNavbar,
      ShopSidebar,
      FlyingButton,
      QuickviewCategories,
      QuickviewMain,
      QuickviewCart,
    }
  }
</script>