<template>
  <form action="#" @submit.prevent="store">
    <div class="row">
    <div class="col-lg-12 col-md-6">
      <div class="form-group">
        <label>Name<span class="required">*</span></label>
        <input class="input form-control" type="text" v-model="form.name">
      </div>
    </div>

    <div class="col-lg-12 col-md-6">
      <div class="form-group">
        <label>Address line 1<span class="required">*</span></label>
        <input class="input form-control" type="text" v-model="form.address_1">
      </div>
    </div>

    <div class="col-lg-12 col-md-6">
      <div class="form-group">
        <label>Town / City <span class="required">*</span></label>

        <input class="input form-control" type="text" v-model="form.city">
      </div>
    </div>

    <div class="col-md-6">
      <div class="form-group">
        <label class="label">Postal code</label>
        <input class="input form-control" type="text" v-model="form.postal_code">
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label class="label">Country</label>
        <div class="control">
          <div class="select is-fullwidth">
            <CountryDropdown v-model="form.country_id" />
          </div>
        </div>
      </div>
    </div>
   
    <div class="col-md-6">
      <div class="form-group">
        <button class="btn btn-primary ">
          Add address
        </button>
        <a class="button is-text" @click.prevent="$emit('cancel')">Cancel</a>
      </div>
    </div>
  </div>
  </form>
</template>

<script>
  import CountryDropdown from '@/components/form/CountryDropdown'

  export default {
    data () {
      return {
        form: {
          name: '',
          address_1: '',
          city: '',
          postal_code: '',
          country_id: '',
          default: true
        }
      }
    },

    components: {
      CountryDropdown
    },

    methods: {
      async store () {
        let response = await this.$axios.$post('addresses', this.form)

        this.$emit('created', response.data)
      }
    }
  }
</script>
