<template>
 <div class="section">
   <div class="container is-fluid">
     <p>Home</p>
       <Banner />
      <!--<Facility />
      <TrendingProducts />  -->
      <BestSellers />
      
      <CategoryPanels />

      <!--<Offer />
      <News />
      <Subscribe />
      <Partner />
      <InstagramPhotos /> -->
   </div>
 </div>
</template>

<script>
import Banner from '../components/diction-two/Banner';
import Facility from '../components/diction-two/Facility';
import TrendingProducts from '../components/diction-two/TrendingProducts';
import BestSellers from '../components/diction-two/BestSellers';
import CategoryPanels from '../components/diction-two/CategoryPanels';
import Offer from '../components/diction-two/Offer';
import News from '../components/diction-two/News';
import Subscribe from '../components/common/Subscribe';
import Partner from '../components/common/Partner';
import InstagramPhotos from '../components/common/InstagramPhotos';
export default {
  components: {
      Banner,
      Facility, 
      TrendingProducts,
      BestSellers,
      Offer,
      CategoryPanels,
      News,
      Subscribe,
      Partner,
      InstagramPhotos
  }
}
</script>
