<template>
  <div>
    <TheAlert />
    <TopPanel v-if="isShowing" @clicked="onTopPanelClose"></TopPanel>
    <TopHeader></TopHeader>
    <Menubar></Menubar>
    <Navigation />
    <nuxt/>
      <Banner />
      <Facility />
      <!-- <TrendingProducts /> -->
      <BestSellers />
      
    <Footer></Footer>
    <SiteLoader  v-if="loading" />
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
  import SiteLoader from '@/layouts/partials/SiteLoder';

  import Banner from '../components/diction-two/Banner';
  import Facility from '../components/diction-two/Facility';
  import TrendingProducts from '../components/diction-two/TrendingProducts';
  import BestSellers from '@/components/diction-two/BestSellers';
  import Offer from '../components/diction-two/Offer';
  import News from '../components/diction-two/News';
  import Subscribe from '../components/common/Subscribe';
  import Partner from '../components/common/Partner';
  import InstagramPhotos from '../components/common/InstagramPhotos';

  export default {
    components: {
      Navigation,
      TheAlert,
      TopPanel,
      TopHeader,
      Menubar,
      Footer,
      BackToTop,
      SiteLoader,
      Banner,
      Facility, 
      TrendingProducts,
      BestSellers,
      Offer,
      News,
      Subscribe,
      Partner,
      InstagramPhotos
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
    watch: {
    '$route' (pathUrl){
      this.loading = true;
      setTimeout(() => { this.loading = false; }, 600);
    }
    },
    mounted(){
      setTimeout(() => { this.loading = false; }, 600);
    }
  }
</script>