<template>
  <div>
    <TheAlert />
    <TopPanel v-if="isShowing" @clicked="onTopPanelClose"></TopPanel>
    <TopHeader></TopHeader>
    <Menubar></Menubar>
    <Navigation />
    <nuxt/>
    <Footer></Footer>
    <BackToTop></BackToTop>
  </div>
</template>

<script>
  import Navigation from '@/layouts/partials/Navigation'
  import TheAlert from '@/components/globals/TheAlert'
  import TopPanel from '@/layouts/partials/TopPanel'
  import TopHeader from '@/layouts/partials/TopHeader'
  import Menubar from '@/layouts/partials/Menubar';
  import Footer from '@/layouts/partials/Footer'
  import BackToTop from '@/layouts/partials/BackToTop';

  export default {
    components: {
      Navigation,
      TheAlert,
      TopPanel,
      TopHeader,
      Menubar,
      Footer,
      BackToTop
    },
    data() {
      return {
        loading: true,
        isShowing: true
      }
    },
    methods: {
      onTopPanelClose (value) {
        this.isShowing = value;
      }
    },
  }
</script>