<template>

    <div>
      <!-- <h1 class="title is-5">Ship to</h1> -->

      <template v-if="selecting">
        <ShippingAddressSelector
          :addresses="addresses"
          :selectedAddress="selectedAddress"
          @click="addressSelected"
        />
      </template>
      <template v-else-if="creating">
        <ShippingAddressCreator
          @cancel="creating = false"
          @created="created"
        />
      </template>
      <template v-else>
        <template v-if="selectedAddress">
          <div class="row">
            <div class="col-lg-12 col-md-6">
              <p>{{ selectedAddress.name }}</p>
            </div>
            <div class="col-lg-12 col-md-6">
              <p>{{ selectedAddress.address_1 }}</p>
            </div>
            <div class="col-lg-12 col-md-6">
              <p>{{ selectedAddress.city }}</p>
            </div>
            <div class="col-lg-12 col-md-6">
              <p>{{ selectedAddress.postal_code }}</p>
            </div>
            <div class="col-lg-12 col-md-6">
              <p>{{ selectedAddress.country.name }}</p>
            </div>
          </div>

        </template>

        <div class="row">
            <div class="col-6">
              <p class="control">
                <a href="" class="btn btn-primary" @click.prevent="selecting = true">Change shipping address</a>
              </p>
            </div>
            <div class="col-6">
              <p class="control">
                <a href="" class="btn btn-primary" @click.prevent="creating = true">Add an address</a>
              </p>
            </div>
          </div>
      </template>   
    </div>

</template>

<script>
  import ShippingAddressSelector from './ShippingAddressSelector'
  import ShippingAddressCreator from './ShippingAddressCreator'

  export default {
    data () {
      return {
        selecting: false,
        creating: false,
        localAddresses: this.addresses,
        selectedAddress: null
      }
    },

    watch: {
      selectedAddress (address) {
        this.$emit('input', address.id)
      }
    },

    components: {
      ShippingAddressSelector,
      ShippingAddressCreator
    },

    props: {
      addresses: {
        required: true,
        type: Array
      }
    },

    computed: {
      defaultAddress () {
        return this.localAddresses.find(a => a.default === 1)
      }
    },

    methods: {
      addressSelected (address) {
        this.switchAddress(address)
        this.selecting = false
      },

      switchAddress (address) {
        this.selectedAddress = address
      },

      created (address) {
        this.localAddresses.push(address)
        this.creating = false

        this.switchAddress(address)
      }
    },

    created () {
      if (this.addresses.length) {
        this.switchAddress(this.defaultAddress)
      }
    }
  }
</script>
