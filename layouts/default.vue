<template>
  <div>
    <TheAlert />
    <TopPanel v-if="isShowing" @clicked="onTopPanelClose"></TopPanel>
    <TopHeader></TopHeader>
    <Navigation />
    
    <nuxt/>
  </div>
</template>

<script>
  import Navigation from '@/layouts/partials/Navigation'
  import TheAlert from '@/components/globals/TheAlert'
  import TopPanel from '@/layouts/partials/TopPanel'
  import TopHeader from '@/layouts/partials/TopHeader'

  export default {
    components: {
      Navigation,
      TheAlert,
      TopPanel,
      TopHeader
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